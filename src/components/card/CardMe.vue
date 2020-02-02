<template>
    <el-card>
        <h1>kzm</h1>
        <div class="me-author-description">
            <span><i class="el-icon-location-outline"></i> &nbsp;山东&济南</span>
            <span><i class="me-icon-job"></i> &nbsp;java开发工程师</span>
        </div>
        <div class="me-author-tool">
            <i @click="showTool(qq)" :title="qq.title" class="me-icon-QQ">qq</i>
            <i @click="showTool(github)" :title="github.title" class="me-icon-github"></i>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "CardMe",
        data() {
            return {
                qq: {title: 'QQ', message: '1206960056'},
                github: {
                    title: 'github',
                    message: '<a target="_blank" href="https://github.com/shimh-develop">https://github.com/shimh-develop</a>'
                }
            }
        },
        methods: {
            showTool(tool) {
                this.$message({
                    showClose: true,
                    dangerouslyUseHTMLString: true,
                    message: '<strong>' + tool.message + '</strong>'
                });
            }
        }
    }
</script>

<style scoped>

</style>