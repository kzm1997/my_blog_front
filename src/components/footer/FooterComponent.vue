<template>
    <div class="footer">
        <p class="copyritght'">
            <a href="#">{{siteInfo.info}}</a>
            <span>|</span>
            {{siteInfo.copyright}}
            <span v-html="siteInfo.copyright_desc"></span>
        </p>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               siteInfo:{
                   info:'纯个人网站,有事联系10086',
                   copyright:'版权所有,@kzm.com 2020-2100',
                   copyright_desc:'个人网站,以商用目的使用需要获取许可,非商业使用请随意玩耍,cc'
               }
           }
       }
    }
</script>

<style scoped>
  .footer{
      margin-top: 100px;
      width: 100%;
      border-top: 1px solid  rgb(84, 92, 100);
      height: 100px;

  }
    .footer p{
        margin-top: 15px;
        color: #333;
        text-align: center;
        font-weight: 300;
        line-height: 25px;
    }
    .footer p span:hover{
        color: cadetblue;
    }
</style>