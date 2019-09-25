import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
export const getUrl = params => axios.get('api/getlunbo', { params })

// 获取图文资讯
export const getNewsList = params => axios.get('api/getnewslist')