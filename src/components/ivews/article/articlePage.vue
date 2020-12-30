<template>
    <div>
        <article-item v-for="item in articles" :key="item.id" :article="item"></article-item>
    </div>

</template>

<script>
    import articleItem from '@/components/article/articleItem';

    export default {
        name: "articlePage",
        props: ['articles'],
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {

        },
        components: {
            articleItem
        }
    }
</script>

<style scoped>

</style>