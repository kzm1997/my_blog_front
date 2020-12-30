<template>
    <el-card>
        <div class="article_main">
            <div class="article_main_header">
                <div class="header_count">
                    <el-avatar
                            :src=author.avatar></el-avatar>
                    <strong>{{author.nickname}}</strong>
                    <div @click="doLike" class="like" v-if="!getUser">
                        <el-tooltip :content="message" placement="bottom" effect="light">
                            <i :class="{iconfont:true ,iconicon_follow:!author.like,iconicon_unfollow:author.like}" ref="icon"></i>
                        </el-tooltip>
                    </div>
                </div>
                <div class="header_title">
                    <h1>{{article.title}}</h1>
                </div>
                <div class="header_label">
                    <div>
                        <el-tag type="info" v-for="item in article.tags" :key="item.id" size="small">
                            {{item.categoryName}}
                        </el-tag>
                        <span class="label_time">{{article.updateTime | convertDatezhun }}</span>
                        <span class="label_read">阅读:{{article.readNum||0}}</span>
                    </div>
                    <router-link :to="{name:'write',query:{id:id}}" class="change" v-if="getUser">修改文章</router-link>
                </div>
            </div>
            <div class="article_main_body markdown-body js-toc-content" v-html="content">
            </div>

        </div>
    </el-card>
</template>

<script>
    import marked from 'marked';
    import 'github-markdown-css/github-markdown.css';
    import {getArticle} from "@/api/article";
    import tocbot from 'tocbot';
    import {UserLike} from '@/api/user';

    export default {
        name: "articleContent",
        data() {
            return {
                content: {},
                article: Object,
                author: Object,
                flag: false,
                message: '点击关注',
                id: ''
            }
        },
        beforeMount() {
            this.getArticleandUser(this.$route.params.id).then(function (value) {
                console.log(value);
                tocbot.init({
                    // Where to render the table of contents.
                    tocSelector: '.toc',
                    // Where to grab the headings to build the table of contents.
                    contentSelector: '.js-toc-content',
                    // Which headings to grab inside of the contentSelector element.
                    headingSelector: 'h1, h2, h3, h4, h5',
                    // For headings inside relative or absolute positioned containers within content.
                    hasInnerContainers: true,
                    scrollSmooth: true,
                    scrollSmoothOffset: -80,
                    headingsOffset: 200
                });
            });
            this.id = this.$route.params.id;
        },
        computed: {
            get: function () {
                tocbot.init({
                    // Where to render the table of contents.
                    tocSelector: '.toc',
                    // Where to grab the headings to build the table of contents.
                    contentSelector: '.js-toc-content',
                    // Which headings to grab inside of the contentSelector element.
                    headingSelector: 'h1, h2, h3, h4, h5',
                    // For headings inside relative or absolute positioned containers within content.
                    hasInnerContainers: true,
                    scrollSmooth: true,
                    scrollSmoothOffset: -80,
                    headingsOffset: 200
                });
                return this.flag;
            },
            getUser(){
                if (this.author.id==this.$store.getters.id){
                    return true;
                }else {
                    return false;
                }
            }

        },
        methods: {
            doLike() {
                if (this.message == '点击关注') {
                    UserLike(this.author.id, 1).then(res => {
                        if (res.data.status == 0) {
                            this.$refs.icon.classList.remove("iconicon_follow");
                            this.$refs.icon.classList.add("iconicon_unfollow");
                            this.message = '取消关注';
                        }
                    })
                } else {
                    UserLike(this.author.id, 0).then(res => {
                        if (res.data.status == 0) {
                            console.log(this.$refs.icon);
                            this.$refs.icon.classList.remove("iconicon_unfollow");
                            this.$refs.icon.classList.add("iconicon_follow");
                            this.message = '点击关注';
                        }
                    })
                }
            },

            async getArticleandUser(id) {
                const res = await getArticle(id);
                this.article = res.data.data;
                const author = this.article.authorVo;
                this.author = author;
                this.content = marked(this.article.content);
                //把值传给父组件
                this.author.flag = true;
                this.$emit('parent', author);
                this.flag = true;
            }
        }

    }
</script>

<style scoped lang="scss">
    .article_main {
        display: flex;
        flex-direction: column;
        .article_main_header {
            display: flex;
            flex-direction: column;
            .header_count {
                display: flex;
                justify-content: left;
                strong {
                    align-self: center;
                    margin-top: 2px;
                    margin-left: 8px;
                    color: #BF7158;
                    font-size: 18px;
                }
                .like {
                    display: flex;
                    flex-direction: column;
                    .iconicon_follow {
                        cursor: pointer;
                        margin-top: 14px;
                        margin-left: 10px;
                        color: green;
                    }
                    .iconicon_unfollow {
                        cursor: pointer;
                        margin-left: 10px;
                        margin-top: 14px;
                        color: #ff0006;
                    }
                }

            }
            .header_title {
                text-align: left;
                line-height: 1.2;
            }
            .header_label {
                display: flex;
                justify-content: space-between;
                .change {

                    font-size: 13px;
                    align-self: center;
                    color: #88909c;
                    cursor: pointer;
                }
                .change:hover {
                    color: #2a2a2a;
                }
                span {
                    margin-right: 10px;
                }
                .label_time {
                    font-size: 14px;
                    margin-top: 5px;
                    margin-left: 6px;
                }
                .label_read {
                    font-size: 14px;
                    margin-top: 5px;
                }
            }
        }
        .article_main_body {
            text-align: left;
            box-sizing: border-box;
            min-width: 200px;
            max-width: 980px;
            margin: 0 auto;
            padding: 45px;
        }
    }
</style>