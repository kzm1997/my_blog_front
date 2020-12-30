<template>
    <div class="base_container">
        <el-card>
            <div slot="header" class="header">
                <span>个人信息</span>
            </div>
            <el-form ref="form" :model="form" label-width="80px" :label-position="position"
                     size="small"
            >
                <el-form-item label="昵称">
                    <el-input v-model="form.nickname"  name="nickname" v-validate="'nickname|required|min:4'"></el-input>
                    <span
                            :class="{ 'is-danger': errors.has('nickname') }"
                            v-show="errors.has('nickname')">{{ errors.first('nickname') }}</span>
                </el-form-item>
                <el-form-item label="性别" class="sex">
                    <el-radio-group v-model="form.sex" class="sexgroup">
                        <el-radio :label="0">男</el-radio>
                        <el-radio :label="1">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="邮箱地址">
                    <el-input
                            placeholder=""
                            v-model="form.email"
                            :disabled="true">
                    </el-input>
                </el-form-item>
                <el-form-item label="座右铭">
                    <el-input type="textarea" v-model="form.motto"></el-input>
                </el-form-item>
                <el-form-item label="个人主页">
                    <el-input v-model="form.personLink"></el-input>
                </el-form-item>
                <el-form-item label="毕业院校">
                    <el-input v-model="form.school"></el-input>
                </el-form-item>
                <el-form-item  label="职业">
                    <el-input v-model="form.job"></el-input>
                </el-form-item>
                <el-form-item label="公司">
                    <el-input v-model="form.company"></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker
                            v-model="form.birthday"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <div class="button">
                    <el-button @click="doset" type="primary">确定修改</el-button>
                </div>
            </el-form>
        </el-card>
    </div>
</template>

<script>
   import {userEdit} from '@/api/user'
    export default {
        name: "BaseMaterialEdit",
        data() {
            return {
                form: {
                    nickname: this.$store.getters.nickname,
                    sex: this.$store.getters.sex,
                    email: this.$store.getters.email,
                    motto: this.$store.getters.motto,
                    personLink: this.$store.getters.personLink,
                    school: this.$store.getters.school,
                    company: this.$store.getters.company,
                    birthday: this.$store.getters.birthday,
                    job:this.$store.getters.job
                },
                position: 'top',

            }
        },
        computed: {
            pForm() {
                return {
                    nickname: this.$store.getters.nickname,
                    sex: this.$store.getters.sex,
                    email: this.$store.getters.email,
                    motto: this.$store.getters.motto,
                    personLink: this.$store.getters.personLink,
                    school: this.$store.getters.school,
                    company: this.$store.getters.company,
                    birthday: this.$store.getters.birthday
                }
            }
        },
        watch: {
            pForm(value) {
                this.form = value
            }
        },
        methods: {
            doset() {
               userEdit(this.form).then(()=>{
                   this.$message({
                       message: '修改成功啦',
                       type: 'success',
                       showClose: true
                   })
                  this.$store.dispatch('getUserInfo');
               })
            }
        }
    }
</script>

<style scoped lang="scss">
    .base_container {
        margin-bottom: 150px;
        text-align: left;
        .el-form {
            margin-right: 360px;
            text-align: left;
            .el-form-item__content {
                text-align: center;
            }
            .sex {
                display: flex;
                .sexgroup {
                    margin-left: 90px;
                }
            }
        }
        .button{
            text-align: right;
            margin-top: 30px;
        }
        /*  textarea{
              margin: 0px !important;
              padding: 0px !important;
              resize: none !important;
          }*/
    }
</style>