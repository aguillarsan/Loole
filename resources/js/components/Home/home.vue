<template>
  <div>
    <div id="appCapsule">
      <div id="post_home">
        <div :key="indexM" class="section  " id="card_post" v-for="(post, indexM) in posts">
          <div class="card no-box-shadow">
            <div class="card-header no-boreder-bottom">
              <div class="d-flex align-items-center">
                <router-link :to="{ path:`/`+post.user.username, params: {usermane: post.user.username}} "
                  class=" font_sixteen" style="font-weight: 700">
                  <div class="image-wrapper">
                    <img :src="post.user.profile_image" alt="image" class="imaged rounded avatar_post" />
                  </div>
                </router-link>
                <div class="mx-3">

                  <div>
                    <router-link :to="{ path:`/`+post.user.username, params: {usermane: post.user.username}} "
                      class=" font_sixteen" style="font-weight: 700">

                      {{
                      post.user.username
                      ? shortName(post.user.username)
                      : post.user.name
                      }}
                      <img src="/images/sello/sello.svg" style="margin-top: -2px" />

                    </router-link>
                  </div>
                  <small class="d-block font-eleven" v-if="
                    actualy_date.diff(post.created_at, 'days') == 0 &&
                    actualy_date.diff(post.created_at, 'minute') >= 60
                  ">
                    Hace {{ actualy_date.diff(post.created_at, "hours") }} hrs
                  </small>
                  <small class="d-block font-eleven" v-if="
                    actualy_date.diff(post.created_at, 'minute') < 60 &&
                    actualy_date.diff(post.created_at, 'minute') >= 1
                  ">
                    Hace {{ actualy_date.diff(post.created_at, "minute") }} min
                  </small>
                  <small class="d-block font-eleven" v-if="actualy_date.diff(post.created_at, 'days') >= 1">
                    Hace {{ actualy_date.diff(post.created_at, "days") }} días
                  </small>
                  <small class="d-block font-eleven" v-if="actualy_date.diff(post.created_at, 'minute') < 1">
                    Hace {{ actualy_date.diff(post.created_at, "seconds") }} s
                  </small>
                </div>
                <div class="text-end ms-auto" v-if="usuario.id != post.user_id">
                  <div class="dropstart">
                    <a aria-expanded="false" class="text-secondary" :data-bs-toggle="mobile ? 'offcanvas':'dropdown'"
                      href="javascript:" id="dropdownMarketingCard" :data-bs-target="mobile ? '#actionSheetDefault':''"
                      @click="saveIdPost(post.id)">
                      <ion-icon name="ellipsis-vertical-outline" style="font-size: 20px;color: grey;">
                      </ion-icon>
                    </a>
                    <ul aria-labelledby="dropdownMarketingCard"
                      class=" dropdown-menu dropdown-menu-lg-start px-2 py-3 box-s-nav ">
                      <li>
                        <a style="margin-left: 5px">
                          <strong>
                            Reportar
                          </strong>
                        </a>
                      </li>
                      <li :key="key" v-for="(options, key) in report_options">
                        <a @click="reportPost(post, options.option)" class="dropdown-item border-radius-md">
                          {{ options.option }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-body">
              <p class="mb-4 " v-if="post.description ">
                {{ post.description ? shortDescription(post.description): '' }}
              </p>
              <div>
                <hooper style="height: 100%">
                  <slide :key="index" v-for="(img, index) in post.post_image">
                    <div v-if="post.locked == 1 && post.user_id != usuario.id">
                      <div v-if="userpost(post.post_buy) == true">
                        <img @click="showFile(post.post_image)" alt="Image placeholder"
                          class="img-fluid border-radius-lg shadow" id="img_post" v-if="img.image != null"
                          v-lazy.container="img.image" />
                        <img alt="Image placeholder" class="img-fluid border-radius-lg shadow" id="img_post"
                          v-if="img.thumbail" v-lazy.container="img.thumbail" />
                        <div class="video_play_profile hover_link">
                          <button type="button" class="btn btn-secondary bg-secondary-loole   hover_link "
                            @click="playVideo(img.video)" :id="'btn_video'+img.id" style=" margin-top: 8%;">
                            <ion-icon name="play" style="font-size:25px;margin-left:10px;   "></ion-icon>
                          </button>
                        </div>
                      </div>
                      <div v-else="">
                        <img alt="Image placeholder" class="img-fluid border-radius-lg shadow" id="img_post"
                          src="/images/blocked.svg" />
                      </div>
                    </div>
                    <div v-else="">
                      <div v-if="img.image != null">
                        <img @click="showFile(post.post_image)" alt="Image placeholder"
                          class="img-fluid border-radius-lg shadow" id="img_post" v-if="img.image != null"
                          v-lazy.container="img.image" />
                      </div>

                      <div v-if="img.video">

                        <img alt="Image placeholder" class="img-fluid border-radius-lg shadow" id="img_post"
                          v-if="img.thumbail" v-lazy.container="img.thumbail" />
                        <div class="video_play_profile hover_link">
                          <button type="button" class="btn btn-secondary bg-secondary-loole   hover_link "
                            @click="playVideo(img.video)" :id="'btn_video'+img.id" style=" margin-top: 8%;">
                            <ion-icon name="play" style="font-size:25px;margin-left:10px;   "></ion-icon>
                          </button>

                        </div>




                      </div>
                    </div>
                  </slide>
                  <hooper-pagination slot="hooper-addons" v-if="post.post_image.length > 1">
                  </hooper-pagination>
                  <hooper-navigation id="hopper_addons" v-if="post.post_image.length > 1" slot="hooper-addons">
                  </hooper-navigation>
                </hooper>
              </div>

              <!--EndImages -->
              <!--Footer Post -->
              <div style="
                width: 100%;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: space-between;
                padding: 16px 0;
              ">
                <div style="
                  display: flex;
                  flex-flow: row wrap;
                  align-items: center;
                  justify-content: flex-start;
                ">
                  <a>
                    <div class="d-flex align-items-center">
                      <ion-icon class="md hydrated" name="videocam-outline" role="img" style="font-size: 22px">
                      </ion-icon>
                      <span class="text-sm me-3 " style="margin-left: 5px">
                        {{ totalvideo(post.post_image) }}
                      </span>
                    </div>
                  </a>
                  <a>
                    <div class="d-flex align-items-center">
                      <ion-icon class="md hydrated" name="image-outline" role="img" style="font-size: 22px">
                      </ion-icon>
                      <span class="text-sm me-3 " style="margin-left: 6px">
                        {{ totalimagenes(post.post_image) }}
                      </span>
                    </div>
                  </a>
                </div>
                <a v-if="post.locked == 1">
                  <div class="d-flex align-items-center justify-content-sm-end">
                    <ion-icon class="md hydrated" name="cash-outline" role="img" style="font-size: 22px">
                    </ion-icon>
                    <span class="text-sm " style="margin-left: 6px">
                      {{ post.post_buy.length }}
                    </span>
                  </div>
                </a>
              </div>
              <div class="row align-items-center" v-if="post.locked == 1 && post.user_id != usuario.id">
                <div v-if="userpost(post.post_buy) == true">
                </div>
                <div v-else="">
                  <div class="col-12">
                    <a :href="`/purchase/detail?item=${post.post_key}`">
                      <button class="btn btn-primary bg-primary-loole rounded me-1" style="width: 100%" type="button">
                        Desbloquear publicación por CLP ${{
                        formatPrice(post.price)
                        }}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <hr class="horizontal dark my-3" />
            </div>
          </div>
        </div>
        <a href="#topCard" @click="updatePost" id="go_top"
          :class="posts.length > 15 ? 'button bg-white goTop show':'button bg-white goTop '"
          class="button bg-white goTop ">
          <ion-icon name="arrow-up-outline" role="img" class="md hydrated" aria-label="arrow up outline"></ion-icon>
        </a>
      </div>
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler" ref="InfiniteLoadingHome"
        style="margin-top: 50%">
        <div class="text-white" slot="no-more">
          No hay más publicaciones
        </div>
        <div slot="no-results">
          No hay nada publicado aún
        </div>
      </infinite-loading>
    </div>


    <div class="offcanvas offcanvas-bottom action-sheet" tabindex="-1" id="actionSheetDefault"
      style="visibility: hidden;" aria-hidden="true">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Reportar publicación</h5>
      </div>
      <div class="offcanvas-body">
        <ul class="action-button-list">
          <li :key="key" v-for="(options, key) in report_options">
            <a href="" class="btn btn-list text" @click="reportPost(options.option)" data-bs-dismiss="offcanvas">
              <span>{{options.option}}</span>
            </a>
          </li>
          <li class="action-divider"></li>
          <li>
            <a href="#" class="btn btn-list text-danger" data-bs-dismiss="offcanvas">
              <span>Cancelar</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

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


    <LightGallery></LightGallery>



  </div>
</template>
<script>

  import LightGallery from '../LightBoxGallery/lightBoxGallery.vue'


  Vue.component("InfiniteLoading", require("vue-infinite-loading"));
  import moment from "moment";
  import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from "hooper";
  import "hooper/dist/hooper.css";
  export default {
    props: ["usuario", "notification", "mobile"],
    components: { Hooper, Slide, HooperPagination, HooperNavigation, LightGallery },
    data() {
      return {
        notification_home: this.notification,
        posts: [],
        files: [],
        infiniteId: +new Date(),
        page: 1,
        actualy_date: moment(),
        report_options: [
          { option: "Menores" },
          { option: "Abuso" },
          { option: "Drogas" },
          { option: "Inapropiado" },
          { option: "Otros" },
        ],
        id_post_report: "",
        post_select: []

      };
    },
    created: function () {
      let self = this;
      this.$eventBus.$on("refresh-home", function () {
        self.refreshInfiniteLoading();
      });
      this.$eventBus.$on("update-notification-home", function () {
        self.notificationActive();
      });

    },
    methods: {
      infiniteHandler($state) {
        axios
          .get(`/home/post/get-all-post?page=${this.page}`)
          .then((response) => {
            let data = response.data.data;

            if (data.length) {
              this.page += 1;
              this.posts = this.posts.concat(data);
              $state.loaded();
            } else {
              $state.complete();
            }
          });
      },
      saveIdPost(post) {
        if (this.mobile) {
          this.id_post_report = post
        }
      },

      notificationActive(data) {

        if (this.usuario.role_id == 2) {
          axios.get('/notification/status/user').then(response => {

            this.notification_home = response.data

          })
        }


      },
      validateProfile() {
        this.$eventBus.$emit('notification-account-inactive');

      },
      playVideo(vid) {

        $("#modalVideo").modal("show");
        let video = document.getElementById("videoPlayer");

        this.$refs.videoplay.src = vid

        this.$refs.videoplay.load()
        video.play()





      },
      displayBtn(index) {
        if (btn.style.display != "block") {
          let btn = document.getElementById("btn_video" + index);
          btn.style.display = "block"
        }

      },



      updatePost() {

        this.posts = [];
        this.page = 0;
        this.$refs.InfiniteLoadingHome.$emit('$InfiniteLoading:reset');
      },

      showFile: function (post) {
        this.$eventBus.$emit('show-gallery', post)



      },
      formatPrice(value) {
        parseInt(value);
        if (value % 1 == 0) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
          let val = (value / 1).toFixed(2).replace(".", ",");
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
      },
      shortName(name) {
        if (name.length > 15) {
          let first_letters = name.substr(0, 15) + "...";
          return first_letters;
        } else {
          if (name.length < 15) {
            return name;
          }
        }
      },
      getname(name) {
        return name;
      },
      searchDisplay() {
        this.$eventBus.$emit('search-bar');
      },

      shortDescription(description) {
        if (description.length >= 160) {
          let first_letters = description.substr(0, 160) + "...";
          return first_letters;
        } else {
          if (description.length <= 160) {
            return description;
          }
        }
      },
      getIndex(index, id) {
        console.log(index, id);
        return index;
      },
      userpost(post_buy) {
        let post_buy_check = post_buy.find(
          (data) => data.user_id == this.usuario.id
        );

        if (post_buy_check) {
          return true;
        } else {
          return false;
        }
      },
      totalvideo(video) {
        let total = 0;
        for (var i = 0; i < video.length; i++) {
          let data = video[i];

          if (data.video != null) {
            total++;
          }
        }
        return total;
      },
      totalimagenes(imagen) {
        let total_img = 0;
        for (var i = 0; i < imagen.length; i++) {
          let data = imagen[i];

          if (data.image != null) {
            total_img++;
          }
        }
        return total_img;
      },
      totalBuy(post) {
        let total_post = 0;
        for (var i = 0; i < post.length; i++) {
          let data = post[i];

          if (data.image != null) {
            total_post++;
          }
        }
        return total_post;
      },
      reportPost: function (post, motivo) {
        let formData = new FormData
        formData.append('post_id', this.id_post_report != "" ? this.id_post_report : post.id);
        formData.append('motivo', motivo);
        axios.post('/report-post', formData).then(response => {
          Vue.$toast.open({
            message: response.data.message,
            type: response.data.type,
            position: 'top',
            duration: 2000

          });
          if (response.data.type == 'success') {
            this.sedMailNotificaionReport(response.data.report);

          }

        })
      },

      sedMailNotificaionReport: function (data) {
        let formData = new FormData
        formData.append('post_id', data.post_id);
        formData.append('user_id', data.user_id);
        formData.append('reason', data.reason);
        axios.post('/email-notification-report', formData).then(response => {

        })
      },
      refreshInfiniteLoading() {
        this.posts = [];

        this.page = 0;
        this.$refs.InfiniteLoading.$emit("$InfiniteLoadingHome:reset");
      },
    },
  };
</script>