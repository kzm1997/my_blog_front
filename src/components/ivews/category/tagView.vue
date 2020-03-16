<template>
    <div class="category_container">
        <div class="category_container_header">
            <div>
                <i class="iconfont iconfenlei"></i>
                <span>{{categoryTitle}}</span>
            </div>
        </div>
        <div class="category_container_body">
            <ul>
                <li v-for="c in category" :key="c.id" @click="view(c)">
                    <div class="category_body_tag">
                        <img :src="getavatarImg(c)">
                        <h3>{{c.categoryName}}</h3>
                        <p>{{c.articles}}篇文章</p>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <el-pagination
                    layout="prev, pager, next"
                    background=true
                    page-size="8"

                    :total="50">
            </el-pagination>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'BlogAllCategoryTag',
        created() {
            this. getcategoryTitle(this.$route.params.id);
            this.getCategorys(this.$route.params.id);
        },
        data() {
            return {
                category: [],
                categoryTitle: ''
            }
        },
        computed: {},
        methods: {
            getcategoryTitle(id){
                if (id!='all') {
                    this.$http({
                        method: 'get',
                        url: '/category/getCategoryName',
                        params: {
                            id: id
                        }
                    }).then(res => {
                        if (res.data.status == 0) {
                            this.categoryTitle = res.data.data.categoryName;
                        }
                    })
                }else {
                    this.categoryTitle='全部标签';
                }
            },
            getavatarImg: function (item) {
                return 'http://localhost:8089/category' + item.avatar;
            },
            getCategorys(id) {
                if (id =='all') {
                    id = null
                }
                this.$http({
                    data: {
                        id: id,
                        pageNum: 1,
                        pageSize: 8
                    },
                    method: 'post',
                    url: '/category/detail'
                }).then(res => {
                    if (res.data.status == 0) {
                        this.category = res.data.data.list;
                    }
                }).catch(error => {
                    if (error && error.status === 1) {
                        this.$message({type: 'error', message: '标签加载失败', showClose: true})
                    }
                })
            }
        }

    }
</script>

<style scoped lang="scss">
    .category_container {
        width: 1000px;
        background-color: rgb(251, 251, 251);
        margin: 80px auto;
        display: flex;
        flex-direction: column;
        .category_container_header {
            text-align: left;
            border-bottom: 1px solid #d6d9df;
            div {
                margin-bottom: 10px;
                .iconfenlei {
                    font-size: 34px;
                    margin-bottom: 10px;
                    color: #ef9d4f;
                }
                span {
                    font-size: 20px;
                    font-weight: 800;
                    margin-left: 10px;
                }
            }
        }
        .category_container_body {
            margin-top: 20px;
            ul {
                text-align: left;

                li {
                    box-sizing: border-box;
                    width: 25%;
                    display: inline-block;
                    padding: 0.7rem;
                    margin-top: 20px;
                    cursor: pointer;
                    .category_body_tag {
                        text-align: center;
                        border: 1px solid #d8d8d8;
                        img {
                            width: 75px;
                            height: 75px;
                            margin: -30px 0 0px;
                        }
                        h3 {
                            margin: 25px 0px 0px;
                        }
                        h3:hover {
                            color: #1ed81f;
                        }
                        p {
                            margin-top: 40px;
                            font-size: 12px;
                            letter-spacing: 1px;
                        }
                    }
                }
            }
        }
    }
</style>
