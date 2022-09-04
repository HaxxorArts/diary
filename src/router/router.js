import Signed from "@/pages/Signed";
import SignUp from "@/pages/SignUp";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
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

export default router;