<template>
    <div class="container">

        <div class="postComment">
            <div class="postComment_main">
                <div class="my_avater">
                    <el-avatar size="large" fit="contain"
                               :src="getAvatar"></el-avatar>
                </div>
                <div class="postComment_right">
                    <textarea placeholder="写下你的评论..." v-model="ParentComment"></textarea>
                    <div class="postComment_right_footer">
                        <el-button round size="small">取消</el-button>
                        <el-button round :disabled='getParentComment' @click="postParentComment" type="success"
                                   size="small">发布
                        </el-button>
                    </div>
                </div>
            </div>
            <div class="postComment_all">
                <span>全部评论</span>
                <span>{{count}}</span>
            </div>
        </div>
        <div class="comment" v-for="(item,index) in comments" v-bind:key="index">
            <div class="info">
                <img class="avatar" :src="item.fromAvatar" width="36" height="36"/>
                <div class="right">
                    <div class="name">{{item.fromName}}</div>
                    <div class="date">{{item.date | convertDatezhun }}</div>
                </div>
            </div>
            <div class="content" @mouseenter="deleteMouseover(item)" @mouseleave="unDelete(item)">
                <span>{{item.content}}</span>
                <el-popconfirm
                        @onConfirm="deleteComment(item.id)"
                        title="确定删除评论？">
                    <span :class="{delete:true, hide:item.flag}" slot="reference">删除</span>
                </el-popconfirm>
            </div>
            <div class="control">
        <span class="like" :class="{active: item.like}" @click="likeClick(item)">
          <i :class="{'iconfont':true, 'icondianzan':true}"></i>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}} </span>
        </span>
                <span class="comment-reply" @click="showCommentInput(item)">
          <i class="iconfont icon-comment"></i>
          <span>回复</span>
        </span>
            </div>
            <div class="reply">
                <div class="item" v-for="(reply,index) in item.reply" :key="index" @mouseenter="deleteMouseover(reply)"
                     @mouseleave="unDelete(reply)">
                    <div class="item_left">
                        <div class="reply-content">
                            <img class="avatar" :src="reply.fromAvatar" width="28" height="28"/>
                            <span class="from-name">{{reply.fromName}}</span><span>: </span>
                            <span class="to-name">@{{reply.toName}}</span>
                            <span>{{reply.content}}</span>
                        </div>
                        <div class="reply-bottom">
                            <span>{{reply.date | convertDatezhun }}</span>
                            <span class="reply-text" @click="showCommentInput(item, reply)">
              <i class="iconfont icon-comment"></i>
              <span>回复</span>
            </span>
                        </div>
                    </div>
                    <div class="item_right">
                        <el-popconfirm @onConfirm="deleteComment(reply.id)"
                                       title="确定删除评论？">
                            <span :class="{delete:true, hide:reply.flag}" slot="reference">删除</span>
                        </el-popconfirm>
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
                                  resize="none"
                                  placeholder="写下你的评论">
                        </el-input>
                        <div class="btn-control">
                            <span class="cancel" @click="cancel">取消</span>
                            <el-button :disabled="getAllComments" class="btn" type="success" round
                                       @click="commitComment(item)">确定
                            </el-button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="block">
            <el-pagination
                    layout="prev, pager, next"
                    :hide-on-single-page=true
                    :page-size="query.pageSize"
                    :current-page="query.pageNum"
                    @current-change="handlePage"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {getAllComments, postSonComments, postComment, getCount, doLike, deleteComment} from '@/api/comment';

    export default {
        components: {},
        data() {
            return {
                comments: [],
                inputComment: '',
                showItemId: '',
                ParentComment: '',
                count: '',
                total: 0,
                query: {
                    id: 0,
                    pageNum: 1,
                    pageSize: 6
                }
            }
        },
        created() {
            this.getComment(this.$route.params.id);
            this.getCommentCount(this.$route.params.id);
        },
        computed: {
            getAllComments() {
                return this.inputComment == '';
            },
            getAvatar() {
                return this.$store.getters.avatar;
            },
            getParentComment() {
                return this.ParentComment == '';
            },
        },
        methods: {
            handlePage(val) {
                this.query.pageNum = val;
                this.getComment(this.$route.params.id);
            },
            deleteComment(id) {
                deleteComment(id).then(res => {
                    if (res.data.status == 0) {
                        this.comments.forEach((item, index) => {
                            if (item.id == id) {
                                this.comments.splice(index, 1);
                            } else if (item.id != id && item.reply && item.reply.length > 0) {
                                item.reply.forEach((it, ind) => {
                                    if (it.id == id) {
                                        this.comments[index].reply.splice(ind, 1);
                                    }
                                })
                            }
                        })
                        this.$message({
                            message: '评论删除成功啦',
                            type: 'success',
                            showClose: true
                        })
                        this.count = this.count - 1;
                    }
                })
            },
            unDelete(item) {
                item.flag = true;
                this.$forceUpdate();
            },
            deleteMouseover(item) {
                if (item.fromId == this.$store.getters.id) {
                    item.flag = false;
                    this.$forceUpdate();
                } else {
                    item.flag = true;
                    this.$forceUpdate();
                }
            },
            getComment(id) {
                this.query.id = id;
                getAllComments(this.query).then(res => {
                    let data = res.data;
                    this.comments = data.data.list;
                    this.total = data.data.totalCount;
                    this.comments.forEach(item => {
                        item.flag = true;
                        if (item.reply.length != 0) {
                            item.reply.forEach(i => {
                                i.flag = true
                            })
                        }
                    })
                })
                this.$forceUpdate();
            },
            async getCommentCount(id) {
                const count = await getCount(id);
                const Mycount = this.$_.get(count, 'data.data')
                this.count = Mycount
            },
            postParentComment() {
                const data = {
                    id: this.$route.params.id,
                    content: this.ParentComment
                }
                postComment(data).then(res => {
                    if (res.data.status == 0) {
                        this.comments.unshift(res.data.data);
                    }
                })
                this.count = this.count + 1;
                this.ParentComment = '';
            },
            /**
             * 点赞
             */
            likeClick(item) {
                if (item.like === null) {
                    this.$set(item, "Like", true);
                    doLike({commentId: item.id, type: 1})
                    item.likeNum++
                } else {
                    if (item.like) {
                        doLike({commentId: item.id, type: 0})
                        item.likeNum--
                    } else {
                        doLike({commentId: item.id, type: 1})
                        item.likeNum++
                    }
                    item.like = !item.like;
                    this.$forceUpdate();
                }
            },

            /**
             * 点击取消按钮
             */
            cancel() {
                this.showItemId = ''
            },

            /**
             * 提交子评论
             */
            async commitComment(item) {
                const data = {
                    id: this.$route.params.id,
                    toId: item.fromId,
                    content: this.inputComment,
                    parentId: item.id,
                };
                postSonComments(data).then(res => {
                    if (res.data.status == 0) {
                        this.comments.forEach((item, index) => {
                             if (item.id==data.parentId){
                                 this.comments[index].reply.push(res.data.data);
                                 this.count=this.count+1;
                             }
                        })
                    }
                });
                this.showItemId = ''

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
        }

    }
</script>

<style scoped lang="scss">

    @import "../../assets/css/comment";

    .container {
        padding: 0 10px;
        box-sizing: border-box;

        .postComment {
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

            .postComment_all {
                border-left: 4px solid #ec7259;
                margin-bottom: 16px;
                padding-left: 16px;
                font-size: 20px;
                font-weight: 500;
                height: 25px;
                margin-top: 25px;
                margin-left: 7px;
                line-height: 25px;

                span:nth-of-type(2) {
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
                display: flex;
                justify-content: space-between;
                color: $text-main;
                line-height: 20px;
                padding: 10px 0;

                span.delete {
                    outline: none;
                    color: #b4bccc;
                    cursor: pointer;
                }

                span.hide {
                    visibility: hidden;
                }

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
                    display: flex;
                    margin: 0 10px;
                    justify-content: space-between;
                    padding: 10px 0;
                    border-bottom: 1px dashed $border-third;

                    .item_right {
                        align-self: center;

                        .delete {
                            color: #b4bccc;
                            outline: none;
                            cursor: pointer;
                        }

                        .hide {
                            visibility: hidden;
                        }
                    }

                    .reply-content {
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        color: $text-main;

                        .avatar {
                            border-radius: 50%;
                            margin-right: 6px;
                            margin-top: 4px;
                        }

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

        .block {
            text-align: center;
        }
    }
</style>
