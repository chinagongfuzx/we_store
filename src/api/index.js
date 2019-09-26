import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
export const getUrl =params => axios.get('api/getlunbo',{params})
export const getGoodsList =page => axios.get(`/api/getgoods?pageindex=${page}`)
export const getSearchList =params => axios.get('/api/getprodlist',{params})
export const delSearchList =id => axios.get(`/api/delproduct/${id}`)
export const addSearchList =name => axios.post(`/api/addproduct`,{name})


