<template>
    <div>
        <div class="appHeader show" id="search">
            <form class="search-form">
                <div class="form-group searchbox">
                    <input class="form-control" @keyup="changeFilter" v-model="username" placeholder="Buscar"
                        id="back_arrow" type="text" />
                    <i class="input-icon hover_link" id="back_arrow">
                        <ion-icon aria-label="search outline " class="md hydrated" name="search-outline" role="img">
                        </ion-icon>
                    </i>
                    <router-link :to="'/home'" class="ms-1 close toggle-searchbox hover_link">

                        <ion-icon aria-label="close circle" class="md hydrated" name="close-circle" role="img">
                        </ion-icon>

                    </router-link>
                </div>

            </form>

        </div>
        <div id="appCapsule">
            <div id="content_responseive">
                <div class="section mt-2">
                    <div class="row">
                        <div class="col-6" style="margin-top:5px;" v-for="looler in Loolers">
                            <div class="card product-card">
                                <div class="card-body">
                                    <div class="contenedor-imagenes" style="display:block;height: 200px;"
                                        id="content_img">
                                        <div class="imagen fadeIn" @click="showImg(looler.real_profile_img)">

                                            <img :src="looler.real_profile_img ? looler.real_profile_img:looler.profile_image"
                                                style="border-radius: 8px;" class="image" alt="product image">


                                        </div>
                                    </div>

                                    <h2 class="title">{{looler.username}} <img src="/images/sello/sello.svg"
                                            style="margin-top: -2px" /></h2>
                                    <!-- <p class="text">{{looler.description}}</p> -->

                                    <router-link :to="{ path:`/`+looler.username, params: {usermane: looler.username}} "
                                        class=" font_sixteen" style="font-weight: 700; margin-top: 10px;">

                                        <button style="margin-top:10px;"
                                            class="btn btn-sm btn-primary btn-block rounded">
                                            Ver perfil</button>
                                    </router-link>
                                </div>

                            </div>


                        </div>
                        <infinite-loading :identifier="infiniteIdLoolersId" @infinite="infiniteHandlerSearch"
                            ref="infiniteLoading" style="margin-top: 50%">
                            <div class="text-white" slot="no-more">
                                No hay más resultados
                            </div>
                            <div slot="no-results">
                                No hay más resultados
                            </div>
                        </infinite-loading>
                    </div>

                </div>


            </div>
        </div>
        <a href="#" class="item" style="visibility:hidden;" id="btn_open" data-bs-toggle="modal"
            data-component="stories" data-bs-target="#StoryDefault">
            <div class="in">
                <div>Default</div>
            </div>
        </a>
        <div class="modal fade stories" id="StoryDefault" data-bs-backdrop="static" tabindex="-1" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <!-- <div class="story-bar"></div> -->
                    <div class="story-image">
                        <img :src="file" alt="image">
                    </div>
                    <div class="modal-header">
                        <a href="#" class="profile-detail">

                        </a>
                        <a href="#" data-bs-dismiss="modal" class="close-stories">
                            <ion-icon name="close" role="img" class="md hydrated" aria-label="close"></ion-icon>
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
    import moment from 'moment';
    export default {
        data() {
            return {
                Loolers: [],
                infiniteIdLoolersId: +new Date(),
                page: 0,
                username: "",
                usernameFilter: "",
                file: ""

            }
        },
        created: function () {

        },
        methods: {
            infiniteHandlerSearch($state) {


                this.page++;

                axios.get(`/search/looler/get?page=${this.page}&username=${this.username}`).then(response => {
                    let data = response.data.data

                    if (data.length) {

                        this.Loolers = this.Loolers.concat(data);
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                })
            },

            changeFilter() {
                this.Loolers = [];
                if (this.username.length >= 3) {

                    axios.get(`/search/looler/get?&username=${this.username}`).then(response => {
                        this.Loolers = response.data.data


                    })



                } else {
                    if (this.username.length == 0) {
                        this.page = 0;
                        this.Loolers = [];
                        this.infiniteIdLoolersId = +new Date();




                    }
                }

            },
            showImg(content) {


                this.file = content;
                let btn = document.getElementById("btn_open");
                btn.click()



            },
        }

    }
</script>