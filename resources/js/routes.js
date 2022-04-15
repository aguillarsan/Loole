import Axios from 'axios';
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
let Home = () =>
    import( /* webpackChunkName: "chunks/Home/home"*/ './components/Home/home.vue')
let Profile = () =>
    import( /* webpackChunkName: "chunks/Profile/profile"*/ './components/Profile/Profile.vue')
let Wallet = () =>
    import( /* webpackChunkName: "chunks/Wallet/wallet"*/ './components/Wallet/Wallet.vue')
let Withdrawals = () =>
    import( /* webpackChunkName: "chunks/Wallet/wallet"*/ './components/Wallet/Withdrawals.vue')
let OrderStatus = () =>
    import( /* webpackChunkName: "chunks/Wallet/orderStatus"*/ './components/Wallet/OrderStatus.vue')
let Collection = () =>
    import( /* webpackChunkName: "chunks/Collections/collection"*/ './components/Collections/Collection.vue')
let Notifications = () =>
    import( /* webpackChunkName: "chunks/Notifications/notifications"*/ './components/Notifications/Notifications.vue')
let Login = () =>
    import( /* webpackChunkName: "chunks/Login/login"*/ './components/Login/Login.vue')
let Publish = () =>
    import( /* webpackChunkName: "chunks/Post/publish"*/ './components/Post/Publish.vue')
let Settings = () =>
    import( /* webpackChunkName: "chunks/Profile/settings"*/ './components/Profile/Settings.vue')
let ChangePassword = () =>
    import( /* webpackChunkName: "chunks/Profile/changePassword"*/ './components/Profile/ChangePassword.vue')
let Faq = () =>
    import( /* webpackChunkName: "chunks/Faq/faq"*/ './components/Faq/Faqs.vue')
let Rate = () =>
    import( /* webpackChunkName: "chunks/Rate/rate"*/ './components/Rate/Rate.vue')
let SuccesPublish = () =>
    import( /* webpackChunkName: "chunks/Post/succesPublish"*/ './components/Post/SuccesPublish.vue')
let RegisterSusCriptor = () =>
    import( /* webpackChunkName: "chunks/Login/registerSuscriptor"*/ './components/Login/RegisterSusCriptor.vue')
let TermConditions = () =>
    import( /* webpackChunkName: "chunks/TermsConditions/termConditions"*/ './components/TermsConditions/TermConditions.vue')
let RegisterLooler = () =>
    import( /* webpackChunkName: "chunks/Login/registerLooler"*/ './components/Login/RegisterLooler.vue')
let Landing = () =>
    import( /* webpackChunkName: "chunks/Landing/landing"*/ './components/Landing/Landing.vue')
let EditProfile = () =>
    import( /* webpackChunkName: "chunks/Profile/editProfile"*/ './components/Profile/EditProfile.vue')
let AddAcount = () =>
    import( /* webpackChunkName: "chunks/Wallet/addAcount"*/ './components/Wallet/AddAcount.vue')

let Buy = () =>
    import( /* webpackChunkName: "chunks/Buy/Buy"*/ './components/Buy/BuyPost.vue')
let Search = () =>
    import( /* webpackChunkName: "chunks/Search/Search"*/ './components/Search/Search.vue')
let AproveProfiles = () =>
    import( /* webpackChunkName: "chunks/Adm/AproveProfiles"*/ './components/Adm/AproveProfiles.vue')

let RequestMoney = () =>
    import( /* webpackChunkName: "chunks/Adm/RequestMoney"*/ './components/Adm/RequestMoney.vue')
let PostAprobe = () =>
    import( /* webpackChunkName: "chunks/Adm/PostAprobe"*/ './components/Adm/PostAprobe.vue')
let Content = () =>
    import( /* webpackChunkName: "chunks/Adm/Publications/Content"*/ './components/Adm/Publications/Content.vue')
let PublicacionUser = () =>
    import( /* webpackChunkName: "chunks/Post/Post"*/ './components/Post/Post.vue')
let EditAccount = () =>
    import( /* webpackChunkName: "chunks/Profile/Account"*/ './components/Profile/Account.vue')



