import Vue from "vue";
import Router from 'vue-router';
import stort from './store.js';

import Secure from "@/pages/Secure";
import SignUp from "@/pages/SignUp";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: SignUp
        },
        {
            path: '/auth',
            name: 'secure',
            component: Secure
        }
    ]
})

export default router;