import VueRouter from 'vue-router'
import Home from './Views/Home.vue'

export const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/*webpackChunkName: "about"*/ './Views/About.vue')
        }
    ]
})