import Vue from 'vue'
import Router from 'vue-router'

import vip from './components/vip/vip.vue'
import cart from './components/cart/cart.vue'
import search from './components/search/search.vue'

import Goods from './components/goods/Goods.vue'
import ImgTxtDetails from './components/goods/ImgTxtDetails.vue'
import GoodsDetails from './components/goods/GoodsDetails.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

import login from './components/login.vue'
import news from './components/news/news.vue'
import NewsDetails from './components/news/NewsDetails.vue'
import photo_sharing from './components/photo_sharing/photo_sharing.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login', component: login
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/news/detail/:newId',
      component: NewsDetails,
      props: true
    },
    {
      path: '/photo_sharing',
      component: photo_sharing
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/imgTxtDetails',
      component: ImgTxtDetails
    },
    {
      path: '/goodsDetails',
      component: GoodsDetails
    },
    {
      path: '/goodsComment',
      component: GoodsComment
    }
  ]
})
