<template>
    <footer class="footer">
        <div class="content">
            <el-avatar class="avatar" shape="circle" :size="100" fit="fit" src="http://localhost:8089/category/author.png"></el-avatar>
            <span class="info">KBlog. Let's talk.</span>
            <div class="me-author-tool">
                <i @click="showTool(qq)" :title="qq.title" class="iconfont iconqq"></i>
                <i @click="showTool(github)" :title="github.title" class="iconfont iconGitHub"></i>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                qq: {title: 'QQ', message: '1206960056'},
                github: {
                    title: 'github',
                    message: '<a target="_blank" href="https://github.com/shimh-develop">https://github.com/shimh-develop</a>'
                }
            }
        },
        methods:{
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
    .footer{
        position: fixed;
        bottom: 0;
        height: 250px;
        left: 0px;
        right: 0px;
        z-index: -1;
        background-color: #6c737e;
        .avatar{
            margin-top: 30px;

        }
        span.info{
            margin-top: 10px;
            display: block;
            color: #f0f0f0;
            letter-spacing: 0.5px;
            font-size: 32px;
            line-height: 35px;
            font-weight: 400;
        }

        .me-author-tool {
            padding-top: 20px;
            .iconfont.iconqq {
                margin-right: 20px;
                color: #f0f0f0;
                font-size: 28px;
            }
            .iconfont.iconqq:hover{
                color: black;
            }
            .iconfont.iconGitHub {
                color: #f0f0f0;
                font-size: 28px;
            }
            .iconfont.iconGitHub:hover{
                color: black;
            }
        }
    }
</style>