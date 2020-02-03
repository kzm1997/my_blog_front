<template>
    <div class="person_container">
        <div class="container_left">
            <div class="container_left_header">
                <div class="header_Avatar">
                    <el-avatar shape="circle" :size="160" :fit="fit"
                               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </div>

                <div class="header_information">
                    <div class="header_information_title">
                        <h1>个人用户名</h1>
                        <el-button type="text" class="title_button" size="medium">编辑资料</el-button>
                    </div>
                    <span><i class="iconfont icondizhi1"></i>填写现居城市</span>
                    <span><i class="iconfont iconxuexiao"></i>填写毕业院校</span>
                    <span><i class="iconfont iconzhiye1"></i>填写所在公司/组织</span>
                    <span><i class="iconfont iconlianjie"></i>填写个人主网站</span>
                </div>
            </div>
            <div class="container_left_main">
                <div class="left_main_title">
                    <ul>
                        <li>
                            <a> <i class="iconfont iconwenzhang-copy"></i><span>文章</span></a>
                        </li>
                        <li>
                            <i class="iconfont iconxiaoxitongzhitixinglingshenglingdang "></i><span>动态</span>
                        </li>
                        <li>
                            <i class="iconfont iconpinglun"></i><span>最新评论</span>
                        </li>
                        <li>
                            <i class="iconfont iconremen"></i><span>热门</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container_right">

        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonPage",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">

    .person_container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        margin-top: 120px;
        height: 1000px;
        .container_left {
            display: flex;
            flex-direction: column;
            .container_left_main {
                ul {
                    margin-top: 18px;
                    display: flex;
                    color: #969696;
                    border-bottom: 1px solid #f0f0f0;
                    li {
                        padding: 13px 20px;
                        cursor: pointer;

                        span {
                            font-size: 15px;
                            font-weight: 800;
                            line-height: 25px;
                            padding-left: 8px;
                        }
                    }
                    li:hover {
                        color: #646464;
                        border-bottom: 2px solid #646464;
                    }

                }
            }
        }
        .container_left_header {
            background-color: rgb(246, 246, 246);
            display: flex;
            .header_information {
                width: 440px;
                padding-left: 24px;
                justify-content: flex-start;
                text-align: left;
                padding-bottom: 8px;
                .header_information_title{
                    display: flex;
                    justify-content: space-between;
                    .title_button{
                        padding-right: 20px;
                        margin-bottom: 10px;
                        color: green;
                        font-size: 16px;
                    }
                }
                h1 {
                    font-size: 28px;
                    font-weight: 500;
                    line-height: 1.2;
                    margin-bottom: 20px;
                }
                span {
                    font-size: 14px;
                    color: #666666;
                    line-height: 18px;
                    vertical-align: middle;
                    display: block;
                    margin-top: 10px;
                    i {
                        margin-right: 10px;
                    }
                }
            }
        }

        .container_right {
            width: 100px;
            height: 1000px;
            margin-left: 50px;
            border: 1px solid red;
        }

    }
</style>