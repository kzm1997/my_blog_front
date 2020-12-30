<template>
    <div class="v-login">
        <div class="lowin">
            <div class="lowin-brand">
                <img src="@/components/ivews/login/img/logo2.png" alt="logo">
            </div>
            <div class="lowin-wrapper">
                <div class="lowin-box lowin-login">
                    <div class="lowin-box-inner">
                            <p>请登录</p>
                            <div class="lowin-group">
                                <label>用户名 <a href="#" class="login-back-link">Sign in?</a></label>
                                <input v-model="userForm.account"
                                       name="account"
                                       v-validate="required"
                                       tabindex="1"
                                       @blur="test"
                                       class="lowin-input"   >

                                <span
                                        :class="{ 'is-danger': errors.has('account') }"
                                        v-show="errors.has('account')">{{ errors.first('account') }}</span>
                            </div>
                            <div class="lowin-group password-group">
                                <label>密码 <a href="#" class="forgot-link"></a></label>
                                <input type="password"
                                       tabindex="2"
                                       v-model="userForm.password" class="lowin-input">
                            </div>
                            <button class="lowin-btn login-btn" @click="login">
                                登录
                            </button>
                            <div class="text-foot">
                                没有账号?
                                <router-link :to="{name:'register'}">注册</router-link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
                userForm: {
                    account: '',
                    password: '',
                }

            }
        },
        methods:{
            login(){
                this.$store.dispatch('login',this.userForm).then((data)=>{
                    if (data.data.status==0){
                        this.$router.push({path:'/'})
                    }
                    }).catch(()=>{

                });
            },
            test(){
                console.log(this.errors);
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "css/auth.css";
    .is-danger{
        display: block;
        margin-top: 10px !important;
        color: #ff5b5b;
    }
    .v-login {
        background: url("../../../assets/test3.png") no-repeat ;
        background-size: 100% 100%;
        background-position: 0 0px;
        height: 100vh;
        padding-top: 40px;

    }

    .lowin-wrapper {
        display: flex;
        .lowin-group {
            margin-bottom: 40px;
        }
    }
</style>