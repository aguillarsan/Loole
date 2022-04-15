<template>
  <div>


    <div v-if="!profile_exist || my_profile != true">

    </div>
    <div v-if="profile_exist || my_profile">
      <div class="appHeader box-shw-profile-header">
        <div class="left" v-if="!my_profile" id="back_arrow">
          <router-link :to="'home'" class="headerButton goBack">
            <ion-icon name="chevron-back-outline" role="img" class="md hydrated" aria-label="chevron back outline">
            </ion-icon>
          </router-link>
        </div>
        <div class="pageTitle">{{my_profile ? 'Mi Perfil':looler.username}}</div>
        <div class="right" v-if="my_profile">
          <router-link :to="'/Profile/Settings'" class="headerButton">
            <ion-icon name="settings-outline" role="img" class="md hydrated" aria-label="mail outline"></ion-icon>
          </router-link>
        </div>
      </div>
      <div id="appCapsule">
        <div id="profile_content">
          <div class="section mt-2">
            <div class="profile-head">

              <div class="avatar">

                <img v-lazy.container="usuario.profile_image" v-if="my_profile" alt="avatar"
                  class="imaged w64 rounded" />
                <img v-lazy.container="looler.profile_image" v-if="looler.length != 0" alt="avatar"
                  class="imaged w64 rounded" />
              </div>
              <div class="in">
                <h3 class="name text">
                  {{my_profile ? shortName(usuario.name):''}}
                  {{!my_profile ? looler.name:''}}

                  <img v-if="my_profile && usuario.status_id == 3 && usuario.role_id == 2 "
                    src="/images/sello/sello.svg" style="margin-top: -2px" />
                  <img v-if="looler.length != 0 && looler.status_id == 3 " src="/images/sello/sello.svg"
                    style="margin-top: -2px" />
                </h3>

                <h5 class="subtext">
                  {{my_profile ? '@'+shortName(usuario.username):''}}
                  {{looler.length != 0 ? '@'+shortName( looler.username):''}} {{looler.length != 0 &&
                  looler.last_conection_at != null ? '- Última conexión hace ' +
                  last_coneccion(looler.last_conection_at)
                  :''}}

                </h5>

              </div>
            </div>
          </div>

          <div class="section full mt-2" v-if="my_profile && usuario.role_id == 2 || !my_profile && looler.length != 0">
            <div class="profile-stats ps-2 pe-2">
              <a class="item">
                <strong>{{ total.post }}</strong>Publicaciones
              </a>
              <a class="item">
                <strong>{{ total.image }}</strong>Fotos
              </a>
              <a class="item"> <strong>{{ total.videos }}</strong>Videos </a>


            </div>
          </div>

          <div class="section mt-1 mb-2" v-if="usuario.role_id == 2">
            <div class="profile-info">
              <div class="bio" style="word-wrap: break-word;" v-if="my_profile">
                {{usuario.description? usuario.description: "No se ha añadido una descripción "}}

              </div>
              <div class="bio" style="word-wrap: break-word;" v-if="!my_profile">
                {{looler.length != 0 && looler.description? looler.description: "No se ha añadido una descripción "}}

              </div>
              <div class="link">
                <a class="hover_link" @click="copyText" v-if="rute_profile != ''" v-clipboard:copy="rute_profile"
                  v-clipboard:success="onCopy">{{rute_profile}}</a>


              </div>

              <router-link :to="'/EditProfile'" class="mt-2" style="display: flex;
              justify-content: center;" v-if="my_profile">
                <button type="button" class="btn btn-outline-secondary btn-sm rounded shadowed me-1 mb-1">Editar
                  Perfil</button>
              </router-link>

            </div>
          </div>
          <div class="section mt-1 mb-2" v-if="usuario.role_id == 3">
            <div class="profile-info">
              <router-link :to="'/EditProfile'" class="mt-2" style="display: flex;
              justify-content: center;" v-if="my_profile">
                <button type="button" class="btn btn-outline-secondary btn-sm rounded shadowed me-1 mb-1">Editar
                  Perfil</button>
              </router-link>
            </div>
          </div>


          <div class="section full" :style=" usuario.role_id == 3 ? 'margin-top:20px' : ''">
            <div class="wide-block transparent p-0 no-boreder-bottom">
              <ul class="nav nav-tabs lined iconed" v-if="usuario.role_id == 2 && my_profile || !my_profile"
                role="tablist">
                <li class="nav-item hover_link" @click.prevent="setTab(1)">
                  <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="true">
                    <ion-icon name="grid-outline" role="img" class="md hydrated" aria-label="grid outline"></ion-icon>
                  </a>
                </li>
                <li class="nav-item hover_link" @click.prevent="setTab(2)">
                  <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false">
                    <ion-icon name="image-outline" role="img" class="md hydrated" aria-label="people outline">
                    </ion-icon>
                  </a>
                </li>
                <li class="nav-item hover_link" @click.prevent="setTab(3)">
                  <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false">
                    <ion-icon name="videocam-outline" role="img" class="md hydrated" aria-label="bookmark outline">
                    </ion-icon>
                  </a>
                </li>
              </ul>
              <ul class="nav nav-tabs lined iconed" v-if=" my_profile && usuario.role_id == 3" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#feed" role="tab" aria-selected="true" style="
                      color: #00e2e2;
                      border-bottom-color: #00e2e2 !important;
                    ">
                    <ion-icon name="images-outline" role="img" class="md hydrated" aria-label="grid outline"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- tab content -->
          <div class="section full mb-2">
            <div class="tab-content">
              <!-- feed -->
              <div class="tab-pane fade active show" role="tabpanel" id="post">
                <PostProfile :user_id="my_profile ? usuario.id : (looler.length != 0 ? looler.id:'')" :usuario="usuario"
                  v-if="tab  == 1">
                </PostProfile>
                <Images :user_id="my_profile ? usuario.id : (looler.length != 0 ? looler.id:'')" :usuario="usuario"
                  v-if="tab == 2">
                </Images>
                <Videos :user_id="my_profile ? usuario.id : (looler.length != 0 ? looler.id:'')" :usuario="usuario"
                  v-if="tab == 3">
                </Videos>

              </div>

            </div>
          </div>
          <!-- * tab content -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import moment from "moment";
  export default {

    props: ["usuario"],

    components: {
      PostProfile: () => import(/* webpackChunkName: "chunks/Profile/Media/post"*/'./Media/Post'),
      Images: () => import(/* webpackChunkName: "chunks/Profile/Media/images"*/'./Media/Images'),
      Videos: () => import(/* webpackChunkName: "chunks/Profile/Media/videos"*/'./Media/Video'),

    },
    data() {
      return {
        total: [],
        tab: null,
        looler: [],
        my_profile: null,
        profile_exist: null,
        rute_profile: "",
        load: true,
        actualy_date: moment(),

      };
    },
    watch: {
      '$route'(to, from, next) {
        location.reload()
      }
    },
    created: function () {

      if (this.usuario.username == this.$route.params.username) {
        this.my_profile = true
        this.profile_exist = false

        if (this.usuario.role_id == 2) {
          this.tab = 1;
          this.rute_profile = "www.looleapp.com/" + this.usuario.username
          this.getTotal();
        }
      } else {

        this.my_profile = false
        this.userExist()



      }



    },
    methods: {
      userExist() {
        let formData = new FormData
        formData.append('usr_name', this.$route.params.username)
        axios.post('/check/profile/username/exist', formData).then(response => {

          if (response.data.code == 200) {
            this.profile_exist = true

            this.looler = response.data.looler_id
            this.rute_profile = "www.looleapp.com/" + this.looler.username
            this.getTotal();
            this.tab = 1;
          } else {
            this.profile_exist = false;
            return false
          }
        })
      },
      onCopy() {
        let type = "success"
        let message = "Link copiado"
        this.$eventBus.$emit('display-alert-appp', type, message);
      },
      getTotal: function () {
        let user_id = this.my_profile ? this.usuario.id : this.looler.id
        let data = new FormData
        data.append('user_id', user_id)
        axios.post("/profile/get-total-post-img-video-sales", data).then((response) => {
          this.total = response.data;
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
      setTab: function (tab) {
        this.tab = tab;
      },
      copyText() {

      },
      last_coneccion(last_date_connection) {
        if (this.actualy_date.diff(last_date_connection, 'minute') < 60 && this.actualy_date.diff(last_date_connection, 'minute') >= 1) {
          return this.actualy_date.diff(last_date_connection, "minute") + ' min'
        } else {
          if (this.actualy_date.diff(last_date_connection, 'days') == 0 && this.actualy_date.diff(last_date_connection, 'minute') >= 60) {
            return this.actualy_date.diff(last_date_connection, "hours") + ' hrs'

          } else {
            if (this.actualy_date.diff(last_date_connection, 'days') >= 1) {
              this.actualy_date.diff(last_date_connection, "days") + ' días'
            } else {
              if (this.actualy_date.diff(last_date_connection, 'minute') < 1) {
                this.actualy_date.diff(last_date_connection, "seconds") + ' s'
              }
            }
          }
        }

      }
    },
  };
</script>

<style>
</style>