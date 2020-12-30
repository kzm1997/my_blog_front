<template>
    <el-card>
        <div slot="header" class="header">
            <span>推荐作者</span>
            <span @click="getChange"><i class="iconfont iconzhuanhuan rotate" ref="mychange"></i>换一批</span>
        </div>
        <div>
            <recommed-item v-for="item in users" :key="item.id" :author="item"></recommed-item>
        </div>
    </el-card>
</template>

<script>
    import RecommedItem from './RecommendItem';
    import {getUserRecommed} from '@/api/user'
    export default {
        name: "RecommendUser",
        data() {
            return {
                users:[]
            }
        },
        mounted(){
          this.getLikeUser();
        },
        methods: {
            getChange(){
              if (this.$refs.mychange.classList.contains('rotate')){
                  this.$refs.mychange.classList.remove('rotate');
                  this.$refs.mychange.classList.add('rotate1');
                  this.getLikeUser();
              }
              else {
                  this.$refs.mychange.classList.remove('rotate1');
                  this.$refs.mychange.classList.add('rotate');
                  this.getLikeUser();
              }
            },
            getLikeUser(){
                getUserRecommed().then(res=>{
                    this.users=res.data.data;
                })
            }
        },
        components: {
            RecommedItem
        }
    }
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        span {
            cursor: pointer;
            .iconzhuanhuan {
                display: inline-block;
                margin-right: 4px;
            }
        }
        .rotate:before{
            display: inline-block;
            transform-origin: center center;
            transform: rotate(0deg);
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transition: transform .5s ease; //过度时间 可调
            -moz-transition: -moz-transform 0.5s;
            -moz-transition: -moz-transform 0.5s;
            -o-transition: -o-transform 0.5s;
            -ms-transition: -ms-transform 0.5s;
        }
        .rotate1:before{
            display: inline-block;
            transform-origin:center center;
            transform: rotate(270deg); //返回原点
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transition: transform 0.5s ease;
            -moz-transition: -moz-transform 0.5s;
            -moz-transition: -moz-transform 0.5s;
            -o-transition: -o-transform 0.5s;
            -ms-transition: -ms-transform 0.5s;
        }
    }
</style>