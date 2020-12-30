<template>
    <div class="all">
        <div class="content">
            <div class="content_left">
                <!--类别信息-->
                <div class="content_left_category">
                    <category-item></category-item>
                </div>
                <div class="content_left_artile">
                    <article-page :articles="articles"></article-page>
                    <div class="pagination">
                        <el-pagination class="me-pagination"
                                       background
                                       @current-change="handlePageNumChange"
                                       layout="prev, pager, next"
                                       :current-page="pageNum"
                                       :page-size="pageSize"
                                       :total="total"
                        >
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="content_right">
                <div class="content_right_person">
                    <card-me :author="getAuthor" v-if="getLogin"></card-me>
                    <login-item v-else></login-item>
                </div>
                <div class="content_right_hot">
                    <card-tag></card-tag>
                </div>
                <div class="content_right_recommend">

                </div>
            </div>
            <el-backtop>
                <div class="goTop">
                    UP
                </div>
            </el-backtop>
        </div>
    </div>
</template>

<script>
    import articlePage from '@/components/ivews/article/articlePage.vue';
    import CardMe from '@/components/card/CardMe.vue';
    import CardTag from '@/components/card/CardTag.vue';
    import categoryItem from '@/components/ivews/category/categoryItem';
    import loginItem from '@/components/user/LoginItem';
    import {getArticleByCategory} from '@/api/article';


    export default {
        name: "HomeContent",
        data() {
            return {
                //默认第一页
                pageNum: 1,
                pageSize: 6,
                articles: [],
                total: 10
            }
        },
        computed: {
            getAuthor: function () {
                let author = new Object();
                author.nickname = this.$store.getters.nickname;
                author.city = this.$store.getters.city;
                author.job = this.$store.getters.job;
                author.qq = this.$store.getters.qq;
                author.github = this.$store.getters.github;
                author.flag = false;
                return author;
            },
            getLogin() {
                return this.$store.getters.nickname != ''
            }
        },
        //路由发生变化,就请求文章
        watch: {
            $route(to) {
                this.getArticle(to.params.id, to.query.p, this.pageSize);
            }
        },
        mounted() {
            this.getArticle(this.$route.params.id, this.$route.query.p, this.pageSize);
        },
        methods: {
            handlePageNumChange(value) {
                this.$router.push({
                    name: 'cArticle',
                    params: {id: this.$route.params.id},
                    query: {p: value}
                }).catch(() => {
                })
            },
            getArticle(tag, pageNum, pageSize) {
                getArticleByCategory(tag, pageNum, pageSize).then(res => {
                    this.articles = res.data.data.list;
                    this.total = res.data.data.totalCount;
                })
            }
        },

        components: {
            articlePage,
            CardMe,
            CardTag,
            loginItem,
            categoryItem
        }
    }
</script>

<style scoped lang="scss">
    .all {
        position: relative;
        padding-bottom: 200px;
        z-index: 0;
        margin-bottom: 250px;
        min-height: 120vh;
        background-color: #f1f1f1;
    }

    .content {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        padding-top: 120px;
        display: flex;

        .content_left {
            flex: 1;
            /*background-color: #6C567B;*/
            display: flex;
            flex-direction: column;

            .content_left_category {
                padding-top: 15px;
                padding: 15px 20px 5px 20px;
                width: 100%;
                height: 96px;
                margin-bottom: 10px;
                border: 1px solid #EBEEF5;
                background-color: #f9f9f9;
                box-sizing: border-box;

            }

            .content_left_artile {
                width: 100%;

                .pagination {
                    display: flex;
                    justify-content: flex-end;

                    .me-pagination {

                    }

                }
            }
        }

        .content_right {
            margin-left: 30px;
            width: 320px;
            height: 700px;
            /*border: 1px solid;*/
            .content_right_person {
                margin-bottom: 20px;
            }
        }

        .goTop {
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, .12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
        }
    }
</style>