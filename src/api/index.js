import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
export const getUrl =params => axios.get('api/getlunbo',{params})
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