import Signed from "@/pages/Signed";
import SignUp from "@/pages/SignUp";
import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
    {
        name: 'SignUp',
        path: '/',
        component: SignUp
    },
    {
        path: '/auth',
        component: Signed
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach(async (to, from) => {
    console.log(store.getters.isLoggedIn)
    if (!store.getters.isLoggedIn && to.name !== 'SignUp') {
        return {name: 'SignUp'}
    }
})

export default router;