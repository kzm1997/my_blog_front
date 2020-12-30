<template>
    <div class="category-body">
        <div class="category-big">
            <a v-for="c in category" :key="c.id"
               :class="{'actvied': c.isactive}" @click="getIndexTags(c.id)" size="medium">{{c.categoryName}}
            </a>
        </div>
        <el-divider></el-divider>
        <div class="category-min">
            <a v-for="t in tags" :key="t.id"
               :class="{'tag_actvied': t.tagactive}"
               @click="goTags(t.id)">{{t.categoryName}}
            </a>
        </div>
    </div>
</template>

<script>
    import {getCategoryIndex, getTagsById} from "@/api/category";

    export default {
        name: "indexCategoryHot",
        data() {
            return {
                category: [],
                tags: []
            }
        },
        beforeMount() {
            //这里是首页刷新跳转
            if (this.$route.fullPath == '/') {
                this.$router.push({path: '/', query: {ct: 0, p: 1}}).catch(error => error)
            }
            this.getIndexCategory();
        },
        watch: {
            $route(to) {
                if (to.fullPath == '/?ct=0') {
                    this.getIndexTags(0);
                }
            }
        },
        methods: {
            setActvieinit() {
                this.category.forEach((item, index) => {
                    this.category[index].isactive = false;
                })
            },
            getIndexCategory() {

                //这里获取类别信息
                getCategoryIndex().then(res => {
                    this.category = res.data.data;
                    //这个方法初始化所有类别颜色false
                    this.setActvieinit();
                    //这个将指定类别的颜色改变激活
                    this.category.forEach((item, index) => {
                        if (item.id == this.$route.query.ct) {
                            this.category[index].isactive = true;
                        }
                    })
                })
                this.getTagsFresh(this.$route.query.ct);
            },
            getTagsFresh(ct = 0) {
                console.log(ct);
                getTagsById(ct).then(res => {
                    this.tags = res.data.data;
                    this.tags.forEach((item, index) => {
                        this.tags[index].tagactive = false;
                        if (this.$route.query.tag != undefined) {
                            if (this.$route.query.tag == item.id) {
                                this.$set(this.tags[index], 'tagactive', true);
                                this.$forceUpdate();
                            }
                        }
                    })
                })
            },
            getIndexTags(id) {
                //点击类别时,激活颜色
                this.category.forEach((item, index) => {
                        this.category[index].isactive = false;
                        if (item.id == id) {
                            this.category[index].isactive = true;
                        }
                    }
                )

                if (id == this.$route.query.ct) {
                    if (this.$route.query.tag != undefined) {
                        this.$router.push({
                            path: '/',
                            query: {ct: id, tag: this.$route.query.tag, p: 1}
                        }).catch(error => error)
                    } else {
                        this.$router.push({path: '/', query: {ct: id, p: 1}}).catch(error => error)
                    }
                } else {
                    this.$router.push({path: '/', query: {ct: id, p: 1}}).catch(error => error)
                }
                getTagsById(id).then(res => {
                    this.tags = res.data.data;
                    this.tags.forEach((item, index) => {
                        this.tags[index].tagactive = false;
                    })
                    if (this.$route.query.tag != undefined) {
                        this.tags.forEach((item, index) => {
                            if (item.id == this.$route.query.tag) {
                                this.$set(this.tags[index], 'tagactive', true);
                                this.$forceUpdate();
                            }
                        })
                    }
                })
            },
            goTags(id) {
                this.tags.forEach((item, index) => {
                    this.tags[index].tagactive = false;
                    if (item.id == id) {
                        this.$set(this.tags[index], 'tagactive', true);
                        this.$forceUpdate();
                    }
                })
                this.$router.push({
                    path: '/',
                    query: {ct: this.$route.query.ct, tag: id, p: 1}
                }).catch(error => error)
            }
        }
    }
</script>

<style scoped lang="scss">
    .category-big {
        display: flex;
        justify-content: flex-start;
        a {
            margin-right: 11px;
            line-height: 16px;
            color: #555;
            border-radius: 10%;
            -webkit-tap-highlight-color: transparent;
            font-size: 16px;
            cursor: pointer;
            padding: 4px 12px;
            background-color: rgb(220, 220, 220);
        }
        a:hover {
            color: #fff;
            background-color: rgb(160, 160, 160);

        }
        a.actvied {
            color: #fff;
            background-color: #334;
        }

    }

    .category-min {
        display: flex;
        justify-content: flex-start;

        a {
            margin-right: 8px;
            line-height: 12px;
            color: #5a5a5a;
            border-radius: 10%;
            -webkit-tap-highlight-color: transparent;
            font-size: 14px;
            cursor: pointer;
            padding: 4px 10px;
        }
        a:hover {
            color: #000000;
            text-decoration: underline;
        }
        .tag_actvied {
            color: #000000;
            text-decoration: underline;
        }

    }

    .el-divider {
        margin: 10px 0px 5px 0px;

    }
</style>