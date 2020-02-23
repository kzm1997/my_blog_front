<template>
    <div class="article_view">
        <div class="article_view_left">
            <!--抽成组件-->
            <article-content></article-content>
            <el-card class="comment">
                <comment :comments="commentData"></comment>
            </el-card>

        </div>
        <div class="article_view_right">
            <el-card>1111</el-card>
            <el-card>1111</el-card>
            <el-card>1111</el-card>
            <el-card>1111</el-card>
            <el-card>1111</el-card>
            <el-card class="js-toc">
                <div slot="header" class="clearfix">
                    <span class="dictory">目录</span>
                </div>
                <nav class="toc"></nav>
            </el-card>
        </div>
    </div>
</template>

<script>
    import articleContent from '@/components/article/articleContent'
    import  tocbot from 'tocbot';
    import * as CommentData from '../../comment/mock';
    import comment from '@/components/comment/comment.vue';
    export default {
        name: "articleView",
        data(){
            return{
               commentData:[]
            }
        },
        components:{
            articleContent,
            comment
        },
        mounted(){
            tocbot.init({
                // Where to render the table of contents.
                tocSelector: '.toc',
                // Where to grab the headings to build the table of contents.
                contentSelector: '.js-toc-content',
                // Which headings to grab inside of the contentSelector element.
                headingSelector: 'h1, h2, h3, h4, h5',
                // For headings inside relative or absolute positioned containers within content.
                hasInnerContainers: true,
                scrollSmooth: true,
                scrollSmoothOffset: -80,
                headingsOffset: 200
            });
            this.commentData=CommentData.comment.data;
        }
    }
</script>

<style  lang="scss">
   @import "~tocbot/dist/tocbot.css";
      .article_view{
          width: 1200px ;
          margin: 120px auto;
          display: flex;
          .article_view_left{
            width: 820px;
            margin-right: 40px;
          }
          .article_view_right{
              flex: 1;
             .js-toc{
                 position: sticky;
                 top: 200px;
                 text-align: left;
                 .dictory{
                     font-weight: bold;
                 }
             }
          }
          .comment{
              margin-top: 30px;
              text-align: left;
          }
      }

</style>