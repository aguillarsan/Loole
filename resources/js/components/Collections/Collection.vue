<template>
  <div>
    <div class="appHeader box-shw-profile-header">
      <div class="left" id="back_arrow">
        <router-link :to="'/home'" class="headerButton goBack">
          <ion-icon name="chevron-back-outline" role="img" class="md hydrated" aria-label="chevron back outline">
          </ion-icon>
        </router-link>
      </div>
      <div class="pageTitle">Mi colección</div>
    </div>

    <div id="appCapsule">
      <div id="content_responseive">
        <div id="main_collection" v-for="buy in buy_post">
          <div class="header-large-title">
            <router-link class="hover_link"
              :to="{ path:`/`+buy.post.user.username, params: {usermane:buy.post.user.username}} ">
              <h3 class="title" style="font-size: 15px;"> {{buy.post.user.username}} <img src="/images/sello/sello.svg"
                  style="margin-top: -2px" /></h3>
            </router-link>
            <h4 class="subtitle" style="font-size: 12px;">{{formatDate(buy.created_at)}}</h4>
          </div>
          <div class="card-body">
            <hooper style="height: 100%">
              <slide :key="index" v-for="(img, index) in buy.post.post_image">


                <img alt="Image placeholder" @click="showFile(buy.post.post_image)"
                  class="img-fluid border-radius-lg shadow" id="img_post" v-if="img.image != null"
                  v-lazy.container="img.image" />
                <img alt="Image placeholder" class="img-fluid border-radius-lg shadow" id="img_post" v-if="img.thumbail"
                  v-lazy.container="img.thumbail" />
                <div v-if="img.thumbail">
                  <button @click="playVideo(img.video)" :id="'btn_video'+img.id" class="video_reproducer">
                    <ion-icon name="play" style="font-size:25px;margin-top:5px;"></ion-icon>
                  </button>
                </div>




              </slide>
              <hooper-pagination slot="hooper-addons">
              </hooper-pagination>
              <hooper-navigation id="hopper_addons" slot="hooper-addons"></hooper-navigation>

            </hooper>
          </div>



        </div>
        <infinite-loading ref="InfiniteLoading" :identifier="infiniteCollectionsId"
          @infinite="infiniteHandlerCollection">
          <div class="text-white" slot="no-more">No hay nada publicado aún</div>
          <div slot="no-results">No hay más publicaciones</div>
        </infinite-loading>
      </div>







    </div>

    <LightGallery></LightGallery>

    <div class="modal fade modalbox" id="modalVideo" data-bs-backdrop="static" tabindex="-1" style="display: none;"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="background: rgb(0,0,0,0.3);">
          <div class="modal-header" style="background: transparent;border-bottom: none">
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
  import LightGallery from '../LightBoxGallery/lightBoxGallery.vue'
  import moment from 'moment';
  import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from "hooper";
  import "hooper/dist/hooper.css";
  Vue.component("InfiniteLoading", require("vue-infinite-loading"));
  export default {
    props: ["usuario"],
    components: { Hooper, Slide, HooperPagination, HooperNavigation, LightGallery },
    data() {
      return {
        buy_post: [],
        page: 0,
        infiniteCollectionsId: +new Date(),
      }
    },

    methods: {

      infiniteHandlerCollection($state) {
        this.page++;
        axios
          .get(`/user/collection/data?page=${this.page}`)
          .then((response) => {
            let data = response.data.data;

            if (data.length) {
              this.buy_post = this.buy_post.concat(data);
              $state.loaded();
            } else {
              $state.complete();
            }
          });
      },

      formatDate(date) {

        return moment(date).format('DD/MM/YYYY');

      },
      showFile: function (post) {
        this.$eventBus.$emit('show-gallery', post)
      },
      playVideo(vid) {

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
</style>