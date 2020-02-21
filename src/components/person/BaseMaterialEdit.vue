<template>
    <div class="base_container">
        <el-card>
            <div slot="header" class="header">
                <span>个人信息</span>
            </div>
            <el-form ref="form" :model="form" label-width="80px" :label-position="position" size="small">
                <el-form-item label="昵称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" class="sex">
                    <el-radio-group v-model="sex" class="sexgroup">
                        <el-radio :label="0">男</el-radio>
                        <el-radio :label="1">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="邮箱地址" >
                    <el-input
                            placeholder=""
                            v-model="email"
                            :disabled="true">
                    </el-input>
                </el-form-item>
                <el-form-item label="座右铭">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="个人主页">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="毕业院校">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="公司">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker
                            v-model="birthday"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "BaseMaterialEdit",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                sex:0,
                email:'1206960056@qqcom',
                birthday:'',
                position:'top'

            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped lang="scss">
    .base_container {
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
      /*  textarea{
            margin: 0px !important;
            padding: 0px !important;
            resize: none !important;
        }*/
    }
</style>