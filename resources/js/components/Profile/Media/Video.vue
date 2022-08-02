<template>
  <div>
    <div class="" style="margin-top: 10px;">
      <div class="galeria animated fadeIn" id="galeria_looler">
        <div class="contenedor-imagenes" id="content_img">
          <div :id="'galery' + publi.id" class="imagen fadeIn" style="position: relative !important;"
            v-for="(publi, key) in publications" :key="key">

            <div v-if="its_my_profile" class="imagen animated fadeIn" click="showVideo(publi.video)">
              <a>
                <div class="video_play_profile hover_link">
                  <img src="/menu_icons/white/play.svg" class="icon-play-video" />
                </div>
                <img class="animated fadeIn" v-if="publi.thumbail" @click="showVideo(publi.video)" v-lazy.container="publi.thumbail" />

              </a>

            </div>
            <div v-else class="imagen animated fadeIn" click="showVideo(publi.video)">
              <div v-if="publi.post['locked'] == 1" class="imagen animated fadeIn">
                <div v-if="ifBuy(publi.post)" class="imagen animated fadeIn">
                  <div class="video_play_profile hover_link">
                   
                      <img src="/menu_icons/white/play.svg" class="icon-play-video"/>
                 

                  </div>
                  <img class="animated fadeIn"  @click="showVideo(publi.video)" v-if="publi.thumbail" v-lazy.container="publi.thumbail" />


                </div>
                <div v-else class="imagen animated fadeIn background-blocked">
                  <div class="center">
                    <img src="/images/blocked.svg" class="img-blocked " />
                  </div>
                </div>

              </div>
              <div v-else class="imagen animated fadeIn" @click="showVideo(publi.video)">
                <div class="video_play_profile hover_link">
                    <img src="/menu_icons/white/play.svg" class="icon-play-video" />
                </div>
                <img class="animated fadeIn" v-if="publi.thumbail"  @click="showVideo(publi.video)" v-lazy.container="publi.thumbail" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <infinite-loading ref="InfiniteLoading" :identifier="infiniteVideotId" @infinite="infiniteHandlerVideo">
        <div class="text-white" slot="no-more">No hay nada publicado aún</div>
        <div slot="no-results">No hay más publicaciones</div>
      </infinite-loading>
    </div>

    <div class="modal fade modalbox" id="modalVideo" data-bs-backdrop="static" tabindex="-1" style="display: none;"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="background: rgb(0,0,0,0.3);">
          <div class="modal-header" style="background: rgb(0,0,0,0.1);border-bottom: none">
            <a class="profile-detail">

            </a>
            <a href="#" data-bs-dismiss="modal" class="close-stories">
              <ion-icon name="close" role="img" style="color:white;font-size:28px;" class="md hydrated"
                aria-label="close"></ion-icon>
            </a>
          </div>
          <video id="videoPlayer" style="width:100%;height:100%" ref="videoplay" controlslist="nodownload"
            controls></video>
          <div class="modal-body">


          </div>
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
        infiniteVideotId: +new Date(),
        publications: [],
        its_my_profile: this.user_id == this.usuario.id ? true : false
      };
    },
    methods: {
      infiniteHandlerVideo($state) {
        this.page++;
        axios
          .get(`/get-all-video-profile-looler?page=${this.page}&user_id=${this.user_id}`)
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
      showPost() { },
      ifBuy(post) {
        let buy = post.post_buy

        let post_buy_check = buy.find(data => data.user_id == this.usuario.id);
        if (post_buy_check) {

          return true
        } else {

          return false
        }



      },
      showVideo(vid) {
        $("#modalVideo").modal("show");
        let video = document.getElementById("videoPlayer");
      
        this.$refs.videoplay.src = vid

        this.$refs.videoplay.load()
        video.play()




      
      },
    
    },
  };
</script>

<style>
  .icon-play-video{
    width:32px !important;
  }

</style>