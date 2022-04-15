<template>
    <div>
        <div class="">
            <transition name="slide-fade" mode="out-in">
                <router-view :usuario="usuario">
                </router-view>
            </transition>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebarPanel" style="visibility: hidden;"
            aria-hidden="true">
            <div class="offcanvas-body">
                <!-- profile box -->
                <div class="profileBox">
                    <div class="image-wrapper">
                        <img src="assets/img/sample/avatar/avatar1.jpg" alt="image" class="imaged rounded">
                    </div>
                    <div class="in">
                        <strong>{{usuario.name}}</strong>

                    </div>
                    <a href="#" class="close-sidebar-button" data-bs-dismiss="offcanvas">
                        <ion-icon name="close" role="img" class="md hydrated" aria-label="close"></ion-icon>
                    </a>
                </div>
                <!-- * profile box -->

                <ul class="listview flush transparent no-line image-listview mt-2">
                    <li>
                        <router-link :to="'/Admin'" class="item">
                            <div class="icon-box bg-primary">
                                <ion-icon name="person-add-outline" role="img" class="md hydrated"
                                    aria-label="home outline">
                                </ion-icon>
                            </div>
                            <div class="in">
                                Cuentas por validar
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="'/RequestMoney'" class="item">
                            <div class="icon-box bg-primary">
                                <ion-icon name="cash-outline" role="img" class="md hydrated" aria-label="cube outline">
                                </ion-icon>
                            </div>
                            <div class="in">
                                Solicitudes de retiro
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="'/PostAprobe'" class="item">
                            <div class="icon-box bg-primary">
                                <ion-icon name="images-outline" role="img" class="md hydrated"
                                    aria-label="layers outline"></ion-icon>
                            </div>
                            <div class="in">
                                <div>Revisión de publicaciones</div>
                            </div>
                        </router-link>
                    </li>

                </ul>



            </div>
            <!-- sidebar buttons -->
            <div class="sidebar-buttons">

                <a class="button " @click="logout">
                    <ion-icon name="log-out-outline" role="img" class="md hydrated" aria-label="log out outline">
                    </ion-icon>
                </a>
            </div>
            <!-- * sidebar buttons -->
        </div>
        <div id="menu_bottom_mobile">
            <div class="appBottomMenu">
                <router-link :to="'/Admin'" :class="currentRoute == 'AproveProfiles'  ? 'item active' :'item'">
                    <div class="col">
                        <ion-icon name="person-add-outline" role="img" class="md hydrated" aria-label="home outline">
                        </ion-icon>
                    </div>
                </router-link>
                <router-link :to="'/RequestMoney'" :class="currentRoute == 'RequestMoney'  ? 'item active' :'item'"
                    class="item">
                    <div class="col">
                        <ion-icon name="cash-outline" role="img" class="md hydrated" aria-label="cube outline">
                        </ion-icon>
                    </div>
                </router-link>
                <router-link :to="'/PostAprobe'" :class="currentRoute == 'PostAprobe'  ? 'item active' :'item'"
                    class="item">
                    <div class="col">
                        <ion-icon name="images-outline" role="img" class="md hydrated"
                            aria-label="chatbubble ellipses outline"></ion-icon>

                    </div>
                </router-link>

                <a href="#sidebarPanel" class="item" data-bs-toggle="offcanvas">
                    <div class="col">
                        <ion-icon name="menu-outline" role="img" class="md hydrated" aria-label="menu outline">
                        </ion-icon>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['usuario'],
        created: function () {


        },
        mounted() {

            let self = this;
            this.$eventBus.$on('display-alert-app-adm', function (type, message) {
                self.alert(type, message);
            });
        },
        methods: {
            logout: function () {
                this.load = true
                axios.post("/authenticate/logout").then((response) => {
                    localStorage.clear();
                    window.location.replace('/Login');
                    location.reload();



                });
            },
            alert(type, message) {
                Vue.$toast.open({
                    message: message,
                    type: type,
                    position: 'top',
                    duration: 2000

                });
            }
        },
        computed: {
            currentRoute() {
                return this.$route.name;
            },
        },
    }
</script>

<style>

</style>