import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'
import news from './components/news/news.vue'
import photo_sharing from './components/photo_sharing/photo_sharing.vue'
import goods from './components/goods/goods.vue'
import vip from './components/vip/vip.vue'
import cart from './components/cart/cart.vue'
import search from './components/search/search.vue'
import searchAdd from './components/search/searchAdd.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login', component: login
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/photo_sharing',
      component: photo_sharing
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/vip',
      component: vip
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/searchAdd',
      component: searchAdd
    }
  ]
})
