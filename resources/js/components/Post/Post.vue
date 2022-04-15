<template>
  <div>
    <div class="appHeader box-shw-profile-header">
      <div class="left" id="back_arrow">
        <router-link :to="{ path:`/`+username, params: {usermane:username}} " class="headerButton goBack">
          <ion-icon aria-label="chevron back outline" class="md hydrated" name="chevron-back-outline" role="img">
          </ion-icon>
        </router-link>
      </div>
      <div class="pageTitle">
        Publicaciones
      </div>
    </div>
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
                <div class="text-end ms-auto" v-if="usuario.id == post.user_id">
                  <div class="dropstart">
                    <a aria-expanded="false" class="text-secondary" :data-bs-toggle="mobile ? 'offcanvas':'dropdown'"
                      href="javascript:" id="dropdownMarketingCard" :data-bs-target="mobile ? '#actionEdit':''"
                      @click="saveIdPost(post)">
                      <ion-icon name="ellipsis-vertical-outline" style="font-size: 20px;color: grey;">
                      </ion-icon>
                    </a>
                    <ul aria-labelledby="dropdownMarketingCard"
                      class=" dropdown-menu dropdown-menu-lg-start px-2 py-3 box-s-nav ">
                      <li>
                        <a style="margin-left: 5px">
                          <strong>
                            Opciones
                          </strong>
                        </a>
                      </li>
                      <li>
                        <a @click="editPost(post)" class="dropdown-item border-radius-md hover_link">
                          Editar
                        </a>
                        <a @click="deletePost(post.id)" class="dropdown-item border-radius-md hover_link">
                          Eliminar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4 " :id="'description'+post.id">
                {{ post.description ? shortDescription(post.description): '' }}
              </p>
              <textarea class="form-control no-display animated fadeIn" style="margin-bottom: 6px;
              margin-top: -10px; height:100px;" :id="'textEdit'+post.id" v-model="description_post"></textarea>
              <div v-if="my_profile">
                <hooper style="height: 100%">

                  <slide :key="index" v-for="(img, index) in post.post_image">
                    <img alt="Image placeholder" class="img-fluid border-radius-lg shadow" id="img_post"
                      v-if="img.image != null" v-lazy.container="img.image" />
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
                  </slide>
                  <hooper-pagination slot="hooper-addons" v-if="post.post_image.length > 1">
                  </hooper-pagination>
                  <hooper-navigation id="hopper_addons" v-if="post.post_image.length > 1" slot="hooper-addons">
                  </hooper-navigation>


                </hooper>
              </div>
              <div v-if="!my_profile">
                <hooper style="height: 100%">
                  <slide :key="index" v-for="(img, index) in post.post_image">
                    <div v-if="post.locked == 1">
                      <div v-if="userpost(post.post_buy) == true">
                        <img @click="showFile(post.post_image)" alt="Image placeholder"
                          class="img-fluid border-radius-lg shadow" id="img_post" v-if="img.image != null"
                          v-lazy.container="img.image" />
                        <div v-if="img.video">
                          <img alt="Image placeholder" class="img-fluid border-radius-lg shadow" id="img_post"
                            v-if="img.thumbail" v-lazy.container="img.thumbail" />
                          <div v-if="img.thumbail">
                            <button @click="playVideo(img.video)" :id="'btn_video'+img.id" class="video_reproducer">
                              <ion-icon name="play" style="font-size:25px;"></ion-icon>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div v-else="">
                        <img alt="Image placeholder" class="img-fluid border-radius-lg shadow" id="img_post"
                          src="/images/blocked.svg" />
                      </div>
                    </div>
                    <div v-else="">
                      <img @click="showFile(post.post_image)" alt="Image placeholder"
                        class="img-fluid border-radius-lg shadow" id="img_post" v-if="img.image != null"
                        v-lazy.container="img.image" />
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
              <div class="row align-items-center" v-if="post.locked == 1 && !my_profile">
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
              <div class="row align-items-center" :id="'btn_save_changes'+post.id" style="display:none">
                <div class="col-12">

                  <button @click="saveChanges" class="btn btn-primary bg-primary-loole rounded me-1" style="width: 100%"
                    type="button">
                    Guardar cambios
                  </button>

                </div>
              </div>

            </div>

          </div>
        </div>
        <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler" ref="InfiniteLoadingPostView"
          style="margin-top: 50%">
          <div class="text-white" slot="no-more">
            No hay más publicaciones
          </div>
          <div slot="no-results">
            No hay nada publicado aún
          </div>
        </infinite-loading>
      </div>
    </div>
    <div class="offcanvas offcanvas-bottom action-sheet" tabindex="-1" id="actionEdit" style="visibility: hidden;"
      aria-hidden="true">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Publicación</h5>
      </div>
      <div class="offcanvas-body">
        <ul class="action-button-list">
          <li>
            <a href="" @click="editPost" class="btn btn-list" data-bs-dismiss="offcanvas">
              <span>
                <ion-icon name="create-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>
                Editar

              </span>
            </a>
          </li>
          <li>
            <a href="" @click="deletePost" class="btn btn-list" data-bs-dismiss="offcanvas">
              <span>
                <ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>
                Eliminar
              </span>
            </a>
          </li>
          <li class="action-divider"></li>
          <li>
            <a href="#" class="btn btn-list text-danger" data-bs-dismiss="offcanvas">
              <span>
                <ion-icon name="close-outline" role="img" class="md hydrated" aria-label="close outline"></ion-icon>
                Cancelar
              </span>
            </a>
          </li>
        </ul>
      </div>
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
    <div class="modal fade dialogbox" id="modalDeletePost" data-bs-backdrop="static" tabindex="-1"
      style="display: none;" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Eliminar publicación</h5>
          </div>
          <div class="modal-body">
            Una vez realizada la acción, la publicación dejará de ser visible.
          </div>
          <div class="modal-footer">
            <div class="btn-inline">

              <a href="#" class="btn " data-bs-dismiss="modal">

                Cancelar
              </a>
              <a href="#" @click.prevent="hidePost" class="btn btn-text-danger" data-bs-dismiss="modal">
                <ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>
                Eliminar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from "hooper";
  import "hooper/dist/hooper.css";
  import moment from "moment";
  Vue.component("InfiniteLoading", require("vue-infinite-loading"));
  export default {
    props: ['mobile', 'usuario'],
    components: { Hooper, Slide, HooperPagination, HooperNavigation },
    data() {
      return {
        username: this.$route.params.userpost,
        posts: [],
        actualy_date: moment(),
        report_options: [
          { option: "Menores" },
          { option: "Abuso" },
          { option: "Drogas" },
          { option: "Inapropiado" },
          { option: "Otros" },
        ],
        infiniteId: +new Date(),
        page: 1,
        my_profile: this.usuario.username == this.$route.params.userpost ? true : false,
        description_post: "",
        post_edit_id: ""
      }
    },
    created: function () {

    },
    methods: {
      infiniteHandler($state) {
        axios
          .get(`/post/user/view/home?page=${this.page}&username=${this.username}`)
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
      saveIdPost(post) {
        this.post_edit_id = post.id
        this.description_post = post.description
      },
      deletePost: function (post) {
        if (this.post_edit_id != '') {
          $("#modalDeletePost").modal("show");
        } else {
          this.post_edit_id = post;
          $("#modalDeletePost").modal("show");

        }

      },
      hidePost() {
        console.log(this.post_edit_id)
        let formData = new FormData
        formData.append('post_id', this.post_edit_id)
        axios.post('/delete-post', formData).then(response => {
          this.reloadData();
          this.$eventBus.$emit('display-alert-appp', 'success', 'Publicación eliminada');
          $("#modalDeletePost").modal('hide');

        })

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
      formatPrice(value) {
        parseInt(value);
        if (value % 1 == 0) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
          let val = (value / 1).toFixed(2).replace(".", ",");
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
      },
      playVideo(vid) {
        $("#modalVideo").modal("show");
        let video = document.getElementById("videoPlayer");

        this.$refs.videoplay.src = vid

        this.$refs.videoplay.load()
        video.play()
      },
      editPost: function (post) {
        if (this.post_edit_id != '') {
          document.getElementById("description" + this.post_edit_id).style.display = 'none';
          document.getElementById("textEdit" + this.post_edit_id).style.display = 'block';
          document.getElementById("btn_save_changes" + this.post_edit_id).style.display = 'block';
        } else {
          if (post) {
            this.post_edit_id = post.id
            this.description_post = post.description
            document.getElementById("description" + this.post_edit_id).style.display = 'none';
            document.getElementById("textEdit" + this.post_edit_id).style.display = 'block';
            document.getElementById("btn_save_changes" + this.post_edit_id).style.display = 'block';
          }
        }

      },
      saveChanges: function () {
        if (this.description_post != '') {
          let formData = new FormData
          formData.append('post_id', this.post_edit_id)
          formData.append('description', this.description_post)
          axios.post('/edit-desc-post', formData).then(response => {
            document.getElementById("description" + this.post_edit_id).style.display = 'block';
            document.getElementById("textEdit" + this.post_edit_id).style.display = 'none';
            document.getElementById("btn_save_changes" + this.post_edit_id).style.display = 'none';
            this.reloadData();

          })
        } else {
          this.$eventBus.$emit('display-alert-appp', 'error', 'Debes ingresar un descripción');


        }

      },
      reloadData() {

        this.posts = [];
        this.page = 1;
        this.$refs.InfiniteLoadingPostView.$emit('$InfiniteLoading:reset');
      },
    }
  }
</script>