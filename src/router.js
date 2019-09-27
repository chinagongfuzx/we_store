import Vue from 'vue'
import Router from 'vue-router'
import PhotoSharing from './components/photo_sharing/Photo_sharing.vue'
import Picdetail from './components/photo_sharing/Picdetail.vue'
import Login from './components/Login.vue'
import News from './components/news/News.vue'
import NewsDetails from './components/news/NewsDetails.vue'
import Vip from './components/vip/Vip.vue'
import Cart from './components/cart/Cart.vue'
import Search from './components/search/Search.vue'
import Addgoods from './components/search/SearchAdd.vue'

import Goods from './components/goods/Goods.vue'
import ImgTxtDetails from './components/goods/ImgTxtDetails.vue'
import GoodsDetails from './components/goods/GoodsDetails.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/news/detail/:newId',
      component: NewsDetails,
      props: true
    },
    {
      path: '/photo_sharing',
      component: PhotoSharing,
      meta: {
        isSaveScroll: true
      }
    },
    {
      path: '/photo_sharing/info/:id',
      component: Picdetail,
      props: true
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
      path: '/search',
      component: Search
    },
    {
      path: '/addgoods',
      component: Addgoods
    }, {
      path: '/goodsComment',
      component: GoodsComment
    }
  ]
})
