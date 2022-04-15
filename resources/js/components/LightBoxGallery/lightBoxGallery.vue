<template>
    <div>
        <div class="modal-light-box" style="z-index:9999" id="modalImagesVideos">
            <span class="close-modal-light-box cursor hover_link close_modal_image" @click="closeModal">

                <ion-icon name="close" class="text-secondary"></ion-icon>


            </span>
            <hooper style="height: 100%" v-if="posts.length != 0">
                <slide :key="index" v-for="(img,index) in posts">

                    <img alt="Image placeholder" class="img-fluid img-modal shadow" id=""
                        v-lazy.container="img.image" />
                    <video class="img-fluid border-radius-lg shadow" controls=""
                        controlslist="nodownload" preload="metadata" v-if=" img.video != null">
                        <source :src="img.video" type="video/mp4">
                        </source>
                    </video>





                </slide>

            </hooper>
        </div>





    </div>

</template>

<script>

    import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        props: ['usuario', 'my_profile'],
        components: {
            Hooper,
            Slide,
            HooperPagination
        },

        data() {
            return {
                posts: [],
                ac_key: 0,
                more_pics: true,
                index: ""

            }
        },
        watch: {
            carouselData() {

            }
        },
        created: function () {
            let self = this;
            this.$eventBus.$on('show-gallery', function (post, id) {
                self.showGalley(post, id);
            });
        },
        methods: {
            siguiente(key) {

                if (this.ac_key >= this.posts.lengt - 1) { //if index value is greater and equal to gallery length by -1 then hide nextBtn
                    this.more_pics = false
                }


                this.ac_key++
                if (this.ac_key >= this.posts.lengt - 1) {
                    this.more_pics = false
                } else {
                    this.ac_key = key + 1;
                }

            },
            closeModal() {
                this.posts = [];
                document.getElementById("modalImagesVideos").style.display = 'none';

            },
            updateCarousel(payload) {
                this.myCarouselData = payload.currentSlide;
            },
            showGalley: function (post) {

                this.posts = post
                // this.$refs.carousel.slideTo(this.index);
                document.getElementById("modalImagesVideos").style.display = 'block';



            },
            ifBuy(post) {
                let buy = post.post_buy

                let post_buy_check = buy.find(data => data.user_id == this.usuario.id);
                if (post_buy_check) {

                    return true
                } else {

                    return false
                }
            }


        },
    };
</script>

<style>
</style>