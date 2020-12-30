<template>
    <div class="container">
        <div class="container_left">
            <el-avatar :size="40" :src="author.avatar"></el-avatar>
            <div class="info">
                <span class="nickname">{{author.nickname}}</span>
                <div class="info_about">
                    <span>写了{{author.totalWord | numberFormat }}个字</span>
                    <span>{{author.likeNum}}个人关注</span>
                </div>
            </div>
        </div>
        <div class="container_right">
            <span @click="getlike" @mouseleave="getunlike2" class="myLike_green" @mouseover="getUnlike" ref="mylike">{{datamessage}}</span>
        </div>
    </div>
</template>

<script>
    import {UserLike} from '@/api/user';

    export default {
        name: "RecommendItem",
        props: {
            author: Object
        },
        data() {
            return {
                datamessage: '+关注'
            }
        },
        filters: {
            numberFormat: function nFormatter(num) {
                if (num == 0) {
                    return 0
                }
                if (num >= 1000000000) {
                    return (num / 1000000000).toFixed(1).replace(/.0$/, '') + 'G';
                }
                if (num >= 1000000) {
                    return (num / 1000000).toFixed(1).replace(/.0$/, '') + 'M';
                }
                if (num >= 1000) {
                    return (num / 1000).toFixed(1).replace(/.0$/, '') + 'K';
                }
                return num;
            }
        },
        methods: {
            getUnlike() {
                if (this.datamessage == '已关注') {
                    this.datamessage = '取消关注';
                }
            },
            getunlike2() {
                if (this.datamessage == '取消关注') {
                    this.datamessage = '已关注';
                }
            },
            getlike() {
                if (this.datamessage == '已关注' || this.datamessage == '取消关注') {
                    //走取消关注的流程
                    UserLike(this.author.id, 0).then(res => {
                        if (res.data.status == 0) {
                            this.datamessage = '+关注'
                            this.$refs.mylike.classList.remove('myLike_black');
                            this.$refs.mylike.classList.add('myLike_green');
                        }
                    })
                } else if (this.datamessage == '+关注') {
                    //走关注的流程
                    UserLike(this.author.id, 1).then(res => {
                        if (res.data.status == 0) {
                            this.datamessage = '已关注'
                            this.$refs.mylike.classList.remove('myLike_green');
                            this.$refs.mylike.classList.add('myLike_black');
                        }
                    })

                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        margin-bottom: 25px;
        text-align: left;
        display: flex;
        justify-content: space-between;
        .container_left {
            display: flex;
            .info {
                display: flex;
                flex-direction: column;
                margin-left: 4px;
                .nickname {
                    margin-top: 4px;
                    font-size: 15px;
                    margin-bottom: 8px;
                }
                .info_about {
                    font-size: 13px;
                    color: #969696;
                    span {
                        margin-right: 4px;
                    }
                }
            }
        }
        .container_right {
            margin-top: 15px;
            cursor: pointer;
            .myLike_green {
                color: #67C23A;
            }
            .myLike_black {
                color: #868e99;
            }
        }
    }
</style>