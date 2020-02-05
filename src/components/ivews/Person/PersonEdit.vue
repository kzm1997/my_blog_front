<template>
    <div class="person_edit_container">
        <div class="person_edit_left">
            <el-card>
                <div slot="header" class="header">
                    <i class="iconfont iconshezhi"></i><span>设置</span>
                </div>
                <ul>
                    <li v-for="(item) in leftClicks" :key="item.id"
                        :class="{isactive:item.active}" @click="activeMenu(item.id)">{{item.name}}</li>
                </ul>

            </el-card>
        </div>
        <div class="person_edit_right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonEdit",
        data() {
            return {
                leftClicks: [
                    {id: 0, name: '基本资料', link: '/personedit/basematerialedit', active: true},
                    {id: 1, name: '修改头像', link: '/personedit/avataredit', active: false},
                    {id: 2, name: '账号设置', link: '/personedit/accountedit', active: false},
                    {id: 3, name: '扩展资料', link: '/personedit/extendsinformation', active: false}
                ]
            }
        },
        methods: {
            activeMenu(id) {
                this.$router.push(this.leftClicks[id].link)
                this.leftClicks.forEach(function (item) {
                    item.active=false;
                })
               this.leftClicks[id].active=true;
            }
        }

    }
</script>

<style scoped lang="scss">
    .person_edit_container {
        width: 1200px;
        margin: 0 auto;
        margin-top: 120px;
        display: flex;
        .person_edit_left {
            text-align: left;
            flex: 1;
            .isactive {
                background-color: #0078ff;
                color: #f0f0f0;
            }
            .header {
                display: flex;
            }
            .header i {
                font-size: 18px;
                margin-right: 4px;

            }
            .header span {
                display: inline-block;
            }
            ul li {
                color: #0D1015;
                display: block;
                padding: 7px 14px;
                border-radius: .25rem;
                cursor: pointer;
            }


        }
        .person_edit_right {
            flex: 3;
            margin-left: 20px;
        }

    }
</style>