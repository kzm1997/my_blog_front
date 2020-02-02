<template>
    <!--在外层循环-->

    <el-card class="article-body" shadow="hover">
        <div class="article-body-header">
            <a href="#" class="header-title">文章名</a>
            <!--后期改成link-->
            <div class="header-about">
                <span>浏览量</span>
                <span>评论数</span>
            </div>

        </div>
        <div class="article-body-content">
            插值文章概要
        </div>
        <div class="article-body-footer">
            <div class="footer_left">
                <span>作者</span>
                <el-tag size="small" effect="dark" type="success">java111</el-tag>
            </div>
            <span class="footer_right">
                时间
            </span>
        </div>
    </el-card>
    <!--<el-divider></el-divider>-->
</template>

<script>
    export default {
        name: "articleItem",
        data(){
            return{

            }
        },
        props:['item']
    }
</script>

<style scoped lang="scss">
    .article-body {
        margin-bottom: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 125px;
        /*background-color: #e9e5ff;*/
    }

    .article-body-header {
        flex: 1;
        display: flex;
        justify-content: space-between;
        .header-title:hover {
            color: #71c9ce;

        }
        .header-about{
            display: flex;
            span{
                display: block;
            }
            span:nth-of-type(2){
                margin-left: 30px;
            }
        }
    }
    .article-body-content{
        margin-top: 20px;
        flex: 1;
        display: flex;
        justify-content: flex-start;
    }
    .article-body-footer{
        margin-top: 20px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        .footer_left span{
           margin-right: 40px;
        }

    }
</style>