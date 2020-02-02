<template>
    <div>
        <article-item v-for="item in list" :key="item.id" :item="item"></article-item>
    </div>

</template>

<script>
    import articleItem from '@/components/article/articleItem';

    export default {
        name: "articlePage",
        data() {
            return {
                list:[
                    {title:"111",id:1},
                    {title:"111",id:2},
                    {title:"111",id:3}
                ]
            }
        },
        components: {
            articleItem
        }
    }
</script>

<style scoped>

</style>