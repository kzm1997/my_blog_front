import axios from 'axios';
import {Message} from 'element-ui'
// import router from "../router";
import auth from '@/utils/auth'
import store from '@/store'

/*const tologin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}*/

let httpRequest = axios.create({
    baseURL: 'http://localhost:8098/kblog',
    timeout: 10000,
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
        if (store.getters.token) {

            config.headers['Authentication'] = auth.getToken()
        }
        return config;
    },
    (error => {
         Promise.reject(error)
    })
)

const errorHandle=(status,other)=>{
    switch (status){
        case 400:
            Message({
                type:'warning',
                message:other
            })
            break;
        case 401:
            //todo 登录
            break;
        case 500:
            Message({
                type:'warning',
                message:other
            })
             break;
        default:
            console.log(other);
    }
}
httpRequest.interceptors.response.use(
    //请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    //请求失败
    error=>{
        const { response }=error;
         if (response){
             //不是200的情况
             errorHandle(response.status,response.data.message);
             return Promise.reject(response);
         }
    }

)


export default httpRequest