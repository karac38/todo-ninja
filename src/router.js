import VueRouter from 'vue-router'
import Dashboard from './Views/Dashboard.vue'

export const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import(/*webpackChunkName: "about"*/ './Views/Projects.vue')
        },
        {
            path: '/team',
            name: 'team',
            component: () => import(/*webpackChunkName: "team"*/ './Views/Team.vue')
        }
    ]
})