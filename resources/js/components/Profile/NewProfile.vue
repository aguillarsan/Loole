<template>
    <div id="main-profile">
        <div v-if="!profile_exist || my_profile != true">

        </div>
        <div id="dark_screen_header">

        </div>
        <div v-if="profile_exist || my_profile">
            <div class="appHeader" style="background:transparent; box-shadow:none !important;">
                <div class="left" id="back_arrow">
                    <router-link :to="'home'" class="headerButton goBack">
                        <ion-icon name="chevron-back-outline" role="img" class="md hydrated text-white"
                            aria-label="chevron back outline">
                        </ion-icon>
                    </router-link>
                </div>
                <div class="right" v-if="my_profile">
                    <router-link :to="'/Profile/Settings'" class="headerButton">
                        <ion-icon name="settings-outline" role="img" class="md hydrated  text-white"
                            aria-label="mail outline"></ion-icon>
                    </router-link>
                </div>
            </div>
            <div id="img-profile" style="background-image: url('/images/mina2.png');" class="img_full_screen_profile">

            </div>
            <div id="profile-detail" v-if="my_profile && usuario.role_id == 2 || !my_profile && looler.length != 0">
                <div id="data-profile">
                    <div class="data-content">
                        <span class="txt-detail-profile">{{ total.post }}</span>
                        <span class="txt-loole-grey txt-f-14">publicaciones</span>
                    </div>
                    <div class="data-content">
                        <span class="txt-detail-profile">{{ total.image }}</span>
                        <span class="txt-loole-grey txt-f-14">Fotos</span>
                    </div>
                    <div class="data-content">
                        <span class="txt-detail-profile">{{ total.videos }}</span>
                        <span class="txt-loole-grey txt-f-14">Videos</span>
                    </div>
                </div>
                <div id="personal-data-user" v-if="usuario.role_id == 2">
                    <div class="info-user-profile">
                        <span class="txt-username-profile">{{my_profile ? shortName(usuario.username):(!my_profile ?
                            looler.username:'')}}
                        </span>
                        <img v-if="my_profile && usuario.status_id == 3 && usuario.role_id == 2 "
                            src="/images/sello/sello.svg" class="sello-xl" />
                        <img v-if="looler.length != 0 && looler.status_id == 3 " src="/images/sello/sello.svg"
                            class="sello-xl" />

                    </div>
                    <div class="link" style="margin-bottom:8px">
                        <a class="hover_link txt-f-14" v-if="rute_profile != ''" v-clipboard:copy="rute_profile"
                            v-clipboard:success="onCopy">{{rute_profile}}</a>
                    </div>
                    <p class="txt-f-14 txt-loole-grey" v-if="my_profile">
                        {{usuario.description? usuario.description: description_empy}}
                    </p>
                    <p class="txt-f-14 txt-loole-grey" v-if="!my_profile">
                        {{looler.length != 0 && looler.description? looler.description: description_empy}}
                    </p>
                    <router-link :to="'/EditProfile'" v-if="my_profile" class="mt-2" style="display: flex;
              justify-content: center;">
                        <button type="button" class="btn btn-outline-secondary btn-sm rounded btn-grey me-1 mb-1">Editar
                            Perfil</button>
                    </router-link> 

                </div>
                <div id="container-post">
                    <div class="tab-pane fade active show" id="lined" role="tabpanel">
                        <div class="section full ">
                            <div class="wide-block pb-2 no-pd-l-r">
                                <ul class="nav nav-tabs lined" role="tablist">
                                    <li class="nav-item" @click.prevent="setTab(t.id)" v-for="t in tabs">
                                        <a class="nav-link" :class="tab == t.id ? 'active':''" data-bs-toggle="tab"
                                            :href="t.name_href" role="tab" aria-selected="true">
                                            <ion-icon :name="t.icon" role="img" class="md hydrated"
                                                :aria-label="t.label"></ion-icon>
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content mt-2">
                                    <div class="tab-pane fade active show" id="home11" role="tabpanel">
                                        <keep-alive>
                                            <PostProfile
                                                :user_id="my_profile ? usuario.id : (looler.length != 0 ? looler.id:'')"
                                                :usuario="usuario" v-if="tab  == 1">
                                            </PostProfile>
                                        </keep-alive>
                                        <keep-alive>
                                            <Images
                                                :user_id="my_profile ? usuario.id : (looler.length != 0 ? looler.id:'')"
                                                :usuario="usuario" v-if="tab == 2">
                                            </Images>
                                        </keep-alive>
                                        <keep-alive>
                                            <Videos
                                                :user_id="my_profile ? usuario.id : (looler.length != 0 ? looler.id:'')"
                                                :usuario="usuario" v-if="tab == 3">
                                            </Videos>
                                        </keep-alive>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                tab: 1,
                looler: [],
                my_profile: null,
                profile_exist: null,
                rute_profile: "",
                load: true,
                actualy_date: moment(),
                description_empy: 'No se ha añadido descripción',
                tabs: [
                    { id: 1, icon: 'grid-outline', label: 'grid-outline', name_href: '#home11' },
                    { id: 2, icon: 'image-outline', label: 'people outline', name_href: '#profile12' },
                    { id: 3, icon: 'videocam-outline', label: 'bookmark outline', name_href: '#contact13' }
                ]
            }
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
                    this.rute_profile = "looleapp.com/" + this.usuario.username
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
                if (name.length > 20) {
                    let first_letters = name.substr(0, 20) + "...";
                    return first_letters;
                } else {
                    if (name.length < 20) {
                        return name;
                    }
                }
            },
            setTab: function (tab) {
                this.tab = tab;
            },
            last_coneccion(last_date_connection) {
                if (this.actualy_date.diff(last_date_connection, 'minute') < 60 && this.actualy_date.diff(last_date_connection, 'minute') >= 1) {
                    return this.actualy_date.diff(last_date_connection, "minute") + ' min'
                } else {
                    if (this.actualy_date.diff(last_date_connection, 'days') == 0 && this.actualy_date.diff(last_date_connection, 'minute') >= 60) {
                        return this.actualy_date.diff(last_date_connection, "hours") + ' hrs'

                    } else {
                        if (this.actualy_date.diff(last_date_connection, 'days') >= 1) {
                            return this.actualy_date.diff(last_date_connection, "days") + ' días'
                        } else {
                            if (this.actualy_date.diff(last_date_connection, 'minute') < 1) {
                                return this.actualy_date.diff(last_date_connection, "seconds") + ' s'
                            }
                        }
                    }
                }
            }
        },
    }
