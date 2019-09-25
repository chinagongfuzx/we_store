import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/global.css'
import moment from 'moment'
// 时间
Vue.filter('dataFormat', function(msg) {
  return moment(msg).format('YYYY-MM-DD')
})
Vue.use(Vant)
import { Lazyload } from 'vant'

// options 为可选参数，无则不传
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

