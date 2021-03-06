import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (store.getters["app/notFound"])
    store.dispatch("app/notFoundPage", false)

  if (!store.getters["auth/getAccessToken"] && to.name !== 'Login') {
    store.dispatch("auth/login")
    next(false)
  }

  next()
})

export default router
