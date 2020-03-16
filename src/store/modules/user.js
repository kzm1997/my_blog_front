import auth from '@/utils/auth'

export default {
    status: {
        token: auth.getToken(),
        expireTime: '',
        user: {
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
            birthday: ''
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
        }
    },
    actions: {
        getUserInfo({commit}) {
                this.$http({
                    method:'get',
                    url:'/user/getUser'
                }).then(data => {
                    if (data.data) {
                        commit('setUser', data.data.user)
                    }
                }).catch(error => {
                    console.log(error);
                })

        },
        login({commit},user){
            let that=this;
                that.$http({
                    method:'post',
                    data:{
                        username:user.username,
                        password:user.password
                    },
                    url:'/userLogin/login'
                }).then(data=>{
                    if (data.data){
                        commit('setToken',data.data.token);

                    }
                }).catch(error=>{
                    console.log(error);
                })
        }
    }
}