</script>
<style>
    .img_full_screen_profile {
        width: 100%;
        height: 70vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .data-content {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: flex-start;
    }

    #data-profile {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
    }

    #profile-detail {
        width: 100%;
        background-color: white;
        border-radius: 24px 24px 0px 0px;
        position: relative;
        margin-top: -32px;
        padding-top: 24px;
        padding-bottom: 70px;
    }

    .txt-detail-profile {
        font-size: 14px;
        font-weight: 600;
        color: #1B1B1B;
    }

    .txt-loole-grey {
        color: #707070;
    }

    .txt-f-14 {
        font-size: 14px;
    }

    .txt-username-profile {
        font-size: 24px;
        font-weight: 600;
        color: #1B1B1B;
        margin-right: 8px;
    }

    .info-user-profile {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 2px;
    }

    #personal-data-user {
        padding: 24px;
    }

    .sello-xl {
        width: 20px;
        height: 20px;
    }

    .background-block {
        background: linear-gradient(180deg, #080425 0%, #050424 100%);
    }

    #dark_screen_header {
        background: linear-gradient(180deg, rgba(8, 4, 37, 0) 0%, rgba(5, 4, 36, 0.68) 150.94%);
        transform: rotate(-180deg);
        position: absolute;
        top: 0;
        width: 100%;
        height: 13vh;
    }

    .no-pd-l-r {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }

    .btn-grey {
        border-color: #707070;
        color: #707070;
    }
</style>