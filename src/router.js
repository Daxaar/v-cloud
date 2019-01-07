import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

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

  if (to.name !== "login") {
    //if (localStorage.getItem('token') == null) {
    if (!store.state.user) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next()
  }
  // if(to.matched.some(record => record.meta.requiresAuth)) {
  //     if (localStorage.getItem('jwt') == null) {
  //         next({
  //             path: '/login',
  //             params: { nextUrl: to.fullPath }
  //         })
  //     } else {
  //         let user = JSON.parse(localStorage.getItem('user'))
  //         if(to.matched.some(record => record.meta.is_admin)) {
  //             if(user.is_admin == 1){
  //                 next()
  //             }
  //             else{
  //                 next({ name: 'userboard'})
  //             }
  //         }else {
  //             next()
  //         }
  //     }
  // } else if(to.matched.some(record => record.meta.guest)) {
  //     if(localStorage.getItem('jwt') == null){
  //         next()
  //     }
  //     else{
  //         next({ name: 'userboard'})
  //     }
  // }else {
  //     next()
  // }
})


export default router