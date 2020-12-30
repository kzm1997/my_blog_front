<template>
    <div class="extends_inform_container">
        <el-card>
            <div slot="header" class="header">
                <span>扩展资料</span>
            </div>
            <div class="extends_body">
                <div class="extends_github">
                    <i class="iconfont iconGitHub"></i>
                    <el-input v-model="user.github" size="small">
                        <template slot="prepend">https://github.com/</template>
                    </el-input>
                </div>
               <div class="extends_qq">
                   <i class="iconfont iconqq"></i>
                   <el-input v-model="user.qq" size="small"></el-input>
               </div>

<!--                <el-button>确定</el-button>-->
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "ExtendsInformation",
        data() {
            return {
                user: {
                    github: '11',
                    qq: '111'
                }
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .extends_inform_container {
        text-align: left;
        .extends_body {
            margin-right: 360px;
            .extends_github{
                display: flex;
                margin-bottom: 15px;
                .iconGitHub{
                    font-size: 28px;
                    margin-right: 10px;
                }
            }
            .extends_qq{
                display: flex;
                margin-bottom: 15px;
                .iconqq{
                    font-size: 28px;
                    margin-right: 10px;
                }
            }
        }
    }
</style>