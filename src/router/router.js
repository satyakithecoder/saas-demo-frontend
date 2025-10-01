import {createRouter, createWebHistory} from "vue-router";
import LandingPage from "@/views/LandingPage.vue"
import SignUp from "@/views/SignUp.vue";
import SignIn from "@/views/SignIn.vue";
import Navbar from "@/views/navbar.vue";
import NotFoundView from "@/views/NotFoundView.vue";
const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:[
            {
                path:'/',
                component: LandingPage,
            },
            {
                path:'/signup',
                component: SignUp,
            },
            {
                path: '/signin',
                component: SignIn,
            },
            {
                path:'/dashboard',
                component: Navbar,
            },
            {
                path: '/:catchAll(.*)',
                component: NotFoundView,
            },
        ]
    }
)
export default router;