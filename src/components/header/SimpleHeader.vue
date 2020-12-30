<template>

    <div class="home_header">
        <div class="inner">
            <div class="header__left">
                <div class="logo">
                    <img src="@/assets/kblog.png">
                    <img src="@/assets/blog.png">
                </div>
                <template v-if="!write">
                    <div class="search bar7">
                        <div>
                            <input type="text" v-model="keyword" placeholder="请输入您要搜索的内容...">
                            <i @click="search" class="search-icon iconfont iconsousuo"></i>
                        </div>
                    </div>
                </template>
                <div class="info" v-else>写文章</div>
            </div>
            <div class="header__right">
                <div class="header__right_right">

                    <el-menu
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#fff"
                            menu-trigger="click"
                    >
                        <template v-if="!write">
                            <router-link :to="{path:'/',query:{ct:0,p:1}}">
                                <el-menu-item index="1">首页</el-menu-item>
                            </router-link>
                            <router-link :to="{name:'category'}">
                                <el-menu-item index="1">文章分类</el-menu-item>
                            </router-link>
                            <router-link :to="{path:'/tag/all',query:{p:1}}">
                                <el-menu-item index="1">标签</el-menu-item>
                            </router-link>
                            <router-link :to="{name:'write'}">
                                <el-menu-item index="1">写文章</el-menu-item>
                            </router-link>
                            <router-link v-if="login" :to="{path:'/timeline'}">
                                <el-menu-item index="1">时光轴</el-menu-item>
                            </router-link>
                            <router-link :to="{name:'login'}" v-if="!login">
                                <el-menu-item index="1">登录</el-menu-item>
                            </router-link>
                            <router-link :to="{name:'register'}" v-if="!login">
                                <el-menu-item index="1">注册</el-menu-item>
                            </router-link>
                            <el-dropdown v-if="login" class="me_drop">
                                <span class=" el-dropdown-link">
                                    <el-avatar
                                            :src=user></el-avatar>
                                 </span>
                                <el-dropdown-menu slot="dropdown">
                                    <router-link :to="{path:'/person'}">
                                        <el-dropdown-item><i class="iconfont icongeren"></i>&nbsp;我的主页
                                        </el-dropdown-item>
                                    </router-link>
                                    <router-link :to="{name:'personedit'}">
                                        <el-dropdown-item><i class="iconfont iconbianjiziliao"></i>&nbsp;编辑资料
                                        </el-dropdown-item>
                                    </router-link>
                                    <el-dropdown-item><span @click="Logout"><i class="iconfont icontuichudenglu"></i>&nbsp;退出登录</span>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </template>
                        <template v-else>
                            <slot></slot>
                        </template>
                    </el-menu>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

    import {articleSearch} from "../../api/category";

    export default {
        name: "SimpleHeader",
        props: {
            write: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                keyword: '',
                articles: []
            }
        },
        computed: {
            user() {
                return  this.$store.getters.avatar

            },
            login() {
                console.log(Boolean(this.$store.getters.avatar))
                return Boolean(this.$store.getters.avatar)
            }
        },
        methods: {
            Logout(){
                this.$store.dispatch('logout')
                this.$router.push({path: '/', query: {ct: 0, p: 1}});

            },
            search() {
                articleSearch(this.keyword).then(res => {
                    if (res.data.status == 0) {
                        this.articles = res.data.data;
                        this.$emit('search', this.articles);
                    }
                })
            }
        }

    }

</script>

<style lang="scss">

    .home_header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        z-index: 999;
        height: 60px;

        .inner {
            width: 100%;
            display: flex;
        }
    }

    .me_drop {
        cursor: pointer;
    }

    .header__left {
        width: 700px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        background-color: rgb(84, 92, 100);

        .info {
            line-height: 60px;
            font-size: 18px;
            font-weight: 600;
            margin-right: 200px;
        }

        .logo {
            display: flex;
            flex: 1;
        }

        .logo img:nth-last-of-type(1) {
            height: 60px;

        }

        .logo img:nth-last-of-type(2) {
            height: 60px;
        }

        .bar7.search {
            margin-left: 160px;
            flex: 5;
            outline: none;
            display: flex;
        }

        .bar7.search div {
            position: relative;
            width: 300px;
            margin: 0 auto;
        }

        input {
            border: none;
            outline: none;
            width: 100%;
            height: 32px;
            margin: 12px;
            padding-left: 13px;
            padding-right: 46px;
        }

        .bar7 input {
            width: 250px;
            border-radius: 42px;
            border: 2px solid #324B4E;
            background: #F9F0DA;
            transition: .3s linear;
            float: right;
        }

        .bar7 input:focus {
            width: 300px;
        }

        .search-icon {
            font-size: 19px;
            position: absolute;
            top: 20px;
            right: 30px;
            cursor: pointer;
        }

    }

    .header__right {
        flex: 1;
        display: flex;

        .header__right_right {
            flex: 4;

            ul {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                height: 60px;
            }

            .el-dropdown {
                margin-top: 8px;
                margin-bottom: 11px;
                margin-left: 20px;
                margin-right: 20px;
            }
        }

    }

    .el-submenu__icon-arrow.el-icon-arrow-down::before {
        display: none !important;
    }

</style>