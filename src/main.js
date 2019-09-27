import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import moment from 'moment'

import 'vant/lib/index.css'
import './assets/css/global.css'
import './assets/font/iconfont.css'

import 'lib-flexible'

import './plugins/vantUI'

Vue.use(Vant)

Vue.config.productionTip = false

Vue.filter('dateFormat', function (date) {
  return moment(date).format('YYYY-M-D')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
