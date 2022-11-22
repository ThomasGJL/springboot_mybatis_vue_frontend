// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './plugins/element.js'

import 'iview/dist/styles/iview.css'

import 'vue-easytable/libs/theme-default/index.css'
import VueEasytable from 'vue-easytable'

import axios from 'axios'

Vue.use(VueEasytable)

Vue.prototype.$ajax = axios

Vue.config.productionTip = false

axios.defaults.baseURL = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
