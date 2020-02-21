<template>
    <div class="article_view">
        <div class="article_view_left">
            <!--抽成组件-->
            <article-content></article-content>
        </div>
        <div class="article_view_right">
            <el-card>
                <div>
                    <!--<article-dictory></article-dictory>-->
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import articleContent from '@/components/article/articleContent'
    // import articleDictory from '@/components/article/articleDictory'
    // import katelog from 'katelog'
    export default {
        name: "articleView",
        data(){
            return{

            }
        },
        components:{
            articleContent
            // articleDictory
        },
       /* mounted(){
            new katelog({
                contentEl: 'kCatelog',
                catelogEl: 'catelogList',
                linkClass: 'k-catelog-link',
                linkActiveClass: 'k-catelog-link-active',
                supplyTop: 20,
                selector: ['h2', 'h3','h4','h5'],
                active: function (el) {
                    console.log(el);
                }
            });
        }*/
    }
</script>

<style scoped lang="scss">
      .article_view{
          width: 1200px;
          margin: 120px auto;
          display: flex;
          .article_view_left{
            width: 820px;
            margin-right: 40px;
          }
          .article_view_right{
              flex: 1;
          }
      }
</style>