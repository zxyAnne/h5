import Vue from 'vue'
import Router from 'vue-router'

import index from '@/view/index'
import info from '@/view/info'
import gift from '@/view/gift'
import send from '@/view/send'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: index
    },
    {
      name: 'info',
      path: '/info',
      component: info
    },
    {
      name: 'gift',
      path: '/gift',
      component: gift
    },
    {
      name: 'send',
      path: '/send',
      component: send
    },
  ]
})
