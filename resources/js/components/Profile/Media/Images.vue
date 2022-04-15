<template>
  <div>
    <div class="" style="margin-top: 10px;">
      <div class="galeria animated fadeIn" id="galeria_looler">
        <div class="contenedor-imagenes" id="content_img">
          <div :id="'galery' + publi.id" class="imagen fadeIn" v-for="(publi, idx) in publications" :key="idx">
            <div v-if="its_my_profile" class="imagen animated fadeIn">
              <a>
                <img @click="showFile(publi.image)" v-if="publi.image != null" class="animated fadeIn"
                  v-lazy.container="publi.image" />
              </a>

            </div>
            <div v-else class="imagen animated fadeIn">
              <div v-if="publi.post['locked'] == 1" class="imagen animated fadeIn">
                <div v-if="ifBuy(publi.post)" class="imagen animated fadeIn">
                  <a>
                    <img @click="showFile(publi.image)" v-if="publi.image" class="animated fadeIn"
                      v-lazy.container="publi.image" />
                  </a>
                </div>
                <div v-else class="imagen animated fadeIn">
                  <a>
                    <img @click="showFileBlock()" src="/images/blocked.svg" />
                  </a>
                </div>

              </div>
              <div v-else class="imagen animated fadeIn">
                <a>
                  <img @click="showFile(publi.image)" v-if="publi.image" class="animated fadeIn"
                    v-lazy.container="publi.image" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <infinite-loading ref="InfiniteLoading" :identifier="infiniteImagetId" @infinite="infiniteHandlerImage">
        <div class="text-white" slot="no-more">No hay nada publicado aún</div>
        <div slot="no-results">No hay más publicaciones</div>
      </infinite-loading>
    </div>
    <div class="modal fade stories" id="StoryDefault" data-bs-backdrop="static" tabindex="-1" style="display: none;"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!-- <div class="story-bar"></div> -->
          <div class="story-image" style="background: rgba(0, 0, 0, .9);">
            <div class="landing_hero" style="    display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
            height: 100%;">
              <img :src="image" alt="image" class="img_gallery" style="    width: 100%;
              height: auto;
              top: 50%;
              left: 50%;position: inherit;  transform: none">
            </div>

          </div>
          <div class="modal-header">
         
            <a href="#" data-bs-dismiss="modal" class="close-stories" style="    position: absolute;
            right: 8px;
            top: 8px;">
              <ion-icon name="close" role="img" class="md hydrated text-secondary" aria-label="close"></ion-icon>
            </a>
          </div>
          <div class="modal-body"></div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>


  Vue.component("InfiniteLoading", require("vue-infinite-loading"));

  export default {
    props: ['user_id', 'usuario'],

    data() {
      return {
        page: 0,
        infiniteImagetId: +new Date(),
        publications: [],
        its_my_profile: this.user_id == this.usuario.id ? true : false,
        image: ""
      };
    },
    methods: {
      infiniteHandlerImage($state) {
        this.page++;
        axios
          .get(`/get-all-images-profile-looler?page=${this.page}&user_id=${this.user_id}`)
          .then((response) => {
            let data = response.data.data;

            if (data.length) {
              this.publications = this.publications.concat(data);
              $state.loaded();
            } else {
              $state.complete();
            }
          });
      },
      showFile: function (image) {
        this.image = image
        $("#StoryDefault").modal("show");



      },
      showFileBlock() {

      },
      ifBuy(post) {
        let buy = post.post_buy

        let post_buy_check = buy.find(data => data.user_id == this.usuario.id);
        if (post_buy_check) {

          return true
        } else {

          return false
        }



      }
    },
  };
</script>

<style>
</style>