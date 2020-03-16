<template>
    <div id="write">
        <el-container>
            <simple-headers :write="true">
                <div class="release">
                    <el-button  @click="release"  round >发布</el-button>
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
                                  placeholder="请输入摘要">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="文章分类" prop="category">
                        <el-select v-model="articleForm.category" value-key="id" placeholder="请选择文章分类">
                            <el-option v-for="c in categorys" :key="c.id" :label="c.categoryname" :value="c"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="文章标签" prop="tags">
                        <el-checkbox-group v-model="articleForm.tags">
                            <el-checkbox v-for="t in tags" :key="t.id" :label="t.id" name="tags">{{t.tagname}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
            </el-dialog>

        </el-container>
    </div>
</template>

<script>
    import SimpleHeader from '@/components/header/SimpleHeader';
    import MarkdownEditor from '@/components/markdown/markdowneditor';

    export default {
        name: "blogwrite",
        data() {
            return {
                dialogVisible:false,
                categorys:[],
                tags:[],
                articleForm:{
                    title:'',
                    summary:'',
                    category:'',
                    tags:'',
                    article:{
                        content: '',
                        ref: '',//保存mavonEditor实例  实际不该这样
                        default_open: 'edit'
                    }
                },
                rules:{
                       summary:[
                           {required:true,message:'请输入摘要',trigger:'blur'},
                           {max:80,message:'不能大于80个字符',trigger:'blur'}
                       ],
                       category:[
                           {required:true,message:'请选择文章分类',trigger:'change'}
                       ],
                        tags:[
                            {type:'array',required:true,message:'请选择标签',trigger:'change'}
                        ]
                }
            }
        },
        methods: {
            release(){
                if (!this.articleForm.title){
                    this.$message({message: '标题不能为空', type: 'warning', showClose: true});
                    return;
                }
                if (this.articleForm.title.length>30){
                    this.$message({message: '标题不能大于30个字符', type: 'warning', showClose: true});
                    return;
                }
                if (!this.articleForm.article.content){
                    this.$message({message: '文章内容不能为空', type: 'warning', showClose: true});
                    return;
                }
               this.dialogVisible=true;
            },
            cancel(){
                this.$confirm('文章将不会保存, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    dangerouslyUseHTMLString:true
                }).then(() => {
                    this.$router.push('/')
                })
            }
        },
        components: {
            SimpleHeaders: SimpleHeader,
            MarkdownEditor: MarkdownEditor
        }
    }
</script>

<style lang="scss">
    .release {
        margin-top: 10px;
        margin-right: 10px;
        outline: none;
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
            color:    #999 !important;
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color:    #999 !important;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
            color:    #999 !important;
        }
        :-ms-input-placeholder { /* Internet Explorer 10+ */
            color:    #999 !important;
        }
        .me-write-input textarea{
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
        width: 700px !important;
        top: 60px;
    }

    .v-note-op {
        box-shadow: none !important;
    }

    .auto-textarea-input, .auto-textarea-block {
        font-size: 18px !important;
    }

   .me-dialog{
       text-align: left ;

        .el-dialog__title{
            font-size: 18px;
            font-weight: 800;
        }
        .el-textarea{
            font-size: 16px;
            textarea{
                resize: none;
            }
        }
   }

</style>