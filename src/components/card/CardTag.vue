<template>
    <el-card :body-style="{ padding: '8px 18px' }">
        <div slot="header" class="me-tag-header">
            <span>最热标签</span>
            <router-link class="more" :to="{name:'category'}">查看全部</router-link>
        </div>
        <div  class="me-tag-body">
            <el-button round size="small"  class="tag"
                       @click="goCategory(item.id)"
                       type="info" plain  v-for=" item in hotTags" :key="item.id">{{item.categoryName}}</el-button>
        </div>
    </el-card>
</template>

<script>
    import {getHot} from "@/api/category";

    export default {
        name: "CardTag",
        data(){
            return{
              hotTags:[]
            }
        },
        methods:{
            getHotCategory(){
                getHot().then(res=>{
                    this.hotTags=res.data.data;
                })
            },
            goCategory(id){
                this.$router.push({name:'cArticle',params:{id:id},query:{p:1}})
            }
        },
        mounted(){
            this.getHotCategory();
        }

    }
</script>

<style scoped lang="scss">
    .me-tag-header{
        display: flex;
        justify-content: space-between;
        .more {
            margin-right: 10px;
            color: #78b6f7;
        }
        .more:hover {
            text-decoration: underline;
        }
    }
    .me-tag-body{
      text-align: left;
        .tag{
            margin: 10px 4px 4px;
        }
    }

</style>