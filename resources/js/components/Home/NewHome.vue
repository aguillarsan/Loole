<template>
    <div id="contenedor">
        <div id="foto" :style="'background-image: url('+post.image+')'" v-for="(post, index) in posts"
            class="img_full_screen item" :key="index">
            <div id="ui">
                <div id="head_ui">

                </div>
                <div id="body_ui">
                    <div class="d-flex align-items-center ic-info mb-16">
                        <ion-icon class="md hydrated text-white" name="videocam" role="img" style="font-size: 22px">
                        </ion-icon>
                        <span class="text-sm text-white">
                            52
                        </span>
                    </div>
                    <div class="d-flex align-items-center ic-info">
                        <ion-icon class="md hydrated text-white" name="image" role="img" style="font-size: 22px">
                        </ion-icon>
                        <span class="text-sm text-white">
                            52
                        </span>
                    </div>
                </div>
                <div id="bottom_ui">
                    <router-link :to="{ path:`/`+post.user.username, params: {usermane: post.user.username}} ">
                        <div class="container_profile">
                            <div :style="'background-image: url('+post.user.profile_image+');'" class="user_avt">
                            </div>

                            <span class="txt_profile"> {{
                                post.user.username
                                ? shortName(post.user.username)
                                : post.user.name
                                }}</span>
                            <img src="/images/sello/sello.svg" />
                        </div>
                    </router-link>
                    <div id="description_post">
                        <p>{{shortDescription(post.description)}} <a v-if="post.description >= 18" class="more">Ver
                                más</a> </p>
                    </div>
                </div>

            </div>
            <!-- <div id="dark_screen">

            </div> -->
        </div>
        <infinite-loading :identifier="infiniteId"  @infinite="infiniteHandler" ref="InfiniteLoadingHome"
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
    Vue.component("InfiniteLoading", require("vue-infinite-loading"));
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        props: ["usuario", "notification", "mobile"],
        components: {
            Hooper,
            Slide,
        },
        data() {
            return {
                desc: 'Lorem Ipsum is simply dummy  text of the printingtypesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting',
                infiniteId: +new Date(),
                posts: [],
                page: 1,
                load: true
            }
        },
        created: function () {

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
            shortDescription(description) {
                if (description.length >= 20) {
                    let first_letters = description.substr(0, 20);
                    return first_letters;
                } else {
                    if (description.length <= 20) {
                        return description;
                    }
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
            refreshInfiniteLoading() {
                this.posts = [];
                this.page = 0;
                this.$refs.InfiniteLoading.$emit("$InfiniteLoadingHome:reset");
                this.load = false;
            },

        }
    }
</script>
<style>
    .img_full_screen {
        scroll-snap-align: center;
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }


    #contenedor {
        position: relative;
        height: 100vh;
        overflow: scroll;
        background-color: white;
        scroll-snap-type: y mandatory;
    }




    .user_avt {
        border: 2px solid #FFFFFF;
        width: 24px;
        height: 24px;
        border-radius: 100px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .container_profile {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        background: rgba(8, 4, 37, 0.4);
        border-radius: 12px;
        padding: 8px 16px;
    }

    .txt_profile {
        font-weight: 600;
        font-size: 14px;
        color: white;
        margin: 0 8px;
    }

    #ui {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: space-between;
        padding: 24px;
        height: 95vh;
        z-index: 10;
        position: relative;
    }

    #description_post {
        text-align: center;
        color: white;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        margin-top: 8px;
    }

    .more {
        text-decoration: underline;
        font-weight: 600;
        color: white;
    }

    #bottom_ui {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
    }

    #body_ui {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: flex-end;
        filter: drop-shadow(0px 2px 10px #080425);
        border-radius: 12px;
    }

    #dark_screen {
        width: 100%;
        background: linear-gradient(180deg, rgba(8, 4, 37, 0) 0%, rgba(5, 4, 36, 0.78) 100%);
        position: fixed;
        bottom: 0;
        height: 40vh;

    }

    .ic-info {
        flex-flow: column wrap;
        justify-content: flex-start;
    }

    .mb-16 {
        margin-bottom: 16px;
    }

    .scroll-snap-container {
        height: 100% !important;
        width: 100% !important;
    }

    .skeleton {
        opacity: .7;
        animation: skeleton-loading 1s linear infinite alternate;
    }

    .skeleton-icon {
        height: 20px;
        width: 20px;
        border-radius: 5px;
    }

    @keyframes skeleton-loading {
        0% {
            background-color: hsl(200, 20%, 70%);
        }

        100% {
            background-color: hsl(200, 20%, 95%);
        }
    }
</style>