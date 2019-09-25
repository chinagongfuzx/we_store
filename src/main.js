import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'lib-flexible'
import 'vant/lib/index.css'
import './assets/css/global.css'
import './assets/font/iconfont.css'
import moment from 'moment'

Vue.use(Vant)
import { Lazyload } from 'vant'

// options 为可选参数，无则不传
Vue.use(Lazyload)
Vue.config.productionTip = false

Vue.filter('dateFormat', (date) => {
  return moment(date).format('YYYY-M-D')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

