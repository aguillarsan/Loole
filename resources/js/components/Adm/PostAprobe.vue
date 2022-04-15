<template>
    <div class="">
        <div class="appHeader text">

            <div class="pageTitle">Publicaciones</div>
            <div class="right"></div>
        </div>
        <div id="appCapsule" class="extra-header-active">

            <div id="adm_responsive">
                <div class="tab-content mt-1">


                    <!-- pilled tab -->
                    <div class="tab-pane fade show active" id="pilled" role="tabpanel">

                        <div class="section full mt-1">

                            <div class="wide-block pt-2 pb-2">

                                <ul class="nav nav-tabs capsuled" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" @click="getPostRevision(2)" data-bs-toggle="tab"
                                            href="#home" role="tab" aria-selected="true">
                                            Publicaciones pendientes

                                            <h5 style="font-size:18px" class="text-primary">{{post_revision}}</h5>
                                        </a>

                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" @click="getPostRevision(3)" data-bs-toggle="tab" href="#"
                                            role="tab" aria-selected="false">
                                            Publicaciones Rechazadas

                                            <h5 style="font-size:18px" class="text-primary">{{post_rejected}}</h5>
                                        </a>

                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" @click="getPostRevision(1)" data-bs-toggle="tab"
                                            href="#home" role="tab" aria-selected="false">
                                            Publicaciones Aprobadas

                                            <h5 style="font-size:18px" class="text-primary">{{post_aproved}}</h5>
                                        </a>

                                    </li>
                                </ul>
                                <div class="tab-content mt-2">
                                    <div class="tab-pane fade active show" role="tabpanel" v-if="!load">
                                        <div class="section mt-2">
                                            <div class="row">
                                                <div class="col-4" style="margin-top:5px;" v-for="post in posts">
                                                    <div class="card product-card">
                                                        <div class="card-body">
                                                            <div class="contenedor-imagenes"
                                                                style="display:block;height: 200px;" id="content_img">
                                                                <div class="imagen fadeIn">

                                                                    <img :src="post.user.real_profile_img ? post.user.real_profile_img:post.user.profile_image"
                                                                        style="border-radius: 8px;" class="image"
                                                                        alt="product image">


                                                                </div>
                                                            </div>

                                                            <h2 class="title">{{post.user.username}} <img
                                                                    src="/images/sello/sello.svg"
                                                                    style="margin-top: -2px" /></h2>
                                                            <p class="text">{{formato(post.created_at)}}</p>

                                                            <small class="d-block font-eleven" v-if="
                                                            actualy_date.diff(post.created_at, 'days') == 0 &&
                                                            actualy_date.diff(post.created_at, 'minute') >= 60
                                                          ">
                                                                Hace {{ actualy_date.diff(post.created_at, "hours") }}
                                                                hrs
                                                            </small>
                                                            <small class="d-block font-eleven" v-if="
                                                            actualy_date.diff(post.created_at, 'minute') < 60 &&
                                                            actualy_date.diff(post.created_at, 'minute') >= 1
                                                          ">
                                                                Hace {{ actualy_date.diff(post.created_at, "minute") }}
                                                                min
                                                            </small>
                                                            <small class="d-block font-eleven"
                                                                v-if="actualy_date.diff(post.created_at, 'days') >= 1">
                                                                Hace {{ actualy_date.diff(post.created_at, "days") }}
                                                                días
                                                            </small>
                                                            <small class="d-block font-eleven"
                                                                v-if="actualy_date.diff(post.created_at, 'minute') < 1">
                                                                Hace {{ actualy_date.diff(post.created_at, "seconds") }}
                                                                s
                                                            </small>

                                                            <router-link
                                                                :to="{ path:`/PostAprobe/Content/`+post.id, params: {post: post.id}} ">
                                                                <button style="margin-top:10px;"
                                                                    class="btn btn-sm btn-primary btn-block rounded">
                                                                    Ver Publicación</button>
                                                            </router-link>
                                                            <a @click="showModal(post.id)" v-if="modulo == 3 || modulo==1 ">
                                                                <button style="margin-top:10px;"
                                                                    class="btn btn-sm btn-secondary btn-block rounded">
                                                                    Ver Log</button>
                                                            </a>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>



                    </div>





                </div>
            </div>




        </div>
        <div class="modal fade dialogbox" id="DialogBasic" data-bs-backdrop="static" tabindex="-1"
            style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style="max-width: 600px;max-height: 600px !important;">
                    <div class="modal-header">
                        
                    </div>
                    <div class="modal-body">
                        <div class="message-item"v-for="log in logs">
                            <img src="assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="avatar">
                            <div class="content" >
                                <div class="title">{{log.user.name}}</div>
                                <div class="bubble">
                                    {{log.message}}
                                </div>
                                <div class="footer">  {{formato(log.created_at)}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="btn-inline">
                            <a href="#" class="btn btn-text-secondary" data-bs-dismiss="modal">Cerrar</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    export default {
        components: {



        },



        data() {
            return {
                actualy_date: moment(),
                modulo: 2,
                posts: [],
                post_revision: null,
                post_rejected: null,
                post_aproved: null,
                file_view: [],
                load: false,
                logs:[]



            }
        },

        created: function () {

            this.getPostRevision()


        },


        methods: {
            formato: function (d) {
                return moment(d).format("DD/MM/YY");
            },
            getPostRevision: function (state) {
                if (state) {
                    this.modulo = state;
                } else {
                    this.modulo = 2;
                }
                axios.get(`/get-post-revision?modulo=${this.modulo}`).then(response => {
                    this.posts = response.data.posts
                    this.post_revision = response.data.post_revision
                    this.post_rejected = response.data.post_rejected
                    this.post_aproved = response.data.post_aproved
                })
            },

            formatDate: function (d) {
                return moment(d).format("DD/MM/yy");
            },
            showFile: function (post) {
                this.file_view.push(post.id)
                this.$eventBus.$emit('show.gallery', post.post_image);
            },

            sendMail: function (user_id) {

                let formData = new FormData;
                formData.append('user_id', user_id)
                axios.post('/email-aprove-post', formData).then(response => {

                })


            },
            showModal(post){
                axios.get('/log/publicaction/'+post).then(response=>{
                    this.logs = response.data
                    $("#DialogBasic").modal("show")
                })
              
            }
        }
    }
</script>