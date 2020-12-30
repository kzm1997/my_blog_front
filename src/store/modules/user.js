import auth from '@/utils/auth'
import {login,getUserInfo,loginout} from "@/api/user";

export default {
    state: {
        token: auth.getToken()||'',
        expireTime: '',
        user: {
            id:'',
            nickname: '',
            avater: '',
            email: '',
            sex: '',
            personLink: '',
            company: '',
            school: '',
            github: '',
            qq: '',
            city: '',
            birthday: '',
            job:''
        }
    },
    mutations: {
        setToken(state, val) {
            state.token = val
        },
        setExpireTime(state, val) {
            state.expireTime = val
        },
        setUser(state, val) {
            state.user = val
        },
        setAvatar(state,val){
            state.user.avatar=val;
        }
    },
    actions: {
        getUserInfo({commit}) {
                getUserInfo().then(data => {
                    if (data.data) {
                        commit('setUser', data.data.data)
                    }
                }).catch(error => {
                    console.log(error);
                })

        },
        login({commit},user){
            return new Promise((resolve, reject) => {
                login(user).then(data=>{
                    if (data.data){
                        if (data.data.data.token!=undefined){
                            commit('setToken',data.data.data.token);
                        }else {
                            console.log(2222);
                            commit('setToken',data.data.data.userInfoVo.token);
                        }
                        if (auth.getToken()){
                            auth.removeToken();
                        }
                        if (data.data.data.token!=undefined){
                            auth.setToken(data.data.data.token);
                        }else {
                            console.log(2222);
                            auth.setToken(data.data.data.userInfoVo.token);
                        }

                    }
                    resolve(data);
                }).catch(function (error) {
                        reject(error);
                    }
                )
            })
        },
        logout({commit}){
              return new Promise((resolve,reject)=>{
                  loginout().then((data)=>{
                      commit('setToken','');
                      auth.removeToken();
                      let  local=new Object();
                      local.id='';
                      local.nickname='';
                      local.avatar='';
                      local.email='';
                      local.sex='';
                      local.personLink='';
                      local.company='';
                      local.school='';
                      local.github='';
                      local.qq='';
                      local.city='';
                      local.birthday='';
                      local.job='';
                      commit("setUser",local);
                      resolve(data);
                  }).catch(error=>{
                      reject(error);
                  })
              })
        }

    }
}