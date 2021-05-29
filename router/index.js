import Vue from "vue"
import Router from 'vue-router'
import Header from '@/components/common/Header'
import Login from '@/components/login/LoginUser'

Vue.use(Router)
export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login,
            // meta: {
            //
            // }
        },
        {
            path: '/header',
            component: Header,
        }
    ]
});