export default new Router({
    mode: 'history',
    routes: [{
        path: '/Home',
        name: 'Home',
        component: Home,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {

                if (response.data) {
                    let authUser = JSON.parse(localStorage.getItem('authUser'));

                    if (authUser.role_id == 2 || authUser.role_id == 3) {
                        next()
                    } else {
                        if (authUser.role_id == 1) {
                            next('/Admin');
                        }
                    }

                }
                else {
                    next('/Login')
                }
            })
        }

    },


    {
        path: '/Admin',
        name: 'AproveProfiles',
        component: AproveProfiles,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    let authUser = JSON.parse(localStorage.getItem('authUser'));

                    if (authUser.role_id == 1) {
                        next()
                    } else {
                        next('/Home')
                    }

                }
                else {
                    next('/Login')
                }
            })

        }
    },
    {
        path: '/RequestMoney',
        name: 'RequestMoney',
        component: RequestMoney,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    let authUser = JSON.parse(localStorage.getItem('authUser'));

                    if (authUser.role_id == 1) {
                        next()
                    } else {
                        next('/Home')
                    }

                }
                else {
                    next('/Login')
                }
            })

        }
    },
    {
        path: '/PostAprobe',
        name: 'PostAprobe',
        component: PostAprobe,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    let authUser = JSON.parse(localStorage.getItem('authUser'));

                    if (authUser.role_id == 1) {
                        next()
                    } else {
                        next('/Home')
                    }

                }
                else {
                    next('/Login')
                }
            })

        }
    },
    {
        path: '/PostAprobe/Content/:post',
        name: 'Content',
        component: Content,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    let authUser = JSON.parse(localStorage.getItem('authUser'));

                    if (authUser.role_id == 1) {
                        next()
                    } else {
                        next('/Home')
                    }

                }
                else {
                    next('/Login')
                }
            })

        }
    },









    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    let authUser = JSON.parse(localStorage.getItem('authUser'));

                    if (authUser.role_id == 1) {
                        next('/Admin')
                    } else {
                        next('/Home')
                    }

                }
                else {
                    next('/Landing')
                }
            })

        }
    },


    {
        path: '/Wallet',
        name: 'Wallet',
        component: Wallet,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },
    {
        path: '/Posts/:userpost',
        name: 'PublicacionUser',
        component: PublicacionUser,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },


    {
        path: '/Withdrawals',
        name: 'Withdrawals',
        component: Withdrawals,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },
    {
        path: '/OrderStatus/:order',
        name: 'OrderStatus',
        component: OrderStatus,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },
    {
        path: '/Buy',
        name: 'Buy',
        component: Buy,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },




    {
        path: '/RegisterAccount',
        name: 'AddAcount',
        component: AddAcount,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },

    {
        path: '/EditProfile',
        name: 'EditProfile',
        component: EditProfile,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },


    {
        path: '/Collection',
        name: 'Collection',
        component: Collection,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    }, {
        path: '/Notifications',
        name: 'Notifications',
        component: Notifications,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    }, {
        path: '/Publish',
        name: 'Publish',
        component: Publish,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {

                    next()


                }
                else {
                    next('/Login')
                }
            })
        },

    },
    {
        path: '/Profile/Settings/Account',
        name: 'EditAccount',
        component: EditAccount,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {

                    next()


                }
                else {
                    next('/Login')
                }
            })
        },

    },

    {
        path: '/Profile/Settings',
        name: 'Settings',
        component: Settings,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },


    {
        path: '/Profile/Settings/ChangePassword',
        name: 'ChangePassword',
        component: ChangePassword,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    }, {
        path: '/Faq',
        name: 'Faq',
        component: Faq,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },
    {
        path: '/Search',
        name: 'Search',
        component: Search,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    },



    {
        path: '/Rate',
        name: 'Rate',
        component: Rate,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }
    }, {
        path: '/SuccessPublish',
        name: 'SuccessPublish',
        component: SuccesPublish,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }

    },
    {
        path: '/Register',
        name: 'RegisterSusCriptor',
        component: RegisterSusCriptor,

        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next({
                        name: 'Home'
                    });
                }
                else {
                    next()
                }
            })
        }

    },
    {
        path: '/SingUp',
        name: 'RegisterLooler',
        component: RegisterLooler,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next({
                        name: 'Home'
                    });
                }
                else {
                    next()
                }
            })
        }

    },



    {
        path: '/Terms',
        name: 'TermConditions',
        component: TermConditions,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Terms')
                }
            })
        }

    },


    {
        path: '/Landing',
        name: 'Landing',
        component: Landing,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next({
                        name: 'Home'
                    });
                }
                else {
                    next()
                }
            })

        }

    },






    {
        path: '/Login',
        name: 'Login',
        component: Login,

        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next({
                        name: 'Home'
                    });
                }
                else {
                    next()
                }
            })
        }
    },
    {
        path: '/:username',
        name: 'Profile',
        sensitive: true,
        props: true,

        component: Profile,
        beforeEnter: (to, from, next) => {
            axios.get('authUser').then(response => {
                if (response.data) {
                    next()
                }
                else {
                    next('/Login')
                }
            })
        }

    },]
})