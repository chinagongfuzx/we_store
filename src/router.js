import Vue from 'vue'
import Router from 'vue-router'
import photo_sharing from './components/photo_sharing/photo_sharing.vue'
import Picdetail from './components/photo_sharing/Picdetail.vue'
import login from './components/login.vue'
import news from './components/news/news.vue'
import NewsDetails from './components/news/NewsDetails.vue'
import goods from './components/goods/goods.vue'
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
      path: '/photo_sharing/info/:id',
      component: Picdetail,
      props: true
    },
    {
      path: '/goods',
      component: goods
    }
  ]
})
