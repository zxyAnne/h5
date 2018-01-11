import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bargainActivity from '@/view/bargainActivity'
import index from '@/view/index'
import expert from '@/view/expert'
import learn from '@/view/learn'
import qa from '@/view/qa'
import article from '@/view/article'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/expert',
      name: 'expert',
      component: expert
    },
    {
      path: '/learn',
      name: 'learn',
      component: learn
    },
    {
      path: '/qa',
      name: 'qa',
      component: qa
    },
    {
      path: '/article',
      name: 'article',
      component: article
    }
  ]
})
