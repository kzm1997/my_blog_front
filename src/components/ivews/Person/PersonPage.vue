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
                        <el-button @click="toBaseEdit" type="text" class="title_button" size="medium">编辑资料</el-button>
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
            <div class="right_desc">
                <div class="desc_header">
                       <span class="desc_header_span">
                           <span class="desc_span_red dot"></span>
                           <span class="desc_span_yellow dot"></span>
                           <span class="desc_span_green dot"></span>
                       </span>
                    <div class="desc_header_right">
                        <i class="iconfont iconweibiaoti520"></i>
                        <span>编辑</span>
                    </div>
                </div>
                <div class="desc_body">
                    此人很懒,暂时没有个人简介
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonPage",
        data() {
            return {}
        },
        methods: {
            toBaseEdit() {
                this.$router.push('/personedit/basematerialedit');
            }
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
                .header_information_title {
                    display: flex;
                    justify-content: space-between;
                    .title_button {
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
            display: flex;
            flex-direction: column;
            width: 30%;
            text-align: left;
            .right_desc {

                .desc_header {
                    padding: 0 12px;
                    height: 32px;
                    background-color: #E3E3E3;
                    border-top-left-radius: 3px;
                    border-top-right-radius: 3px;
                    display: flex;
                    justify-content: space-between;
                    .desc_header_span {
                        line-height: 32px;
                        .dot {
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            margin-right: 8px;
                        }
                        .desc_span_red {
                            background-color: #FF5F57;
                        }
                        .desc_span_yellow {
                            background-color: #FFBD2E;
                        }
                        .desc_span_green {
                            background-color: #28CA42;
                        }
                    }
                    .desc_header_right{
                        margin-left: 8px;
                        font-size: 12px;
                        font-weight: normal;
                        line-height: 32px;
                        color: #999;
                        span{
                            margin-left: 2px;
                        }
                    }
                }

                .desc_body{
                    height: 140px;
                    background-color: #EEEEEE;
                    width: 100%;
                    font-size: 13px;
                    color: #666666;
                    overflow: auto;
                    padding: 20px 16px;
                    box-sizing: border-box;
                    text-indent: 2em;
                    font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Courier New", monospace;
                }
            }
        }

    }
</style>