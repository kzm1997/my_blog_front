<template>
    <el-card>
        <h1>kzm</h1>
        <div class="me-author-description">
            <span><i class="iconfont icondizhi"></i> &nbsp;福建&nbsp;光泽</span>
            <span><i class="iconfont iconzhiye"></i> &nbsp;Java开发</span>
        </div>
        <div class="me-author-tool">
            <i @click="showTool(qq)" :title="qq.title" class="iconfont iconqq"></i>
            <i @click="showTool(github)" :title="github.title" class="iconfont iconGitHub"></i>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "CardMe",
        data() {
            return {
                qq: {title: 'QQ', message: '1206960056'},
                github: {
                    title: 'github',
                    message: '<a target="_blank" href="https://github.com/shimh-develop">https://github.com/shimh-develop</a>'
                }
            }
        },
        methods: {
            showTool(tool) {
                this.$message({
                    showClose: true,
                    dangerouslyUseHTMLString: true,
                    message: '<strong>' + tool.message + '</strong>'
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    h1{
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        letter-spacing: 2px;
    }
    .me-author-description{
        border-top: 1px solid #DCDFE6;
        padding-top: 12px;
        span:nth-of-type(1){
            margin-right: 26px;
        }
    }
    .me-author-tool {
        padding-top: 20px;
        .iconfont.iconqq {
            margin-right: 20px;
            font-size: 30px;
        }
        .iconfont.iconGitHub {
            font-size: 30px;
        }
    }

</style>