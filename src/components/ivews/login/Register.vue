<template>
    <div class="v-register">
        <div class="lowin">
            <div class="lowin-brand">
                <img src="@/components/ivews/login/img/logo2.png" alt="logo">
            </div>
            <div class="lowin-wrapper">
                <div class="lowin-box lowin-login">
                    <div class="lowin-box-inner">
                            <p>请注册</p>
                            <div class="lowin-group">
                                <label>用户名 </label>
                                <input type="text" v-model="form.account" name="email" class="lowin-input">
                            </div>
                            <div class="lowin-group password-group">
                                <label>密码</label>
                                <input type="password" v-model="form.password" name="password" autocomplete="current-password" class="lowin-input">
                            </div>
                            <div class="lowin-group password-group">
                                <label>邮箱</label>
                                <input  name="email" v-model="form.email" class="lowin-input">
                            </div>
                            <button class="lowin-btn login-btn" @click="register">
                                注册
                            </button>
                            <div class="text-foot">
                                已有账号?  <router-link :to="{name:'login'}">登录</router-link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {register} from "../../../api/user";

    export default {
        name: "Register",
        data(){
            return{
               form:{
                   account:'',
                   password:'',
                   email:''
               }
            }
        },
        methods:{
            register(){
               register(this.form).then(res=>{
                   if (res.status==200){
                       console.log(2343);
                       this.$message({
                           type:'success',
                           message:'注册成功'
                       })
                   }
               })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "css/auth.css";
    .v-register{
        background: url("../../../assets/test3.png") no-repeat ;
        background-size: 100% 100%;
        background-position: 0 0px;
        height: 100vh;
        padding-top: 40px;
    }
    .lowin-wrapper{
        display: flex;
        .lowin-group{
             margin-bottom: 40px;
        }

    }
</style>