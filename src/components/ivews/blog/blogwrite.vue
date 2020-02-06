<template>
    <div class="me">
        <simple-headers :write="true" >

            <div class="release">
                <el-button round>发布</el-button>
            </div>
            <div class="cancel">
                <el-button round>取消</el-button>
            </div>
            <el-dropdown class="me_drop" >
                <span class=" el-dropdown-link">
                    <el-avatar
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><i class="iconfont icontuichudenglu"></i>&nbsp;退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </simple-headers>
        <div class="write_main_container" >
            <div class="write_main_inner">
            <div class="write_title">
                    <el-input type="textarea"
                              v-model="summary"
                              :rows="6"
                              placeholder="请输入标题"
                              class="write_title_area">
                    </el-input>
            </div>
            <div id="placeholder" style="visibility: hidden;height: 89px;display: none;"></div>
            <div class="main_editor">
                <markdown-editor></markdown-editor>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SimpleHeader from '@/components/header/SimpleHeader';
    import MarkdownEditor from '@/components/markdown/markdowneditor';

    export default {
        name: "blogwrite",
        data() {
            return {
                summary:''
            }
        },
        methods: {},
        components: {
            SimpleHeaders: SimpleHeader,
            MarkdownEditor: MarkdownEditor
        }
    }
</script>

<style  lang="scss">
     .me{
         position: relative;
     }
    .release {
        margin-top: 10px;
        margin-right: 10px;
    }

    .cancel {
        margin-top: 10px;
        margin-right: 160px;
    }

    .el-dropdown {
        margin-top: 8px;
        margin-bottom: 11px;
    }

    .me_drop {
        margin-right: 150px;
    }
    .write_main_container{
        .write_main_inner{
            flex: 1;
        }
        display: flex;
        flex-direction: column;
        margin: 160px auto 200px;
        width: 800px;
        height: 1000px;
        .write_title{
            ::-webkit-input-placeholder { /* WebKit browsers */
                color:    #999;
            }
            :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color:    #999;
            }
            ::-moz-placeholder { /* Mozilla Firefox 19+ */
                color:    #999;
            }
            :-ms-input-placeholder { /* Internet Explorer 10+ */
                color:    #999;
            }

        }
        .write_title_area textarea {
            color: #606266;
                 font-size: 32px;
                 font-weight: 600;
                 border: none;
                 resize: none;
                 height: 58px;
                 min-height: 58px;
        }
        .main_editor{

        }
    }


</style>