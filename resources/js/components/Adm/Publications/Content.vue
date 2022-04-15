<template>
    <div>
        <div class="appHeader text">
            <div id="back_arrow" class="left">
                <router-link :to="'/PostAprobe'" class="headerButton goBack">
                    <ion-icon aria-label="chevron back outline" name="chevron-back-outline" role="img"
                        class="md hydrated"></ion-icon>
                </router-link>
            </div>
            <div class="pageTitle">Contenido publicación</div>
            <div class="right" v-if="state_id == 2">
                <button class="btn btn-secondary rounded" @click="aprobePost">
                  
                    Aprobar
                </button>
                <button class="btn btn-danger rounded" @click="openModal">
                 
                    Rechazar
                </button>
            </div>
        </div>

        <div id="appCapsule">
            <div id="adm_responsive">
                <div class="section mt-2" v-if="!load">
                    <div class="row">
                        <div class="col-6" style="margin-top:15px;" v-for="content in contents">

                            <div @click="showImg(content.image ? content.image:content.id)" class="hover_link">

                                <img v-if="content.image" :src="content.image" alt="image" class="imaged img-fluid">
                                <div>
                                    <video v-if="content.video" :id="'video'+content.id"
                                        class="imaged img-fluid border-radius-lg  shadow video_min" controls>
                                        <source :src="content.video" type="video/mp4">
                                        </source>
                                    </video>
                                    <div v-if="content.video">
                                        <button class="btn btn-secondary rounded"
                                          >&#9658</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div style="text-align: center;" v-if="load">
                    <div class="spinner-border text-primary"
                        style="height:100px;width:100px;margin-top: 50px;text-align: center !important;"
                        role="status">
                    </div>
                </div>
            </div>
        </div>
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
        <a href="#" class="item" style="visibility:hidden;" id="btn_open" data-bs-toggle="modal"
            data-component="stories" data-bs-target="#StoryDefault">
            <div class="in">
                <div>Default</div>
            </div>
        </a>
        <div class="modal fade dialogbox" id="DialogForm" data-bs-backdrop="static" tabindex="-1" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Rechzar Publicación</h5>
                    </div>
                    <form>
                        <div class="modal-body text-start mb-2">
                            <div class="form-group ">
                                <div class="input-wrapper">
                                    <label class="form-label" for="email1">Motivo</label>
                                    <textarea id="address5" rows="6" class="form-control" v-model="motivo"></textarea>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <div class="btn-inline">
                                <button type="button" class="btn btn-text-secondary"
                                    data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" @click="cancelPost" class="btn btn-text-primary">Aceptar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                contents: [],
                file: "",
                user_post: "",
                load: false,
                state_id: "",
                motivo: ""
            }
        },
        created: function () {
            this.getContent()
        },
        methods: {
            getContent() {
                let formData = new FormData();
                formData.append('post_id', this.$route.params.post);
                axios.get(`/publication/content/detail?post_id= ${this.$route.params.post}`).then(response => {
                    this.contents = response.data.contents
                    this.user_post = response.data.user_id
                    this.state_id = response.data.status
                })
            },
            showImg(content) {
                let video = document.getElementById('video' + content);
                if (video) {
                    video.play()
                    video.requestFullscreen();

                } else {
                    this.file = content;
                    let btn = document.getElementById("btn_open");
                    btn.click()
                }


            },
            aprobePost: function () {
                this.load = true
                let formData = new FormData;
                formData.append('post_id', this.$route.params.post)
                axios.post('/aprove-post', formData).then(response => {
                    this.sendMail()
                    let type = "success"
                    let message = "Publicación aprobada"
                    this.$eventBus.$emit('display-alert-app-adm', type, message)
                })

            },
            sendMail: function () {

                let formData = new FormData;
                formData.append('user_id', this.user_post)
                axios.post('/email-aprove-post', formData).then(response => {
                    console.log(response.data)
                    this.load = false
                })


            },
            openModal() {
                $("#DialogForm").modal("show");
            },
            cancelPost() {

                if (this.motivo.length > 0) {
                    $("#DialogForm").modal("hide");
                    this.load = true
                    let formData = new FormData;
                    formData.append('motivo', this.motivo)
                    formData.append('user_id', this.user_post)
                    formData.append('post_id', this.$route.params.post)
                    axios.post('/publication/denny', formData).then(response => {
                        let type = "success"
                        let message = "Publicación rechazada"
                        this.$eventBus.$emit('display-alert-app-adm', type, message)
                        this.load = false
                        setTimeout(() => {
                            this.back();

                        }, 500);

                    })
                } else {
                    console.log("error")
                }

            },
            back() {
                window.location.replace('/PostAprobe')
            }
        },
    }
</script>