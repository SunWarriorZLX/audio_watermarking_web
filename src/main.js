import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import router from '../router/index'
import './components/globle/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './components/globle/global.css'
import store from "@/store"

Vue.use(ElementUI);

axios.defaults.withCredentials

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        let token = localStorage.getItem('Authorization');
        if (token !== '') {
            next();
        }
        else {
            next({
                path:'/'
            })
        }
    }
    else {
        next()
    }
})

new Vue({
    router: router,
    store,
    render: h => h(App),

}).$mount('#app')
