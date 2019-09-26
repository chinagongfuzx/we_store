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
