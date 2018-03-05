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


import PlayCustomGame from '@/components/PlayCustomGame'
import PlayPvp from '@/components/PlayPvp'

const router = new Router({
  routes: [
    {
      path: '/play',
      name: 'play',
      component: PagePlay,
      meta: {
        navTabMain: 'tab-play'
      },
      children: [
        {
          path: '',
          name: 'Pvp',
          component: PlayPvp,
          meta: {
            navTabMain: 'tab-play',
            navTabSub: 'tab-pvp'
          }
        },
        {
          path: '/play/custom-game',
          name: 'Custom Game',
          component: PlayCustomGame,
          meta: {
            navTabMain: 'tab-play',
            navTabSub: 'tab-custom-game'
          }
        }
      ],
    },
    {
      path: '/profile',
      name: 'Profile',
      component: PageProfile,
      meta: {
        navTabMain: 'tab-profile'
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: PageSettings,
      meta: {
        navTabMain: 'tab-settings'
      }
    },
    {
      path: '/client-infos',
      name: 'Client Infos',
      component: PageClientInfos,
      meta: {
        navTabMain: 'tab-client-infos'
      }
    },
    {
      path: '/developer',
      name: 'Developer',
      component: PageDeveloper,
      meta: {
        navTabMain: 'tab-developer'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: PageLogin
    },
    {
      path: '*',
      redirect: '/play'
    }
  ]
})

export default router
