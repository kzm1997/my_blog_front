<template>
    <div class="v-register">
        <div class="lowin">
            <div class="lowin-brand">
                <img src="@/components/ivews/login/img/logo2.png" alt="logo">
            </div>
            <div class="lowin-wrapper">
                <div class="lowin-box lowin-login">
                    <div class="lowin-box-inner">
                        <form>
                            <p>请注册</p>
                            <div class="lowin-group">
                                <label>用户名 </label>
                                <input type="email" autocomplete="email" name="email" class="lowin-input">
                            </div>
                            <div class="lowin-group password-group">
                                <label>密码</label>
                                <input type="password" name="password" autocomplete="current-password" class="lowin-input">
                            </div>
                            <div class="lowin-group password-group">
                                <label>邮箱</label>
                                <input type="password" name="password" autocomplete="current-password" class="lowin-input">
                            </div>
                            <button class="lowin-btn login-btn">
                                注册
                            </button>
                            <div class="text-foot">
                                已有账号? <a href="" class="register-link">登录</a>
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
        name: "Register",
        data(){

        }
    }
</script>

<style scoped lang="scss">
    @import "css/auth.css";
    .v-register{
        padding-top: 100px;
        padding-bottom: 100px;
    }
    .lowin-wrapper{
        display: flex;

    }
</style>