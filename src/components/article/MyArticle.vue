<template>
    <div class="container">
        <div class="content">
            <router-link :to="{name:'articleView', params:{id:articleData.id}}" class="title">{{articleData.title}}</router-link>
            <p class="description">{{articleData.summary}}</p>
            <div class="meta">
                <i class="iconfont iconview"></i>
                <span>{{articleData.readNum}}</span>
                <i class="iconfont iconpinglun2"></i>
                <span>{{articleData.commentNum}}</span>
                <i class="iconfont iconguanzhu1"></i>
                <span>20</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyArticle",
        props:{
            articleData:Object
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="scss">
   .container{
       text-align: left;
       width: 100%;
       border-bottom: 1px solid #dfdfdf;
       padding-top: 15px;
       padding-bottom: 20px;
       .content{
           color: #969696;
           .title{
               font-size: 18px;
               font-weight: 700;
               line-height: 1.5;
               cursor: pointer;
           }
           .title:hover{
               text-decoration: underline;
           }
           .description{
               width: 360px;
               line-height: 1.5;
               height: 38px;
               font-size: 13px;
               margin-right: 150px;
               overflow: hidden;
               text-overflow: ellipsis;
               display: -webkit-box;
               -webkit-line-clamp: 2;
               -webkit-box-orient: vertical;
           }
           .meta{
               span{
                 margin-left: 3px;
                 font-size: 13px;
                  margin-right: 12px;
               }

           }
       }
   }
</style>