<template>
    <div class="category_container">
        <div class="category_container_header">
            <div>
                <i class="iconfont iconfenlei"></i>
                <span>文章分类</span>
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
    </div>
</template>
<script>
    import { getCategoryDetail } from '@/api/category'
    export default {
        name: 'BlogAllCategoryTag',
        mounted(){
            this.getCategorys(-1);
        },
        data() {
            return {
                category: [],
                categoryTitle:'文章分类'
            }
        },
        computed: {

        },
        methods: {
            view(item){
                console.log(item);
                this.$router.push({name:'tag',params:{id:item.id}})
            },
            getavatarImg:function (item) {
                return item.avatar;
            },
            getCategorys(id) {
                if (id == 0) {
                    id = null;
                }
                getCategoryDetail(id,8,1).then(res => {
                    if (res.data.status == 0) {
                        this.category = res.data.data.list;
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
                    margin-bottom: 10px;
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
                            margin: 30px 0px 0px;
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
