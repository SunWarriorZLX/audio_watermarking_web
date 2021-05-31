import Vue from "vue";
import VueRouter from 'vue-router';
import Header from '@/components/common/Header';
import Login from '@/components/login/LoginUser';
import OverallInterface from "@/components/common/OverallInterface";
import Embed from '@/components/common/Embed';
import Extract from '@/components/common/Extract';

Vue.use(VueRouter)
export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login,
            meta: {
                keepalive: false
            }
        },
        {
            path: '/header',
            component: Header,
            meta: {
                keepalive: false
            }
        },
        {
            path: '/embed_and_extract',
            component: OverallInterface,
            meta: {
                keepalive: false,
                requireAuth: false//true
            },
            children: [
                {
                    path: '/Embed',
                    component: Embed,
                    meta: {
                        requireAuth: false//true
                    }
                },
                {
                    path: '/Extract',
                    component: Extract,
                    meta:{
                        requireAuth: false//true
                    }
                },
            ]
        },
    ]
});

