<template>
    <div class="v-login">
        <div class="lowin">
            <div class="lowin-brand">
                <img src="@/components/ivews/login/img/logo2.png" alt="logo">
            </div>
            <div class="lowin-wrapper">
                <div class="lowin-box lowin-login">
                    <div class="lowin-box-inner">
                        <form >
                            <p>请登录</p>
                            <div class="lowin-group">
                                <label>用户名 <a href="#" class="login-back-link">Sign in?</a></label>
                                <input v-model="userForm.account"
                                       name="account"
                                       v-validate="'required|min:3'"
                                       class="lowin-input"   >
                                <span
                                        :class="{ 'is-danger': errors.has('account') }"
                                        v-show="errors.has('account')">{{ errors.first('account') }}</span>
                            </div>
                            <div class="lowin-group password-group">
                                <label>密码 <a href="#" class="forgot-link">忘记密码?</a></label>
                                <input type="password"
                                       v-model="userForm.password" class="lowin-input">
                            </div>
                            <button class="lowin-btn login-btn">
                                登录
                            </button>
                            <div class="text-foot">
                                没有账号?
                                <router-link :to="{name:'register'}">注册</router-link>
                            </div>
                        </form>
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
        padding-top: 50px;
        padding-bottom: 100px;
    }

    .lowin-wrapper {
        display: flex;
        .lowin-group {
            margin-bottom: 40px;
        }
    }
</style>