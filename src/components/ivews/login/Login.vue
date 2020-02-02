<template>
    <div class="v-login">
        <div class="lowin">
            <div class="lowin-brand">
                <img src="@/components/ivews/login/img/logo2.png" alt="logo">
            </div>
            <div class="lowin-wrapper">
                <div class="lowin-box lowin-login">
                    <div class="lowin-box-inner">
                        <form>
                            <p>请登录</p>
                            <div class="lowin-group">
                                <label>用户名 <a href="#" class="login-back-link">Sign in?</a></label>
                                <input type="email" autocomplete="email" name="email" class="lowin-input">
                            </div>
                            <div class="lowin-group password-group">
                                <label>密码 <a href="#" class="forgot-link">忘记密码?</a></label>
                                <input type="password" name="password" autocomplete="current-password" class="lowin-input">
                            </div>
                            <button class="lowin-btn login-btn">
                                登录
                            </button>
                            <div class="text-foot">
                                没有账号? <a href="" class="register-link">注册</a>
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
        name: "Login"
    }
</script>

<style scoped>
   @import "css/auth.css";
   .v-login{
       padding-top: 100px;
       padding-bottom: 100px;
   }
    .lowin-wrapper{
        display: flex;

    }
</style>