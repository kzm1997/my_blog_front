<template>
    <el-card class="article-body" shadow="hover">
        <div class="article-body-header">
            <a @click="goArticleView(article.id)" class="header-title">{{article.title}}</a>
            <div class="header-about">
                <i class="iconfont iconview"></i>
                <span>{{article.readNum||0}}</span>
                <i class="iconfont iconpinglun2"></i>
                <span>{{article.commentNum||0}}</span>
            </div>

        </div>
        <p class="article-body-content">
            {{article.description}}
        </p>
        <div class="article-body-footer">
            <div class="footer_left">
                <el-avatar
                        :src=article.avatar size="medium"></el-avatar>
                <div class="span">
                    <span class="nickname">{{article.nickname}}</span>
                    <div class="tags">
                        <i class="iconfont iconguanzhu"></i>
                        <span class="me_guanzhu">1k</span>
                        <el-tag size="small"
                                v-for="item in article.categorys" :key="item.id"
                                class="me_color"
                                effect="dark" :color="rdmRgbColor(item.id)" type="success">{{item.categoryName}}
                        </el-tag>
                    </div>

                </div>
            </div>
            <span class="footer_right">
                {{article.updateTime | convertDatezhun}}
            </span>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "articleItem",
        props: {
            article: Object
        },
        data() {
            return {

            }
        },
        methods: {
            goArticleView(id){
               this.$router.push({name:'articleView',params:{id:id}})
            },
            rdmRgbColor(id) {
                //随机生成RGB颜色
                let arr = [];
                for (var i = 0; i < id; i++) {
                    // 暖色
                    arr.push(Math.floor(Math.random() * 128 + 64));
                    // 亮色
                    arr.push(Math.floor(Math.random() * 128 + 128));
                }
                let [r, g, b] = arr;
                var color = `rgb(${r},${g},${b},${0.4})`;
                // 16进制颜色
                /*    var color = `#${r.toString(16).length > 1 ? r.toString(16) : '0' + r.toString(16)}${g.toString(16).length > 1 ? g.toString(16) : '0' + g.toString(16)}${
                        b.toString(16).length > 1 ? b.toString(16) : '0' + b.toString(16)}`;*/
                return color;
            }
        }

    }
</script>

<style scoped lang="scss">
    .article-body {
        margin-bottom: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 145px;
        color: #b4b4b4;
    }

    .article-body-header {
        flex: 1;
        display: flex;
        justify-content: space-between;
        .header-title{
            cursor: pointer;
            color: rgba(61, 57, 57, 1.0);
            font-size: 18px;
            font-weight: 700;
            line-height: 1.1;
        }
        .header-title:hover {
            color: rgba(0, 0,0, 1.0);
        }
        .header-about {
            display: flex;
            span {
                display: block;
                margin-left: 8px;
            }
            .iconpinglun2{
                margin-left: 14px;
            }
        }
    }

    .article-body-content {
        font-size: 13px;
        line-height: 1.4;
        text-align: left;
        margin-top: 10px;
        padding-right: 320px;
        height: 34px;
        color: #a6a6a6;
        margin-bottom: 0;
        flex: 1;
        display: flex;
        justify-content: flex-start;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .article-body-footer {
        margin-top: 14px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        .footer_right{
            align-self:center;
        }
        .footer_left {
            display: flex;
            height: 8vh;
            .span {
                display: flex;
                flex-direction: column;
                 span.nickname {
                    text-align: left;
                    margin-left: 10px;
                    color: #b4b4b4;
                    font-weight: 400;
                     margin-bottom: 3px;
                    font-size: 12px;
                    margin-right: 10px;
                }
                .tags{
                    display: flex;
                    .iconguanzhu{
                        color: #b4b4b4;
                        margin-left: 10px;
                        align-self: center;
                    }
                    .me_guanzhu{
                        font-weight: 400;
                        color: #b4b4b4;
                        align-self: center;
                        margin-right: 15px;
                        font-size: 12px;
                    }
                    .me_color:first-of-type{
                        margin-left: 10px;
                    }
                    .me_color {
                        color: black !important;
                        margin-right: 15px;
                        align-self: flex-end;
                    }
                }

            }
        }
    }
</style>