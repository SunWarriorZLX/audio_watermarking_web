import Vue from 'vue';
import App from './App.vue';
import axios from "axios";
import router from '../router/index';
import './components/globle/global.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './components/globle/global.css';
import {post, fetch, patch, put} from './http';
import globle from './globle/globleApi';
import store from "@/store";
import APlayer from 'vue-aplayer';

Vue.use(ElementUI);
Vue.use(APlayer);

axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

axios.defaults.baseURL = globle.baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        let token = localStorage.getItem('Authorization');
        if (token !== '') {
            next();
        } else {
            next({
                path: '/'
            })
        }
    } else {
        next()
    }
})

new Vue({
    router: router,
    store,
    render: h => h(App),

}).$mount('#app')
