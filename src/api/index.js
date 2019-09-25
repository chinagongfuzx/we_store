import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
<<<<<<< HEAD
export const getUrl = params => axios.get('api/getlunbo', { params })
export const getNewsDetailApi = params => axios.get(`/api/getnew/${params}`)
export const getCommentListApi = params => axios.get(`/api/getcomments/${params.id}?pageindex=${params.pageIndex}`)
export const publishCommentApi = params => axios.post(`/api/postcomment/${params.id}`, { content: params.content })
=======
export const getUrl = () => axios.get('api/getlunbo')
>>>>>>> 63cb2a52b031d9477a3cad6cdce8eeb809dd467d
