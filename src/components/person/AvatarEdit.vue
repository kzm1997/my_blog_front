<template>
    <div class="change_avatr_container">
        <el-card>
            <div slot="header" class="header">
                <span>修改头像</span>
            </div>
            <div class="avatar_container_body">
                <el-avatar class="my_avatar" size="large" :src="circleUrl"></el-avatar>
                <div class="update_main">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="picture">
                        <el-button size="small" type="success">上传新头像<i class="el-icon-upload el-icon--right"></i></el-button>
                </el-upload>
                </div>
                <el-button type="success" size="small">保存</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "AvatarEdit",
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .change_avatr_container {
        text-align: left;
        .avatar_container_body {
            text-align: left;
            .update_main{
                margin: 15px 0;
            }
        }
        .my_avatar {
            width: 120px;
            height: 120px;
        }
    }

</style>