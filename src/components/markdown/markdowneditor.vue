<template>
    <mavon-editor
            class="me-editor"
            >
    </mavon-editor>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "markdowneditor",
        data(){
            return{

            }
        },
        methods:{

        },
        components:{
            mavonEditor
        }
    }
</script>

<style  lang="scss">
    .me-editor{
        z-index: 6 !important;
    }
    .v-note-wrapper.fullscreen {
        top: 60px !important
    }
</style>