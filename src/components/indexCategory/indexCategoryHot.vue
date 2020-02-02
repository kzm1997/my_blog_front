<template>
    <div class="category-body">
        <div class="category-big">
            <span>大类1</span>
            <span>大类2</span>
            <span>大类3</span>
            <span>大类4</span>
        </div>
        <el-divider></el-divider>
        <div class="category-min">
            <span>小类1</span>
            <span>小类2</span>
            <span>小类3</span>
            <span>小类4</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "indexCategoryHot"
    }
</script>

<style scoped lang="scss">
   .category-big{
       display: flex;
       justify-content: flex-start;
       span{
           margin-right: 14px;
           font-size: 16px;
       }
   }
    .category-min{
        display: flex;
        justify-content: flex-start;

        span{
            padding: 4px 0px 5px ;
            margin-right: 8px;
            font-size: 14px;
        }
    }
    .el-divider{
        margin: 15px 0px 6px 0px;

    }
</style>