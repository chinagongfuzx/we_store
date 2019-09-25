import Vue from 'vue'
import Router from 'vue-router'
import photo_sharing from './components/photo_sharing/photo_sharing.vue'
import Picdetail from './components/photo_sharing/Picdetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/photo_sharing',
      path: '/',
      component:photo_sharing,
    },
    {
      path: '/photo_sharing/info/:id',
      component: Picdetail,
      props: true
    }
  ]
})
