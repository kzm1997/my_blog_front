<template>
    <div class="change_account_container">
        <el-card>
            <div slot="header" class="header">
                <span>修改密码</span>
            </div>
            <div>
                <el-form ref="password_form" :model="password_form" label-width="80px"
                         :label-position="position" size="small">
                    <el-form-item label="旧密码">
                        <el-input v-model="password_form.password_old"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input v-model="password_form.password_new"></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码">
                        <el-input v-model="password_form.password_new_confirm"></el-input>
                    </el-form-item>
                    <el-button>修改密码</el-button>
                </el-form>
            </div>
        </el-card>
        <el-card>
            <div slot="header" class="header">
                <span>修改邮箱地址</span>
            </div>
            <div>
                <el-form ref="email_form" :model="email_form_" label-width="80px"
                         :label-position="position" size="small">
                    <el-form-item label="原邮箱">
                        <el-input v-model="email_form.email_old" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="新邮箱">
                        <el-input v-model="email_form.email_new"></el-input>
                    </el-form-item>
                    <el-button>修改邮箱</el-button>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "AccountEdit",
        data() {
            return {
                position: 'top',
                password_form: {
                    password_old: '',
                    password_new: '',
                    password_new_confirm: ''
                },
                email_form: {

                    email_old: '',
                    email_new: ''
                }
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .change_account_container {
        text-align: left;
        margin-bottom: 100px;
        .el-form {
            margin-right: 360px;
        }
    }
</style>