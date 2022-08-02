<template>
    <div id="appCapsule" >
        <div :key="indexM" class="section" id="card_post" v-for="(post, indexM) in posts">
            <hooper style="height: 100vh" >
                <hooper-pagination slot="hooper-addons" v-if="post.post_image.length > 1">
                </hooper-pagination>
                <hooper-navigation id="hopper_addons" v-if="post.post_image.length > 1" slot="hooper-addons">
                </hooper-navigation>
                <slide  v-for="(img, index) in post.post_image" :key="index" :index="index">
                    <div v-if="post.locked == 1 && post.user_id != usuario.id">
                        <div v-if="userpost(post.post_buy) == true">
                            <img @click="showFile(post.post_image)" alt="Image placeholder"
                                class="img-fluid img-full-height " id="img_post" v-if="img.image != null"
                                v-lazy.container="img.image" />
                            <img alt="Image placeholder" class="img-fluid img-full-height " id="img_post"
                                v-if="img.thumbail" v-lazy.container="img.thumbail" />
                            <div class="video_play_profile hover_link">
                                <button type="button" class="btn btn-secondary bg-secondary-loole   hover_link "
                                    @click="playVideo(img.video)" :id="'btn_video'+img.id" style=" margin-top: 8%;">
                                    <ion-icon name="play" style="font-size:25px;margin-left:10px;   "></ion-icon>
                                </button>
                            </div>
                        </div>
                        <div v-else="">
                            <img alt="Image placeholder" class="img-fluid img-full-height" id="img_post"
                                src="/images/blocked.svg" />
                        </div>
                    </div>
                    <div v-else="">
                        <div v-if="img.image != null">
                            <img @click="showFile(post.post_image)" alt="Image placeholder"
                                class="img-fluid img-full-height " id="img_post" v-if="img.image != null"
                                v-lazy.container="img.image" />
                        </div>
                        <div v-if="img.video">
                            <img alt="Image placeholder" class="img-fluid img-full-height " id="img_post"
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
             
            </hooper>
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
</template>
<script>
    import LightGallery from '../LightBoxGallery/lightBoxGallery.vue'
    Vue.component("InfiniteLoading", require("vue-infinite-loading"));
    import moment from "moment";
    import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from "hooper";
    import "hooper/dist/hooper.css";
    export default {
        components: { Hooper, Slide, HooperPagination, HooperNavigation, LightGallery },
        data() {
            return {
                posts: [],
                infiniteId: +new Date(),
                page: 1,
            }
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
        }
    }
</script>
<style>
    .img-full-height {
        height: 100vh !important;
    }

    .hooper-slide.is-current {
        transform: scale(1.2);
    }
    
    .contenedor-img {
        position: relative !important;
        height: 100vh !important;
        overflow: scroll !important;
        background-color: white;
        scroll-snap-type: y mandatory !important;
    }

</style>