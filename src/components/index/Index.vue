<template>
    <div class="main-wrapper">
        <router-view name="header"></router-view>
        <router-view name="content"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style lang="scss">
    .main-wrapper{
        background-color: #fff;
        width: 100%;
        margin: 0 auto;
    }
</style>