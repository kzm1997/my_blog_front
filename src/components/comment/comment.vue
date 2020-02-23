
<template>
    <div class="container">

        <div class="postComment">
            <div class="postComment_main">
            <div class="my_avater">
            <el-avatar  size="large" fit="contain" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div class="postComment_right">
                <textarea placeholder="写下你的评论..."></textarea>
                <div class="postComment_right_footer">
                    <el-button round size="small">取消</el-button>
                    <el-button round  :disabled=disable  type="success" size="small">发布</el-button>
                </div>
            </div>
            </div>
            <div class="postComment_all">
                <span>全部评论</span>
                <span>2</span>
            </div>
        </div>
        <div class="comment" v-for="(item,index) in comments" v-bind:key="index">
            <div class="info">
                <img class="avatar" :src="item.fromAvatar" width="36" height="36"/>
                <div class="right">
                    <div class="name">{{item.fromName}}</div>
                    <div class="date">{{item.date}}</div>
                </div>
            </div>
            <div class="content">{{item.content}}</div>
            <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <i class="iconfont icon-like"></i>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
                <span class="comment-reply" @click="showCommentInput(item)">
          <i class="iconfont icon-comment"></i>
          <span>回复</span>
        </span>
            </div>
            <div class="reply">
                <div class="item" v-for="(reply,index) in item.reply" :key="index">
                    <div class="reply-content">
                        <span class="from-name">{{reply.fromName}}</span><span>: </span>
                        <span class="to-name">@{{reply.toName}}</span>
                        <span>{{reply.content}}</span>
                    </div>
                    <div class="reply-bottom">
                        <span>{{reply.date}}</span>
                        <span class="reply-text" @click="showCommentInput(item, reply)">
              <i class="iconfont icon-comment"></i>
              <span>回复</span>
            </span>
                    </div>
                </div>
                <div class="write-reply" v-if="item.reply.length > 0" @click="showCommentInput(item)">
                    <i class="el-icon-edit"></i>
                    <span class="add-comment">添加新评论</span>
                </div>
                <transition name="fade">
                    <div class="input-wrapper" v-if="showItemId === item.id">
                        <el-input class="gray-bg-input"
                                  v-model="inputComment"
                                  type="textarea"
                                  :rows="3"
                                  autofocus
                                  placeholder="写下你的评论">
                        </el-input>
                        <div class="btn-control">
                            <span class="cancel" @click="cancel">取消</span>
                            <el-button class="btn" type="success" round @click="commitComment">确定</el-button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        props: {
            comments: {
                type: Array,
                required: true,
            }
        },
        components: {},
        data() {
            return {
                inputComment: '',
                showItemId: '',
                disable:true
            }
        },
        computed: {},
        methods: {
            /**
             * 点赞
             */
            likeClick(item) {
                if (item.isLike === null) {
                    Vue.$set(item, "isLike", true);
                    item.likeNum++
                } else {
                    if (item.isLike) {
                        item.likeNum--
                    } else {
                        item.likeNum++
                    }
                    item.isLike = !item.isLike;
                }
            },

            /**
             * 点击取消按钮
             */
            cancel() {
                this.showItemId = ''
            },

            /**
             * 提交评论
             */
            commitComment() {
                console.log(this.inputComment);
            },

            /**
             * 点击评论按钮显示输入框
             * item: 当前大评论
             * reply: 当前回复的评论
             */
            showCommentInput(item, reply) {
                if (reply) {
                    this.inputComment = "@" + reply.fromName + " "
                } else {
                    this.inputComment = ''
                }
                this.showItemId = item.id
            }
        },
        created() {
            console.log(this.comments)
        }
    }
</script>

<style scoped lang="scss">

    @import "../../assets/css/comment";



    .container {
        padding: 0 10px;
        box-sizing: border-box;

        .postComment{
            display: flex;
            flex-direction: column;
            .postComment_main {
                display: flex;
                width: 100%;
                .my_avater {
                    flex: 1;
                }
                .postComment_right {
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;
                    flex: 19;
                    textarea {
                        width: 100%;
                        height: 80px;
                        padding: 12px 6px;
                        font-size: 14px;
                        border: 1px solid #eee;
                        border-radius: 4px;
                        background-color: #f0f0f0;
                        resize: none;
                        vertical-align: top;
                        outline-style: none;

                    }
                    .postComment_right_footer {
                        margin-top: 8px;
                        display: flex;
                        flex-direction: row-reverse;
                        button {
                            margin-left: 8px;
                        }
                    }
                }
            }
            .postComment_all{
               border-left: 4px solid #ec7259;
                margin-bottom: 16px;
                padding-left: 16px;
                font-size: 20px;
                font-weight: 500;
                height: 25px;
                margin-top: 25px;
                margin-left: 7px;
                line-height: 25px;
                span:nth-of-type(2){
                    margin-left: 10px;
                    font-size: 18px;
                }
            }
        }
        .comment {
            display: flex;
            flex-direction: column;
            padding: 10px;
            border-bottom: 1px solid $border-fourth;
            .info {
                display: flex;
                align-items: center;
                .avatar {
                    border-radius: 50%;
                }
                .right {
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;
                    .name {
                        font-size: 16px;
                        color: $text-main;
                        margin-bottom: 5px;
                        font-weight: 500;
                    }
                    .date {
                        font-size: 12px;
                        color: $text-minor;
                    }
                }
            }
            .content {
                font-size: 16px;
                color: $text-main;
                line-height: 20px;
                padding: 10px 0;
            }
            .control {
                display: flex;
                align-items: center;
                font-size: 14px;
                color: $text-minor;
                .like {
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    cursor: pointer;
                    &.active, &:hover {
                        color: $color-main;
                    }
                    .iconfont {
                        font-size: 14px;
                        margin-right: 5px;
                    }
                }
                .comment-reply {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    &:hover {
                        color: $text-333;
                    }
                    .iconfont {
                        font-size: 16px;
                        margin-right: 5px;
                    }
                }

            }
            .reply {
                margin: 10px 0;
                border-left: 2px solid $border-first;
                .item {
                    margin: 0 10px;
                    padding: 10px 0;
                    border-bottom: 1px dashed $border-third;
                    .reply-content {
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        color: $text-main;
                        .from-name {
                            color: $color-main;
                        }
                        .to-name {
                            color: $color-main;
                            margin-left: 5px;
                            margin-right: 5px;
                        }
                    }
                    .reply-bottom {
                        display: flex;
                        align-items: center;
                        margin-top: 6px;
                        font-size: 12px;
                        color: $text-minor;
                        .reply-text {
                            display: flex;
                            align-items: center;
                            margin-left: 10px;
                            cursor: pointer;
                            &:hover {
                                color: $text-333;
                            }
                            .icon-comment {
                                margin-right: 5px;
                            }
                        }
                    }
                }
                .write-reply {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: $text-minor;
                    padding: 10px;
                    cursor: pointer;
                    &:hover {
                        color: $text-main;
                    }
                    .el-icon-edit {
                        margin-right: 5px;
                    }
                }
                .fade-enter-active, fade-leave-active {
                    transition: opacity 0.5s;
                }
                .fade-enter, .fade-leave-to {
                    opacity: 0;
                }
                .input-wrapper {
                    padding: 10px;
                    .gray-bg-input, .el-input__inner {
                        /*background-color: #67C23A;*/
                    }
                    .btn-control {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        padding-top: 10px;
                        .cancel {
                            font-size: 16px;
                            color: $text-normal;
                            margin-right: 20px;
                            cursor: pointer;
                            &:hover {
                                color: $text-333;
                            }
                        }
                        .confirm {
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    }
</style>
