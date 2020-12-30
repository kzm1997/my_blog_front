<template>
    <div id="write">
        <el-container>
            <simple-headers :write="true">
                <div class="release">
                    <el-button @click="release" round>发布</el-button>
                </div>
                <div class="cancel">
                    <el-button round @click="cancel">取消</el-button>
                </div>
                <el-dropdown class="me_drop">
                <span class=" el-dropdown-link">
                    <el-avatar
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><i class="iconfont icontuichudenglu"></i>&nbsp;退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </simple-headers>

            <el-container class="me-area me-write-box">
                <el-main class="me-write-main">
                    <div class="write_title">
                        <el-input resize="none"
                                  type="textarea"
                                  autosize
                                  v-model="articleForm.title"
                                  placeholder="请输入标题"
                                  class="me-write-input">
                        </el-input>
                    </div>
                    <div id="placeholder" style="visibility: hidden;height: 89px;display: none;"></div>
                    <markdown-editor :detail="articleForm.article" class="me-write-editor"></markdown-editor>

                </el-main>
            </el-container>
            <el-popconfirm
                    @onConfirm="deleteArticle"
                    v-if="articleForm.id!=''"
                    :title="text">
                <i class="iconfont iconshanchu " slot="reference"></i>
            </el-popconfirm>

            <el-dialog
                    title="摘要 分类 标签"
                    :visible.sync="dialogVisible"
                    custom-class="me-dialog"
                    :close-on-click-modal=false
            >
                <el-form :model="articleForm" ref="articleForm" :rules="rules">
                    <el-form-item prop="summary">
                        <el-input type="textarea"
                                  v-model="articleForm.summary"
                                  :rows="6"
                                  name="summary"
                                  placeholder="请输入摘要">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="文章分类" prop="category">
                        <el-select v-model="articleForm.category"
                                   @change="getTags" placeholder="请选择文章分类">
                            <el-option v-for="c in categorys" :key="c.id" :label="c.categoryName"
                                       :value="c.id"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="文章标签" prop="tags">
                        <el-checkbox-group v-model="articleForm.tags" @change="getGroup">
                            <el-checkbox :checked="getChecked(t)" v-for="t in tags" :key="t.id" :label="t.id"
                                         name="tags">{{t.categoryName}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>

                </el-form>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="publish('articleForm')">确 定</el-button>
  </span>
            </el-dialog>

        </el-container>
    </div>
</template>

<script>
    import SimpleHeader from '@/components/header/SimpleHeader';
    import MarkdownEditor from '@/components/markdown/markdowneditor';

    import {getAllCategory, getTagsById} from "@/api/category";
    import {getEditArticle, updateArticle, publishArticle, deleteArticle} from '@/api/article';

    export default {
        name: "blogwrite",
        data() {
            return {
                dialogVisible: false,
                categorys: [],
                tags: [],
                mytags: [],
                text: '确定要删除文章吗?',
                articleForm: {
                    id: '',
                    title: '',
                    summary: '',
                    category: '',
                    tags: [],
                    article: {
                        content: '',
                        ref: '',//保存mavonEditor实例  实际不该这样
                        default_open: 'edit',
                        toolbars: {
                            bold: true, // 粗体
                            italic: true, // 斜体
                            header: true, // 标题
                            underline: true, // 下划线
                            strikethrough: true, // 中划线
                            mark: true, // 标记
                            superscript: true, // 上角标
                            subscript: true, // 下角标
                            quote: true, // 引用
                            ol: true, // 有序列表
                            ul: true, // 无序列表
                            imagelink: true, // 图片链接
                            code: true, // code
                            fullscreen: true, // 全屏编辑
                            readmodel: true, // 沉浸式阅读
                            help: true, // 帮助
                            undo: true, // 上一步
                            redo: true, // 下一步
                            trash: true, // 清空
                            navigation: true, // 导航目录
                            //subfield: true, // 单双栏模式
                            preview: true, // 预览
                        }
                    }
                },
                rules: {
                    summary: [
                        {required: true, message: '请输入摘要', trigger: 'blur'},
                        {max: 80, message: '不能大于80个字符', trigger: 'blur'}
                    ],
                    category: [
                        {required: true, message: '请选择文章分类', trigger: 'change'}
                    ],
                    tags: [
                        {type: 'array', required: true, message: '请选择标签', trigger: 'change'}
                    ]
                }
            }
        },
        mounted() {
            if (this.$route.query.id != undefined) {
                this.getArticle(this.$route.query.id);
            }
            this.getCategory();
            console.log(this.$route);
            this.editorToolBarToFixedWrapper = this.$_.throttle(this.editorToolBarToFixed, 10);
            window.addEventListener('scroll', this.editorToolBarToFixedWrapper, false);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.editorToolBarToFixedWrapper, false);
        },
        methods: {
            deleteArticle() {
                deleteArticle(this.articleForm.id).then(() => {
                    this.$message({
                        message: '文章删除成功啦',
                        type: 'success',
                        showClose: true
                    })
                    this.$router.push({path: '/'})
                })


            },
            getGroup(value) {
                let tem = [];
                this.mytags.forEach(myitem => {
                    value.forEach(item => {
                        if (item == myitem.id) {
                            tem.push(myitem)
                        }
                    })
                })
                this.mytags = tem;
            },
            getArticle(id) {
                getEditArticle(id).then(res => {
                    this.articleForm.id = res.data.data.id;
                    this.articleForm.article.content = res.data.data.content;
                    this.articleForm.tags = res.data.data.tags;
                    this.articleForm.title = res.data.data.title;
                    this.articleForm.summary = res.data.data.summary;
                    this.articleForm.category = res.data.data.category.id;
                    this.mytags = res.data.data.tags;
                    this.getTags(res.data.data.category.id);
                })
            },
            getChecked(item) {
                let flag = false;
                this.mytags.forEach((myitem) => {
                    if (item.id == myitem.id) {
                        flag = true;
                    }
                })
                return flag;
            },
            release() {
                if (!this.articleForm.title) {
                    this.$message({message: '标题不能为空', type: 'warning', showClose: true});
                    return;
                }
                if (this.articleForm.title.length > 30) {
                    this.$message({message: '标题不能大于30个字符', type: 'warning', showClose: true});
                    return;
                }
                if (!this.articleForm.article.content) {
                    this.$message({message: '文章内容不能为空', type: 'warning', showClose: true});
                    return;
                }
                this.dialogVisible = true;
            },
            getCategory() {
                getAllCategory().then(data => {
                    this.categorys = data.data.data
                }).catch(error => {
                    this.$message({
                        message: error.data.msg,
                        type: 'error'
                    });
                })
            },
            getTags(select) {
                this.tags = [];
                this.articleForm.tags = [];
                getTagsById(select).then(data => {
                    this.tags = data.data.data;
                }).catch(error => {
                    this.$message({
                        message: error.data.msg,
                        type: 'error'
                    });
                })
            },
            publish(articleForm) {
                this.$refs[articleForm].validate((valid) => {
                        if (valid) {
                            let tags = this.articleForm.tags.map(function (item) {
                                return item;
                            })
                            let article = {
                                id: this.articleForm.id,
                                title: this.articleForm.title,
                                summary: this.articleForm.summary,
                                category: this.articleForm.category,
                                tags: tags,
                                content: this.articleForm.article.content,
                                contentHtml: this.articleForm.article.ref.d_render
                            }
                            this.dialogVisible = false;
                            let loading = this.$loading({
                                lock: true,
                                text: '发布中...'
                            })
                            if (this.articleForm.id == '') {
                                publishArticle(article).then(() => {
                                    loading.close();
                                    this.$message = ({
                                        message: '发布成功啦',
                                        type: 'success',
                                        showClose: true
                                    })
                                    this.$router.push({path: '/'})
                                }).catch(error => {
                                    loading.close();
                                    this.$message({
                                        message: error.data.msg,
                                        type: 'error'
                                    });
                                })
                            } else {
                                updateArticle(article).then(() => {
                                    loading.close();
                                    this.$message = ({
                                        message: '修改文章成功啦',
                                        type: 'success',
                                        showClose: true
                                    })
                                    this.$router.push({path: '/'})
                                }).catch(error => {
                                    loading.close();
                                    this.$message({
                                        message: error.data.msg,
                                        type: 'error'
                                    });
                                })
                            }
                        } else {
                            this.$message({
                                message: '请输入完整信息再发布',
                                type: 'warning'
                            })
                        }

                    }
                )
            },
            editorToolBarToFixed() {
                let toolbar = document.querySelector('.v-note-op');
                let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
                if (curHeight >= 160) {
                    document.getElementById("placeholder").style.display = "block"; //bad  用计算属性较好
                    toolbar.classList.add("me-write-toolbar-fixed");
                } else {
                    document.getElementById("placeholder").style.display = "none";
                    toolbar.classList.remove("me-write-toolbar-fixed");
                }
            }
            ,
            cancel() {
                this.$confirm('文章将不会保存, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    dangerouslyUseHTMLString: true
                }).then(() => {
                    this.$router.push('/')
                })
            }
        },
        components: {
            SimpleHeaders: SimpleHeader,
            MarkdownEditor:
            MarkdownEditor
        }
    }
