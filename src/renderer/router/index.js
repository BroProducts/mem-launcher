import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
Vue.use(Router)


import PageLogin from '@/pages/PageLogin'
import PagePlay from '@/pages/PagePlay'
import PageProfile from '@/pages/PageProfile'
import PageSettings from '@/pages/PageSettings'
import PageClientInfos from '@/pages/PageClientInfos'
import PageDeveloper from '@/pages/PageDeveloper'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'play',
      component: PagePlay
    },
    {
      path: '/profile',
      name: 'Profile',
      component: PageProfile
    },
    {
      path: '/settings',
      name: 'Settings',
      component: PageSettings
    },
    {
      path: '/client-infos',
      name: 'Client Infos',
      component: PageClientInfos
    },
    {
      path: '/developer',
      name: 'Developer',
      component: PageDeveloper
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
