import axios from 'axios'
// import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const isDev  = process.env.NODE_ENV === 'development';

const request = axios.create({
    baseURL: isDev ? 'https://d.beijingyundu.com' : 'https://d.beijingyundu.com'
})

request.interceptors.request.use(function (config) {
    // NProgress.start()
    // config.headers.common.token = ''
    return config
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    // NProgress.done()
    //如果是带有登录状态的，可以在这里判断token的有效性
    return response
}, function(error) {
    return Promise.reject(error)
})


export default request