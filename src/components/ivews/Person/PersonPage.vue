<template>
    <div class="person_container">
        <div class="container_left">
            <div class="container_left_header">
                <div class="header_Avatar">
                    <el-avatar shape="circle" :size="160" :fit="size"
                               :src=user.avatar></el-avatar>
                </div>

                <div class="header_information">
                    <div class="header_information_title">
                        <h1 class="person_name">{{user.nickname}}</h1>
                        <el-button @click="toBaseEdit" type="text" class="title_button" size="medium">编辑资料</el-button>
                    </div>
                    <span><i class="iconfont icondizhi1"></i>{{user.city}}</span>
                    <span><i class="iconfont iconxuexiao"></i>{{user.school}}</span>
                    <span><i class="iconfont iconzhiye1"></i>{{user.company}}</span>
                    <span><i class="iconfont iconlianjie"></i>{{user.personLink}}</span>
                </div>
            </div>
            <div class="container_left_main">
                <div class="left_main_title">
                    <ul>
                        <li v-for="item in clickLi" :key="item.id" :class="{'active':item.active}"  @click="seeData(item.id)">
                            <a><i :class="[item.class]"></i><span>{{item.name}}</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <ul>
                <li v-for="(item,index) in personData" :key="index">
                    <my-dynamic-article v-if="item.type=='myArticle'" :articleData="item"></my-dynamic-article>
                    <my-article v-if="item.type=='article'" :articleData="item"></my-article>
                    <my-comment v-if="item.type=='comment'" :commentData="item"></my-comment>
                    <like-user v-if="item.type=='like'" :likeData="item"></like-user>
                </li>
            </ul>
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
                    {{user.motto}}
                </div>
            </div>
            <card-tag></card-tag>
        </div>
    </div>
</template>

<script>
    import cardTag from '@/components/card/CardTag';
    import myArticle from '@/components/article/MyArticle'
    import MyComment from '@/components/comment/MyComment'
    import likeUser from '@/components/card/LikeUser';
    import MyDynamicArticle from "../../article/MyDynamicArticle";
    import {getMyArticles,getDynamic,getMyArticleComment,getMyHot} from "../../../api/user";

    export default {
        name: "PersonPage",
        data() {
            return {
                size: 'container',
                personData: [],
                clickLi: [
                    {id: 0, name: '文章', class: 'iconfont iconwenzhang-copy', active: true},
                    {id: 1, name: '动态', class: 'iconfont iconxiaoxitongzhitixinglingshenglingdang ', active: false},
                    {id: 2, name: '最新评论', class: 'iconfont iconpinglun', active: false},
                    {id: 3, name: '热门', class: 'iconfont iconremen', active: false}

                ],
                actived:0
            }
        },
        components: {
            cardTag,
            myArticle,
            MyComment,
            likeUser,
            MyDynamicArticle
        },
        computed: {
            user() {
                let avatar = this.$store.getters.avatar
                let city = this.$store.getters.city
                let school = this.$store.getters.school
                let company = this.$store.getters.company
                let personLink = this.$store.getters.personLink
                let nickname = this.$store.getters.nickname
                let motto = this.$store.getters.motto
                return {
                    avatar, city, school, company, personLink, nickname, motto
                }
            }
        },
        mounted() {
            this.seeData(0, 0);
        },
        methods: {
            seeData(id) {
                this.clickLi[this.actived].active=false;
                this.clickLi[id].active=true;
                this.$forceUpdate();
                this.actived=id;
                if (id == 0) {
                    getMyArticles().then(res => {
                        if (res.data.status == 0) {
                            this.personData = res.data.data;
                        }
                    })
                } else if (id==1) {
                    getDynamic().then(res=>{
                        if (res.data.status==0){
                            this.personData = res.data.data;
                        }
                    })
                }else if (id==2){
                    getMyArticleComment().then(res=>{
                        if (res.data.status==0){
                            this.personData = res.data.data;
                        }
                    })
                }else if (id==3){
                    getMyHot().then(res=>{
                        if (res.data.status==0){
                            this.personData = res.data.data;
                        }
                    })
                }
            },
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
                    border-bottom: 1px solid #e2e2e2;

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

                    li.active {
                        color: #646464;
                        border-bottom: 2px solid #646464;
                    }

                    li:hover {
                        color: #646464;
                        border-bottom: 2px solid #646464;
                    }

                }
            }
        }

        .container_left_header {
            background-color: rgb(208, 208, 208, 0.3);
            display: flex;

            .header_Avatar {
                margin: 10px 10px;
            }

            .header_information {
                width: 440px;
                padding-left: 24px;
                justify-content: flex-start;
                text-align: left;
                padding-bottom: 14px;

                .header_information_title {
                    display: flex;
                    justify-content: space-between;
                    h1{
                        margin-bottom: 10px;
                    }
                    .title_button {
                        padding-right: 20px;
                        margin-bottom: 10px;
                        color: green;
                        font-size: 16px;
                    }
                }

                .person_name {
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
            display: flex;
            flex-direction: column;
            width: 30%;
            text-align: left;

            .right_desc {
                margin-bottom: 30px;

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

                    .desc_header_right {
                        margin-left: 8px;
                        font-size: 12px;
                        font-weight: normal;
                        line-height: 32px;
                        color: #999;

                        span {
                            margin-left: 2px;
                        }
                    }
                }

                .desc_body {
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