<template>
    <div>


        <div class="header">

            <div class="header__left">
                <div class="logo">
                    <img src="@/assets/kblog.png">
                    <img src="@/assets/blog.png">
                </div>
                <div class="search bar7">
                    <div>
                        <input type="text" placeholder="请输入您要搜索的内容...">
                        <svg aria-hidden="true" class="search-icon">
                            <use xlink:href="#v-iconsearch"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="header__right">
                <div class="header__right_left">
                    <el-menu
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="1">文章</el-menu-item>
                        <el-menu-item index="1">阅读</el-menu-item>
                    </el-menu>
                </div>
                <div class="header__right_right">
                    <el-menu
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="1">文章</el-menu-item>
                        <el-menu-item index="1">阅读</el-menu-item>
                        <el-menu-item index="1">时光轴</el-menu-item>
                        <el-menu-item index="1">关于</el-menu-item>
                        <el-menu-item index="1">登录</el-menu-item>
                        <el-menu-item index="1">登录</el-menu-item>
                    </el-menu>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: "SimpleHeader",
        components: {}
    }
</script>

<style scoped lang="scss">

    .header {
        width: 100%;
        /*position: fixed;*/
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        height: 60px;
    }

    .header__left {
        width: 700px;
        /*flex: 1;*/
        align-items: center;
        display: flex;
        justify-content: space-between;
        background-color: rgb(84, 92, 100);
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
            width: 30px;
            height: 30px;
            position: absolute;
            top: 14px;
            right: 26px;
            cursor: pointer;
        }

    }

    .header__right {
        flex: 1;
        display: flex;
        .header__right_left {
            flex: 1;
            ul {
                padding-left: 100px;
                width: 100%;
                display: flex;
            }
        }
        .header__right_right {
            flex: 4;
            ul {
                width: 100%;
                display: flex;
                justify-content: flex-end;
            }
        }

    }

</style>