<template>
    <el-card>
        <div slot="header" class="header">
            <h2>KBlog</h2>
            <span>Kblog是一个关于分享和探索的地方</span>
        </div>
        <div class="body">
            <el-button>现在注册</el-button>
            <span class="info">已注册用户请<a>登录</a></span>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "LoginItem"
    }
</script>

<style scoped lang="scss">
    .header {
        span {
            color: #a9b7b8;
        }
    }
    .body {
       .info{
           margin-top: 12px;
           display: block;
           font-size: 15px;
           a{
               margin-left: 5px;
               cursor: pointer;
           }
           a:hover{
               text-decoration: underline;
           }
       }
    }
</style>