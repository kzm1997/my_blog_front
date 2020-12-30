<template>
    <div class="My_comment">
        <div class="author">
            <el-avatar size="small" :src="avatar"></el-avatar>
            <span class="nickname">{{nickname}} 发表了文章</span>
            <span class="time">{{articleData.updateTime | convertDatezhun}}</span>
        </div>
        <div class="container">
            <div class="content">
                <router-link :to="{name:'articleView', params:{id:articleData.id}}" class="title">{{articleData.title}}</router-link>
                <p class="description">{{articleData.summary}}</p>
                <div class="meta">
                    <i class="iconfont iconview"></i>
                    <span>{{articleData.readNum}}</span>
                    <i class="iconfont iconpinglun2"></i>
                    <span>{{articleData.commentNum}}</span>
                    <i class="iconfont iconguanzhu1"></i>
                    <span>20</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyArticle",
        props: {
            articleData: Object
        },
        data() {
            return {}
        },
        computed: {
            nickname() {
                return this.$store.getters.nickname
            },
            avatar(){
                return this.$store.getters.avatar
            }
        }
    }
</script>

<style scoped lang="scss">
    .My_comment{
        margin-top: 15px;
        .author{
            padding-bottom: 5px;
            margin-bottom: 8px;
            display: flex;
            color: #969696;
            .nickname{
                padding-left: 8px;
                font-size: 14px;
                align-self: center;
            }
            .time{
                align-self: center;
                font-size: 14px;
                margin-left: 8px;
            }
        }
        text-align: left;
        .comment_content{
            margin: 0 0 10px;
        }
        .container{
            text-align: left;
            width: 100%;
            border-bottom: 1px solid #dfdfdf;
            padding-top: 15px;
            padding-bottom: 20px;
            .content{
                border-left: 4px solid #c1c1c1;
                padding-left: 20px;
                color: #969696;
                .title{
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 1.5;
                    cursor: pointer;
                }
                .title:hover{
                    text-decoration: underline;
                }
                .description{
                    width: 360px;
                    line-height: 1.5;
                    height: 38px;
                    font-size: 13px;
                    margin-right: 150px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .meta{
                    span{
                        margin-left: 3px;
                        font-size: 13px;
                        margin-right: 12px;
                    }

                }
            }
        }
    }
</style>