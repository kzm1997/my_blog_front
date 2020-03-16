import axios from 'axios';
/*import {Message} from 'element-ui'
import router from "../router";*/
import auth from '@/utils/auth'
import store from '@/store'
/*
const tip = msg => {
    Message({
        type: 'warning',
        showClose: true,
        messgae: msg
    })
}
const tologin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}*/

const httpRequest = axios.create({
    baseURL: 'http://localhost:8096/kblog',
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

httpRequest.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
        if (store.status.token) {
            config.headers['Authentication'] = auth.getToken()
        }
        return config;
    } ,(error => {
        return Promise.reject(error)
    }))
export default httpRequest