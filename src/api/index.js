import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
export const getUrl = params => axios.get('api/getlunbo', { params })
// 获取图片列表的分类信息
export const cateListApi = params => {
  return axios.get('/api/getimgcategory')
}
export const getPicListApi = params => {
  return axios.get(`/api/getimages/${params}`)
}
// 商品详情页
export const getPicDetailApi = params => {
  return axios.get(`/api/getimageInfo/${params}`)
}
// 缩略图
export const getPicApi = params => {
  return axios.get(`/api/getthumimages/${params}`)
}
// 获取图文资讯
export const getNewsList = params => axios.get('api/getnewslist')

export const getNewsDetailApi = params => axios.get(`/api/getnew/${params}`)
export const getCommentListApi = params => axios.get(`/api/getcomments/${params.id}?pageindex=${params.pageIndex}`)
export const publishCommentApi = params => axios.post(`/api/postcomment/${params.id}`, { content: params.content })
export const getGoodsList = page => axios.get(`/api/getgoods?pageindex=${page}`)
export const getSearchList = params => axios.get('/api/getprodlist', { params })
export const delSearchList = id => axios.get(`/api/delproduct/${id}`)
export const addSearchList = name => axios.post(`/api/addproduct`, { name })
export const cartListApi = params => axios.get(`/api/goods/getshopcarlist/${params}`)

// 获取商品列表数据
export const getGoods = (number) => {
  return axios.get(`/api/getgoods?pageindex=${number}`)
}

// 获取商品图片
export const goodsImgs = (id) => {
  return axios.get(`/api/getthumimages/${id}`)
}

// 商品详情页
export const goodsDetails = (id) => {
  return axios.get(`/api/goods/getinfo/${id}`)
}

// 图文介绍
export const imgTxtDetails = (id) => {
  return axios.get(`/api/goods/getdesc/${id}`)
}
