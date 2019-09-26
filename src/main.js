import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import './plugins/vantUI'


import 'lib-flexible'
import 'vant/lib/index.css'
import './assets/css/global.css'
import './assets/font/iconfont.css'
import moment from 'moment'


Vue.config.productionTip = false

Vue.filter('dateFormat', (date) => {
  return moment(date).format('YYYY-M-D')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
