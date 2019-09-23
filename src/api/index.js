import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
export const getUrl = params => axios.get('api/getlunbo', { params })
export const getNewsDetails = params => axios.get(`/api/getnew/${params}`)
