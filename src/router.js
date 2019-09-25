import Vue from 'vue'
import Router from 'vue-router'
import Goods from './components/goods/Goods.vue'
import ImgTxtDetails from './components/goods/ImgTxtDetails.vue'
import GoodsDetails from './components/goods/GoodsDetails.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/goods', component: Goods },
		{ path: '/imgTxtDetails', component: ImgTxtDetails },
		{ path: '/goodsDetails', component: GoodsDetails },
		{ path: '/goodsComment', component: GoodsComment },
	]
})
