import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem('token');

    if (to.name === "login" && token !== null) {
        // User has explicity navigated to or been redirected to login but they are already logged in so just bounce
        // them to the home page
        next({ path: '/' });
    } else if (to.name !== "login") {
        // User is accessing a route other than login and therefore requires authorisation
        // since the whole app requires an authenticated user
        if (!token) {
            next({ path: '/login', params: { nextUrl: to.fullPath } });
        } else {
            next();
        }
    } else {
        next()
    }
})


export default router