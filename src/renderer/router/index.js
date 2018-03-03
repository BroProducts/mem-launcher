import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
Vue.use(Router)


import PageLogin from '@/pages/PageLogin'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/login',
      name: 'Login',
      component: PageLogin
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
