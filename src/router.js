import Vue from 'vue'
import Router from 'vue-router'
import Goods from './components/Goods.vue'
import GoodDetails from './components/GoodDetails.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/goods', component: Goods },
		{ path: '/goodDetails', component: GoodDetails }
	]
})
