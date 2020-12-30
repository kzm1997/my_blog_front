<template>
    <div class="container">
       <div class="logo">
           <img :src="getAvatar" >
       </div>
       <div class="info">
           <h3>{{category.categoryName}}</h3>
           <p>{{category.message}}</p>
       </div>
    </div>
</template>

<script>
    import {getCategoryMessage} from "@/api/category";
    export default {
        name: "categoryItem",
        data(){
            return{
                category:{}
            }
        },
        watch: {
            $route(to) {
                this.getCategoryDetail(to.params.id);
            }
        },
        computed:{
            getAvatar(){
                return  this.category.avatar;
            }
        },
        mounted() {
            this.getCategoryDetail(this.$route.params.id);
        },
        methods:{
            getCategoryDetail(id){
                getCategoryMessage(id).then(res=>{
                    this.category=res.data.data;
                })
            }
        }
    }
</script>

<style scoped lang="scss">
   .container{

       display: flex;
       text-align: left;
     .logo{
         img{
             border: 2px #ccaf3c dashed;
             width: 60px;
             height: 60px;
         }
     }
     .info{
         margin-left: 15px;
         h3{
             margin: 0;
         }
         p{
             color: #868f9c;
             margin-top: 10px;
             font-size: 14px;
             margin-right: 150px;
             height: 40px;
             line-height: 20px;
             overflow: hidden;
             text-overflow: ellipsis;
             display: -webkit-box;
             -webkit-line-clamp: 2;
             -webkit-box-orient: vertical;
         }
     }
   }
</style>