<template>
    <div>
        <div class="logo-load-center " v-if="load">
            <img class="animate-flicker" src="/images/img_0.png" />
        </div>
        <div id="app_main_content" v-if="!load">
            <!--Search -->
            <div class="appHeader box-shw-profile-header" v-if="currentRoute == 'Home'">
                <div class="pageTitle">
                    Inicio
                </div>
                <div class="right" id="opttions_menu_home">
                    <router-link :to="'/Search'" class="headerButton hover_link">
                        <ion-icon name="search-outline" role="img" class="md hydrated"></ion-icon>

                    </router-link>
                    <router-link :to="'/Notifications'" class="headerButton">
                        <ion-icon name="notifications-outline" role="img" class="md hydrated"></ion-icon>
                        <span class="badge badge-danger" v-if="notification != 0">
                            {{notification}}
                        </span>
                    </router-link>
                    <a @click="showNotification">
                        <button href="#" class=" btn btn-primary rounded" v-if="usuario.role_id == 2">
                            Publicar
                        </button>
                    </a>
                </div>
            </div>
            <!--End Search -->
            <!--hide sidebar buton -->
            <a class="item" data-bs-toggle="offcanvas" href="#sidebarPanel" id="burger_btn" style="display: none"
                type="hidden">
                <div class="col">
                    <ion-icon aria-label="menu outline" class="md hydrated" name="menu-outline" role="img">
                    </ion-icon>
                </div>
            </a>
            <!--End sidebar buton -->
            <!--Main content -->
            <div class="">
                <transition name="slide-fade" mode="out-in">
                    <router-view :usuario="usuario" :notification="notification" :mobile="mobile">
                    </router-view>
                </transition>
            </div>
            <!--End Main content -->
            <!-- App Bottom Menu -->
            <div id="menu_bottom_mobile">
                <div class="appBottomMenu" v-if="
                usuario.role_id == 2 &&
                currentRoute != 'Publish' &&
                currentRoute != 'Notifications' &&
                currentRoute != 'Settings' &&
                currentRoute != 'Wallet' &&
                currentRoute != 'ChangePassword' &&
                currentRoute != 'SuccessPublish' && 
                currentRoute != 'Withdrawals' && 
                currentRoute != 'OrderStatus'&&
                currentRoute != 'EditProfile' && 
                currentRoute != 'PublicacionUser' &&
                currentRoute != 'EditAccount'
                
              " style="min-height: 70px !important;">
                    <router-link :class="currentRoute == 'Home' ? 'item active' : 'item'" :to="'/home'"
                        @click.prevent="refresh()">
                        <div class="col">
                            <ion-icon aria-label="home outline" class="md hydrated" name="home-outline" role="img">
                            </ion-icon>
                        </div>
                    </router-link>
                    <router-link :to="'/Search'" class="item">
                        <div class="col">
                            <ion-icon aria-label="calendar outline" class="md hydrated" name="search-outline"
                                role="img">
                            </ion-icon>
                        </div>
                    </router-link>
                    <a @click="showNotification" class="item">
                        <div class="col">
                            <div class="action-button  bg-primary-loole btn-40">
                                <ion-icon aria-label="add outline" class="md hydrated" name="add-outline" role="img">
                                </ion-icon>
                            </div>
                        </div>
                    </a>
                    <router-link :class="currentRoute == 'Notifications' ? 'item active' : 'item'"
                        :to="'/Notifications'">
                        <div class="col">
                            <ion-icon aria-label="document text outline" class="md hydrated"
                                name="notifications-outline" role="img">
                            </ion-icon>
                            <span class="badge badge-danger" v-if=" notification != 0 ">
                                {{notification}}
                            </span>
                        </div>
                    </router-link>
                    <a class="item" data-bs-toggle="offcanvas" href="#sidebarPanel" id="burger_btn">
                        <div class="col">
                            <ion-icon aria-label="menu outline" class="md hydrated" name="menu-outline" role="img">
                            </ion-icon>
                        </div>
                    </a>
                </div>
                <div class="appBottomMenu" v-if="usuario.role_id == 3 && currentRoute != 'Notifications'"
                    :style="currentRoute == 'Home' ? 'background:transparent !important;border-top:none !important':''">
                    <router-link :to="'/home'" :class="currentRoute == 'Home' ? 'item active' : 'item'">
                        <div class="col">
                            <ion-icon aria-label="home outline" class="md hydrated" name="home-outline" role="img">
                            </ion-icon>
                        </div>
                    </router-link>
                    <router-link :to="'/Search'" class="item">
                        <div class="col">
                            <ion-icon aria-label="cube outline" class="md hydrated" name="search-outline" role="img">
                            </ion-icon>
                        </div>
                    </router-link>
                    <router-link :to="'/Notifications'" class="item"
                        :class="currentRoute == 'Notifications' ? 'item active' : 'item'">
                        <div class="col">
                            <ion-icon aria-label="chatbubble ellipses outline" class="md hydrated"
                                name="notifications-outline" role="img">
                            </ion-icon>
                            <span class="badge badge-danger" style="display: none">
                                5
                            </span>
                        </div>
                    </router-link>
                    <router-link :to="'/Collection'" class="item"
                        :class="currentRoute == 'Collection' ? 'item active' : 'item'">
                        <div class="col">
                            <ion-icon aria-label="layers outline" class="md hydrated" name="images-outline" role="img">
                            </ion-icon>
                        </div>
                    </router-link>
                    <a class="item" data-bs-toggle="offcanvas" href="#sidebarPanel" id="burger_btn">
                        <div class="col">
                            <ion-icon aria-label="menu outline" class="md hydrated" name="menu-outline" role="img">
                            </ion-icon>
                        </div>
                    </a>
                </div>
            </div>

            <!-- * App Bottom Menu -->
            <!-- App Sidebar -->
            <div class="offcanvas offcanvas-start" id="sidebarPanel" tabindex="-1">
                <div class="offcanvas-body">
                    <!-- profile box -->
                    <div class="profileBox  box-shw-profile-header bg-primary-loole" @click="closeSidebar()">
                        <router-link :to="{ path:`/`+usuario.username, params: {usermane:usuario.username}} "
                            class="item">
                            <div class="image-wrapper">
                                <img :src="usuario.profile_image" alt="image" class="imaged rounded" />
                            </div>
                        </router-link>
                        <div class="in ">
                            <router-link :to="{ path:`/`+usuario.username, params: {usermane:usuario.username}} "
                                class="item">
                                <strong class="">
                                    {{
                                    usuario.username ? usuario.username : usuario.name
                                    }}
                                </strong>
                            </router-link>
                        </div>
                        <a class="close-sidebar-button" id="close_sidebar_profile" data-bs-dismiss="offcanvas" href="#">
                            <ion-icon aria-label="close" class="md hydrated" name="close" role="img">
                            </ion-icon>
                        </a>
                    </div>
                    <!-- * profile box -->
                    <ul class="listview flush transparent no-line image-listview mt-2">
                        <li @click="closeSidebar()">
                            <router-link :to="'/home'" class="item">
                                <div class="icon-box ">
                                    <ion-icon aria-label="home outline" class="md hydrated" name="home-outline"
                                        role="img">
                                    </ion-icon>
                                </div>
                                <div class="in">
                                    Home
                                </div>
                            </router-link>
                        </li>
                        <li @click="closeSidebar()">
                            <router-link :to="{ path:`/`+usuario.username, params: {usermane:usuario.username}} "
                                class="item">
                                <div class="icon-box ">
                                    <ion-icon aria-label="cube outline" class="md hydrated" name="person-outline"
                                        role="img">
                                    </ion-icon>
                                </div>
                                <div class="in">
                                    Perfil
                                </div>
                            </router-link>
                        </li>
                        <li @click="closeSidebar()">
                            <router-link
                                :to="usuario.account_id != null && usuario.role_id == 2 ? '/Wallet' : (usuario.account_id == null && usuario.role_id == 2 ? '/RegisterAccount':(usuario.role_id == 3 ? '/Wallet':'' ))"
                                class="item">
                                <div class="icon-box ">
                                    <ion-icon aria-label="layers outline" class="md hydrated" name="wallet-outline"
                                        role="img">
                                    </ion-icon>
                                </div>
                                <div class="in">
                                    <div>
                                        Movimientos
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li @click="closeSidebar()">
                            <router-link :to="'/Collection'" class="item">
                                <div class="icon-box ">
                                    <ion-icon aria-label="chatbubble ellipses outline" class="md hydrated"
                                        name="images-outline" role="img">
                                    </ion-icon>
                                </div>
                                <div class="in">
                                    <div>
                                        Mi Colección
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li @click="closeSidebar()">
                            <router-link :to="'/Rate'" class="item">
                                <div class="icon-box ">
                                    <ion-icon aria-label="star-outline" class="md hydrated" name="star-outline"
                                        role="img">
                                    </ion-icon>
                                </div>
                                <div class="in">
                                    <div>
                                        Calificanos
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li @click="closeSidebar()">
                            <router-link :to="'/Faq'" class="item">
                                <div class="icon-box ">
                                    <ion-icon aria-label="chatbubble ellipses outline" style="font-size:22px"
                                        class="md hydrated" name="help-circle-outline" role="img">
                                    </ion-icon>
                                </div>
                                <div class="in">
                                    <div>
                                        Ayuda
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <div class="item">
                                <div class="icon-box">
                                    <ion-icon name="moon-outline" role="img" class="md hydrated"
                                        aria-label="moon outline"></ion-icon>
                                </div>
                                <div class="in">
                                    <div>Dark Mode</div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input dark-mode-switch" @change="darkMode"
                                            type="checkbox" id="darkmodesidebar">
                                        <label class="form-check-label" for="darkmodesidebar"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- sidebar buttons -->
                <div class="sidebar-buttons">
                    <a @click="logout()" class="button hover_link" style="right: 0">
                        <div class="in">
                            <div style="font-size:15px">
                                Cerrar sesión
                            </div>
                        </div>
                        <div class="" style="    margin-left: 5px
                        px
                        ;">
                            <ion-icon aria-label="log out outline" class="md hydrated" name="log-out-outline"
                                role="img">
                            </ion-icon>
                        </div>

                    </a>
                </div>
                <!-- * sidebar buttons -->
            </div>
            <!-- * App Sidebar -->
        </div>


        <div class="modal fade dialogbox" id="account_inactive" data-bs-backdrop="static" tabindex="-1"
            style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-icon text-secondary">
                        <ion-icon name="information-circle-outline" role="img" class="md hydrated"
                            aria-label="close circle">
                        </ion-icon>
                    </div>
                    <div class="modal-header">
                        <h5 class="modal-title"> Cuenta en revisión</h5>
                    </div>
                    <div class="modal-body">
                        Una vez verificada tu cuenta, podrás publicar tu contenido en Loole.
                    </div>
                    <div class="modal-footer">
                        <div class="btn-inline">
                            <a href="#" class="btn" data-bs-dismiss="modal">Entendido</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        props: ["ruta", "user"],
        data() {
            return {

                load: false,
                mobile: null,
                usuario: this.user,
                notification: 0,
                success: "success",
                error: "error",
                info: "info",
            };
        },
        created: function () {
            this.isMobile()
            this.notificationActive()
            document.getElementById("body_element").style =
                "background-color:white !important";
            // document.getElementById("body_element").className ="dark-mode-active";    





        },
        mounted() {

            window.Echo.channel('post-buy.' + this.usuario.id).listen('BuyPostEvent', (post_buyed) => {

                if (this.usuario.id = post_buyed) {
                    let message = "Te han comprado contenido"
                    self.alert(this.success, message);
                    this.notificationActive();
                }


            })
            window.Echo.channel('send-not.' + this.usuario.id)
                .listen('WithdrawalsEvent', (notification) => {

                    let message = notification.message.lenght >= 23 ? notification.message.substr(0, 23) + "..." : notification.message;
                    self.alert(this.success, message);
                    this.notificationActive();

                });



            let self = this;
            this.$eventBus.$on('display-alert-appp', function (type, message) {
                self.alert(type, message);
            });
            this.$eventBus.$on('search-bar', function () {
                self.Search();
            });
            this.$eventBus.$on('update-data-user-app', function (data) {
                self.updateData(data)
            });

            this.$eventBus.$on('update-notification', function (data) {
                self.notificationActive(data)
            });
            this.$eventBus.$on('notification-account-inactive', function () {
                self.showNotification()
            });

        },
        computed: {
            currentRoute() {
                return this.$route.name;
            },
        },

        methods: {
            updateData: function (data) {
                this.usuario = data

            },
            notificationActive(data) {
                if (data) {
                    this.notification = data
                } else {
                    if (this.usuario.role_id == 2) {
                        axios.get('/notification/status/user').then(response => {

                            this.notification = response.data

                        })
                    }
                }

            },
            showNotification() {
                axios.get('/authenticate/getRefrescarUsuarioAutenticado').then(response => {
                    this.usuario = response.data
                    if (this.usuario.status_id == 1) {
                        $("#account_inactive").modal("show");

                    } else {
                        if (this.usuario.status_id == 3) {

                            this.$router.push('/Publish')

                        }
                    }
                })


            },
            darkMode() {
                if (document.getElementById("body_element").className == "dark-mode-active") {
                    document.getElementById("body_element").style =
                        "background-color:white !important ";
                    document.getElementById("body_element").className = "";
                } else {
                    document.getElementById("body_element").style =
                        "background-color:white ";
                    document.getElementById("body_element").className = "dark-mode-active";
                }

            },
            isMobile() {
                if (
                    navigator.userAgent.match(/Android/i) ||
                    navigator.userAgent.match(/webOS/i) ||
                    navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPod/i) ||
                    navigator.userAgent.match(/iPad/i) ||
                    navigator.userAgent.match(/BlackBerry/i)) {
                    this.mobile = true;

                } else {

                    this.mobile = false;
                }

            },
            closeSidebar: function () {
                if (this.mobile == true) {
                    let btn = document.getElementById("burger_btn");
                    btn.click();
                }

            },
            logout: function () {
                this.load = true
                axios.post("/authenticate/logout").then((response) => {
                    localStorage.clear();
                    window.location.replace('/Login');
                    location.reload();



                });
            },
            Search: function () {
                if (document.getElementById("search").className == "appHeader show") {

                    document.getElementById("search").className = "appHeader";

                    document.getElementById("list_search").className = "dropdown-menu";
                    document.getElementById("list_search").style.display = 'none';
                } else {
                    document.getElementById("search").className = "appHeader show";
                }
                this.displayBoxSearch()
            },
            displayBoxSearch() {
                if (document.getElementById("search").className == "dropdown-menu show") {
                    document.getElementById("list_search").className = "dropdown-menu ";
                } else {
                    document.getElementById("list_search").className = "dropdown-menu show";
                }

            },
            CloseSearch: function () {
                document.getElementById("search").className = "appHeader";
            },
            refresh: function () {
                this.$eventBus.$emit("refresh-home");
            },
            alert(type, message) {
                Vue.$toast.open({
                    message: message,
                    type: type,
                    position: 'top',
                    duration: 5000

                });
            }
        },
    };
</script>
<style>
    .menu_tranparent {
        background: red !important;
        border-top: none !important;
    }

    .btn-40 {
        width: 40px !important;
        height: 40px !important;


    }

    .btn-white {
        background: white !important;
    }
</style>