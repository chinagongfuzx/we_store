import Vue from 'vue'
import Router from 'vue-router'
import Goods from './components/Goods.vue'
import ImgTxtDetails from './components/ImgTxtDetails.vue'
import GoodsDetails from './components/GoodsDetails.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/goods', component: Goods },
		{ path: '/imgTxtDetail', component: ImgTxtDetails },
		{ path: '/goodsDetails', component: GoodsDetails }
	]
})
