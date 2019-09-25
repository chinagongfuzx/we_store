import axios from 'axios'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'

// 获取商品列表数据
export const getGoods = (number) => {
	return axios.get(`/api/getgoods?pageindex=${number}`)
}

// 商品详情页
export const goodDetails = (id) => {
	return axios.get(`/api/goods/getdesc/${id}`)
}