</script>

<style lang="scss">
    .release {
        margin-top: 10px;
        margin-right: 10px;
        outline: none;
    }

    .is-danger {
        display: block;
        margin-top: 10px !important;
        color: #ff5b5b;
    }

    .cancel {
        margin-top: 10px;
        margin-right: 160px;
        outline: none;
    }

    .el-dropdown {
        margin-top: 8px;
        margin-bottom: 11px;
    }

    i.iconshanchu {
        position: fixed;
        top: 200px;
        right: 200px;
        color: #a9b7b8;
        cursor: pointer;
        font-size: 30px;
    }

    .me_drop {
        outline: none;
        margin-right: 150px;
    }

    .me-write-btn {
        margin-top: 10px;
    }

    .me-write-box {
        max-width: 900px;
        margin: 80px auto 0;
    }

    .me-write-main {
        padding: 0;
    }

    .write_title {
        ::-webkit-input-placeholder { /* WebKit browsers */
            color: #999 !important;
        }

        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: #999 !important;
        }

        ::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #999 !important;
        }

        :-ms-input-placeholder { /* Internet Explorer 10+ */
            color: #999 !important;
        }

        .me-write-input textarea {
            color: #606266;
            font-size: 32px;
            font-weight: 600;
            border: none;
            resize: none;
            height: 58px;
            min-height: 58px;
        }
    }

    .me-write-editor {
        min-height: 650px !important;
    }

    .me-header-left {
        margin-top: 10px;
    }

    .me-title img {
        max-height: 2.4rem;
        max-width: 100%;
    }

    .me-write-toolbar-fixed {
        position: fixed;
        width: 860px !important;
        top: 60px;
    }

    .v-note-op {
        box-shadow: none !important;
    }

    .auto-textarea-input, .auto-textarea-block {
        font-size: 18px !important;
    }

    .me-dialog {
        text-align: left;

        .el-dialog__title {
            font-size: 18px;
            font-weight: 800;
        }

        .el-textarea {
            font-size: 16px;

            textarea {
                resize: none;
            }
        }
    }

</style>