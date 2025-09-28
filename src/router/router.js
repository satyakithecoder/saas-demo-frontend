import {createRouter, createWebHistory} from "vue-router";
import LandingPage from "@/views/LandingPage.vue"
import SignUp from "@/views/SignUp.vue";
const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:[
            {
                path:'/',
                name: 'LandingPage',
                component: LandingPage,
            },
            {
                path:'/signup',
                name: 'SignUp',
                component: SignUp,
            }
        ]
    }
)
export default router;