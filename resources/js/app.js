require('./bootstrap');

window.Vue = require('vue');
Vue.config.ignoredElements = [/^ion-/]
// ########################## Axios Libraries ##############################
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// #########################################################################

Vue.prototype.$eventBus = new Vue()

// ########################## Lottie ##############################
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);
// #########################################################################
// ########################## ClipBoard ##############################
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
// ##########################

// #########################################################################
Vue.use(VueClipboard)

Vue.component('App', require('./components/App.vue').default);
Vue.component('Auth', require('./components/Auth.vue').default);
Vue.component('Admin', require('./components/Admin.vue').default);
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
    preLoad: 1.0,
    /* error: errorimage,
     loading: loadimage,*/
    attempt: 1
})




import router from './routes'

const app = new Vue({
    el: '#app',
    router
});
