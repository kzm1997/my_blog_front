<template>
    <div class="content">
        <div class="content_left">
            <!--分类-->
            <div class="content_left_category">
                 <index-category-hot></index-category-hot>
            </div>
            <div class="content_left_artile">
                <article-page></article-page>
            </div>
        </div>
        <div class="content_right">
            <div class="content_right_person">
              <card-me></card-me>
            </div>
            <div class="content_right_hot">
              <card-tag></card-tag>
            </div>
            <div class="content_right_hotpaper"></div>
        </div>
    </div>
</template>

<script>
    import articlePage from '@/components/ivews/article/articlePage.vue';
    import IndexCategoryHot from  '@/components/indexCategory/indexCategoryHot.vue';
    import CardMe from '@/components/card/CardMe.vue';
    import CardTag from '@/components/card/CardTag.vue';

    export default {
        name: "HomeContent",
        data() {
            return {}
        },
        components: {
            articlePage,
            IndexCategoryHot,
            CardMe,
            CardTag
        }
    }
</script>

<style scoped lang="scss">
    .content {
        width: 1200px;
        height: 1000px;
        margin: 0 auto;
        margin-top: 120px;
        display: flex;
        .content_left {
            flex: 1;
            /*background-color: #6C567B;*/
            display: flex;
            flex-direction: column;
            .content_left_category {
               padding-top: 15px;
                padding: 15px 20px 5px 20px;
                width: 100%;
                height: 84px;
                margin-bottom: 10px;
                border: 1px solid #EBEEF5;
                background-color: #f9f9f9;
                box-sizing: border-box;

            }
            content_left_artile{
               width: 100%;
            }
        }
        .content_right {
            margin-left: 30px;
            width: 300px;
            height: 700px;
            border: 1px solid;
            .content_right_person{
              margin-bottom: 20px;
            }
        }
    }
</style>