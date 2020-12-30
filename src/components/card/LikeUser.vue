<template>
    <div class="container">
        <div class="me">
            <el-avatar size="small"
                       :src="avatar"></el-avatar>
            <span class="nickname">{{nickname}} 关注了作者</span>
            <span class="time">{{likeData.updateTime | convertDatezhun}}</span>
        </div>
        <div class="author">
            <div class="info">
                <div class="info_left">
                    <el-avatar :size='60' shape='square'
                               :src="likeData.avatar"></el-avatar>
                    <div class="info_author">
                        <div class="info_nickname">{{likeData.nickname}}</div>
                        <div class="info_about">
                            <span class="totalWord">写了{{likeData.totalWord||0}}个字</span>
                            <span>被{{likeData.likeNum}}人关注</span>
                        </div>
                    </div>
                </div>
                <div class="like_button"   @mouseover="unlike" @mouseleave="melike">
                    <el-button   icon="el-icon-check" round>{{like}}</el-button>
                </div>
            </div>
            <div class="signature">
                <p>{{likeData.motto ||"作者没有签名"}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "LikeUser",
        data(){
            return{
                like:'已关注'
            }
        },
        props:{
            likeData:Object
        },
        computed:{
            nickname(){
                return this.$store.getters.nickname
            },
            avatar(){
                return this.$store.getters.avatar
            }
        },
        methods:{
            melike(){
                console.log("触发")
                this.like='已关注'
            },
            unlike(){
                console.log("触发")
              this.like='取消关注'
            }

        }
    }
</script>

<style scoped lang="scss">
    .container {
        margin-top: 15px;
        .me {
            padding-bottom: 5px;
            margin-bottom: 8px;
            display: flex;
            color: #969696;
            .nickname {
                padding-left: 8px;
                font-size: 14px;
                align-self: center;
            }
            .time {
                align-self: center;
                font-size: 14px;
                margin-left: 8px;
            }
        }
        .author {
            padding: 20px;
            background-color: hsla(0, 0%, 71%, 0.1);
            border-radius: 4px;
            text-align: left;
            .info {
                display: flex;
                justify-content: space-between;
                .info_left {
                    display: flex;
                }
                .info_author {
                    margin-left: 10px;
                    .totalWord{
                        margin-right: 8px;
                    }
                    .info_nickname {
                        margin-top: 5px;
                        align-self: center;
                        margin-bottom: 10px;
                    }
                    .info_about {
                        font-size: 14px;
                        margin-top: 20px;
                    }
                }
                .like_button {
                    align-self: center;
                }

            }
            .signature{
                margin-top: 20px;
                padding:0 30px 10px;
                border-top: 1px solid #cecece;
                p{
                    width: 360px;
                    margin-bottom: 0;
                    line-height: 1.5;
                    height: 20px;
                    color: #969696;
                    font-size: 14px;
                    margin-right: 150px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        }

    }
</style>