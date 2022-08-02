<template>
  <div>
    <div class="" style="margin-top: 10px;">
      <div class="galeria animated fadeIn" id="galeria_looler">
        <div class="contenedor-imagenes" id="content_img">
          <div :id="'galery' + publi.id" @click="showPost(publi)" class="imagen fadeIn"
            v-for="(publi, key) in publications" :key="key">
            <div v-if="its_my_profile " class="imagen animated fadeIn">
              <div style=" position: relative" v-if="publi.image != null" class="imagen animated fadeIn">
                <div class="video_play_profile hover_link">
                    <img src="/menu_icons/white/mascontenido.svg" class="icon-mas-content" v-if="publi.post_image.length > 1">
                </div>
                <img v-if="publi.image != null" class="animated fadeIn" v-lazy.container="publi.image" />
              </div>
              <div style=" position: relative" v-if="publi.video != null" class="imagen animated fadeIn">
                <div class="video_play_profile hover_link">
                  <ion-icon name="videocam-outline" style="color:white;font-size:32px;"></ion-icon>
                </div>
                <img class="animated fadeIn" v-if="publi.thumbail" v-lazy.container="publi.thumbail" />
              </div>
            </div>
            <div v-else class="imagen animated fadeIn">
              <div class="imagen animated fadeIn" v-if="publi.locked == 1">
                <div class="imagen animated fadeIn" v-if="userpost(publi.post_buy) == true">
                  <div style=" position: relative" v-if="publi.image != null" class="imagen animated fadeIn">
                    <div class="video_play_profile hover_link">
                      <img src="/menu_icons/white/mascontenido.svg" class="icon-mas-content" v-if="publi.post_image.length > 1">
                    </div>
                    <img v-if="publi.image != null" class="animated fadeIn" v-lazy.container="publi.image" />
                  </div>
                  <div style=" position: relative" v-if="publi.video != null" class="imagen animated fadeIn">
                    <div class="video_play_profile hover_link">
                      <ion-icon name="videocam-outline" style="color:white;font-size:32px;"></ion-icon>
                    </div>
                    <img class="animated fadeIn" v-if="publi.thumbail" v-lazy.container="publi.thumbail" />
                  </div>
                </div>
                <div class="imagen animated fadeIn background-blocked" v-else="">
                  <div style=" position: relative" class="imagen animated fadeIn">
                    <div class="video_play_profile hover_link">
                      <img src="/menu_icons/white/mascontenido.svg"  class="icon-mas-content" v-if="publi.post_image.length > 1 && publi.post_image.length > 1">
                      <ion-icon v-if="publi.thumbail" name="videocam-outline" style="color:white;font-size:32px;">
                      </ion-icon>
                    </div>
                    <div class="center">
                      <img src="/images/blocked.svg" class="img-blocked" />
                    </div>
                   
                  </div>
                </div>
              </div>
              <div class="imagen animated fadeIn" v-else="">
                <div style=" position: relative" v-if="publi.image != null" class="imagen animated fadeIn">
                  <div class="video_play_profile hover_link">
                    <img src="/menu_icons/white/mascontenido.svg" class="icon-mas-content" v-if="publi.post_image.length > 1">
                  </div>
                  <img v-if="publi.image != null" class="animated fadeIn" v-lazy.container="publi.image" />
                </div>
                <div style=" position: relative" v-if="publi.video != null" class="imagen animated fadeIn">
                  <div class="video_play_profile hover_link">
                    <ion-icon name="videocam-outline" style="color:white;font-size:32px;"></ion-icon>
                  </div>
                  <img class="animated fadeIn" v-if="publi.thumbail" v-lazy.container="publi.thumbail" />

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <infinite-loading ref="InfiniteLoading" :identifier="infinitePostId" @infinite="infiniteHandler">
        <div class="text-white" slot="no-more">No hay nada publicado aún</div>
        <div slot="no-results">No hay más publicaciones</div>
      </infinite-loading>
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
        infinitePostId: +new Date(),
        publications: [],
        usr: this.user_id,
        its_my_profile: this.user_id == this.usuario.id ? true : false

      };
    },

    methods: {
      infiniteHandler($state) {
        this.page++;
        axios
          .get(`/get-all-post-profile-looler?page=${this.page}&user_id=${this.usr}`)
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
      showPost(publi) {
        if (this.user_id == this.usuario.id) {
          this.$router.push('/Posts/' + this.usuario.username)

        } else {
          this.$router.push('/Posts/' + publi.user.username)


        }
      },
      userpost(post_buy) {
        let post_buy_check = post_buy.find(data => data.user_id == this.usuario.id);

        if (post_buy_check) {

          return true
        } else {

          return false
        }



      },
    },
  };
</script>

<style>
  .icon-mas-content{
    width:32px !important;
  }
</style>