<template>
    <mavon-editor
            class="me-editor"
            ref="md"
            v-model="detail.content"
            >
    </mavon-editor>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "markdowneditor",
        props:{
            detail:Object
        },
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