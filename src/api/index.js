import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
export const getUrl = () => axios.get('api/getlunbo')
export const getNewsDetailApi = params => axios.get(`/api/getnew/${params}`)
export const getCommentListApi = params => axios.get(`/api/getcomments/${params.id}?pageindex=${params.pageIndex}`)
export const publishCommentApi = params => axios.post(`/api/postcomment/${params.id}`, { content: params.content })
