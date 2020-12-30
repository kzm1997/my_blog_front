<template>
    <el-card>
        <div  class="me-tag-header" v-if="author.flag">
            关于作者
        </div>
        <div  class="me-tag-header" v-else>
            关于您
        </div>
        <h1 class="person_name">{{author.nickname}}</h1>
        <div class="me-author-description">
            <span><i class="iconfont icondizhi"></i>{{author.city||'未填写城市'}}</span>
            <span><i class="iconfont iconzhiye"></i> {{author.job||'未填写工作'}}</span>
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
                qq: {title: 'QQ', message: this.author.qq},
                github: {
                    title: 'github',
                    message: '<a target="_blank" href=this.author.github>this.author.github</a>'
                },
            }
        },
        props:{
          author:Object
        },
        mounted(){
        },
        methods: {
            showTitle(){
                if (this.author.flag==undefined ){
                    return true;
                }else if (this.author.flag!=undefined && this.author.flag==false){
                     return false;
                }
            },
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
    .me-tag-header{
        text-align: left;
        font-weight: bold;
        padding-bottom: 8px;
        border-bottom: 1px solid #DCDFE6;
    }
    h1.person_name{
        font-size: 28px;
        font-weight: bold;
        line-height: 1.0;
        margin: 10px 0px 10px;
        letter-spacing: 2px;
    }
    .me-author-description{
        /*border-top: 1px solid #DCDFE6;*/
        padding-top: 12px;
        .icondizhi{
            margin-right: 5px;
            color: red;
        }
        .iconzhiye{
            margin-right: 5px;
            color: #40baff;
        }
        span:nth-of-type(1){
            margin-right: 26px;
        }
    }
    .me-author-tool {
        padding-top: 20px;
        .iconfont.iconqq {
            cursor: pointer;
            margin-right: 20px;
            font-size: 30px;
        }
        .iconfont.iconGitHub {
            cursor: pointer;
            font-size: 30px;
        }
    }

</style>