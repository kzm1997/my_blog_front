<template>
    <div class="time_block">
       <div class="content">
           <div class="content_left">
               <el-timeline>
                   <el-timeline-item
                           v-for="(activity, index) in timeData"
                           :key="index"
                           type="primary"
                           placement="top"
                           icon="el-icon-more"
                           :timestamp="timeFormat(activity.updateTime)">
                       <el-card class="card">
                           <router-link :to="{name:'articleView', params:{id:activity.id}}"><h2 class="record">{{activity.title}}</h2></router-link>
                           <p>{{activity.description}}</p>
                       </el-card>
                   </el-timeline-item>
               </el-timeline>
           </div>
           <div class="content_right"></div>
       </div>
    </div>
</template>

<script>
    import {getTimeLine} from "../../api/user";
    import Moment from "moment";

    export default {
        name: "TimeLine",
        data() {
            return {
                activities: [{
                    content: '支持使用图标',
                    timestamp: '2018-04-12 20:46',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-more'
                }, {
                    content: '支持自定义颜色',
                    timestamp: '2018-04-03 20:46',
                    color: '#0bbd87'
                }, {
                    content: '支持自定义尺寸',
                    timestamp: '2018-04-03 20:46',
                    size: 'large'
                }, {
                    content: '默认样式的节点',
                    timestamp: '2018-04-03 20:46'
                }],
                timeData: []
            }
        },
        mounted() {
            this.getTimeLine();
        },
        methods:{
            timeFormat(time){
                return Moment(time).format('YYYY-MM-DD HH:mm:ss');
            },
            getTimeLine(){
                getTimeLine().then(res=>{
                    if (res.data.status==0){
                        this.timeData=res.data.data;
                    }
                })
            }
        }
    }
</script>

<style  lang="scss">
   .time_block{
     min-height: 100vh;
     .content{
         display: flex;
         text-align: left;
         padding-top: 100px;
         width: 1200px;
         margin: 0 auto;
         .content_left {
             flex: 1;
             margin-right: 30px;
             .card{
                 height: 160px;

             }
             .el-timeline-item__timestamp.is-top{
                 font-size: 18px;
                 margin-bottom: 12px;
             }
         }
         .content_right{
             width: 420px;
         }

     }
   }
</style>