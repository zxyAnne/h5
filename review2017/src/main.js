// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/main.scss'
import {wechatShare}  from './assets/js/wechatShare'

Vue.config.productionTip = false
window.wechatShare  = wechatShare 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
