<template>
    <mavon-editor
            class="me-editor"
            ref="md"
            v-model="detail.content"
            @imgAdd="$imgAdd"
    >
    </mavon-editor>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import { uploadFile } from '@/api/upload';

    export default {
        name: "markdowneditor",
        props: {
            detail: Object
        },
        mounted() {
            this.$set(this.detail, 'ref', this.$refs.md)
        },
        data() {
            return {}
        },
        methods: {
            $imgAdd(pos, $file){
                let that = this
                let formdata = new FormData();
                formdata.append('file', $file);
                formdata.append('type','common');
                uploadFile(formdata).then(data => {// 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
                    if (data.data.status == 0) {
                        that.$refs.md.$img2Url(pos, data.data.data);
                    }
                })
            }
        },
        components: {
            mavonEditor
        }
    }
</script>

<style lang="scss">
    .me-editor {
        z-index: 6 !important;
    }

    .v-note-wrapper.fullscreen {
        top: 60px !important
    }
</style>