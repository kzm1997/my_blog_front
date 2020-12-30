<template>
    <div class="change_avatr_container">
        <el-card>
            <div slot="header" class="header">
                <span>修改头像</span>
            </div>
            <div class="avatar_container_body">
                <div class="cropper-component">
                    <div class="info-item">
                        <div class="btn-box">
                            <label class="btn" for="uploads">选择图片</label>
                            <input type="file" id="uploads" :value="imgFile"
                                   style="position:absolute; clip:rect(0 0 0 0);width: 1px;"
                                   accept="image/png, image/jpeg, image/gif, image/jpg"
                                   @change="uploadImg($event, 1)">

                            <input type="button" class="operation-btn" value="+" title="放大" @click="changeScale(1)">
                            <input type="button" class="operation-btn" value="-" title="缩小" @click="changeScale(-1)">
                            <input type="button" class="operation-btn" value="↺" title="左旋转" @click="rotateLeft">
                            <input type="button" class="operation-btn" value="↻" title="右旋转" @click="rotateRight">
                            <input type="button" class="operation-btn" value="↓" title="下载" @click="down('blob')">
                            <div class="btn" @click="finish('blob')">上传头像</div>
                        </div>
                        <div class="mine">
                            <div class="operation-box">
                                <div class="cropper">
                                    <vueCropper
                                            ref="cropper"
                                            :img="option.img"
                                            :outputSize="option.size"
                                            :outputType="option.outputType"
                                            :info="option.info"
                                            :full="option.full"
                                            :canMove="option.canMove"
                                            :canMoveBox="option.canMoveBox"
                                            :original="option.original"
                                            :autoCrop="option.autoCrop"
                                            :autoCropWidth="option.autoCropWidth"
                                            :autoCropHeight="option.autoCropHeight"
                                            :fixedBox="option.fixedBox"
                                            @realTime="realTime"
                                            @imgLoad="imgLoad"
                                    ></vueCropper>
                                </div>
                            </div>
                            <div class="preview-box">
                                <div>预览：</div>
                                <div :style="previews.div" class="preview">
                                    <img :src="previews.url" :style="previews.img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    import {VueCropper} from 'vue-cropper'
    import {uploadFile} from "../../api/upload";

    export default {
        name: 'cropper',
        components: {
            VueCropper
        },
        data() {
            return {
                //剪切图片上传
                crap: false,
                previews: {},
                option: {
                    img: '', // 裁剪图片的地址
                    info: true, // 裁剪框的大小信息
                    outputSize: 1, // 剪切后的图片质量（0.1-1）
                    full: true, // 输出原图比例截图 props名full
                    outputType: 'png', // 裁剪生成额图片的格式
                    canMove: true,  // 能否拖动图片
                    original: false,  // 上传图片是否显示原始宽高
                    canMoveBox: true,  // 能否拖动截图框
                    autoCrop: true, // 是否默认生成截图框
                    autoCropWidth: 150,
                    autoCropHeight: 150,
                    fixedBox: false // 截图框固定大小
                },
                fileName: '',  // 本机文件地址
                downImg: '#',
                imgFile: '',
                uploadImgRelaPath: '', // 上传后的图片的地址（不带服务器域名）
            }
        },
        methods: {
            // 放大/缩小
            changeScale(num) {
                num = num || 1;
                this.$refs.cropper.changeScale(num);
            },
            // 坐旋转
            rotateLeft() {
                this.$refs.cropper.rotateLeft();
            },
            // 右旋转
            rotateRight() {
                this.$refs.cropper.rotateRight();
            },
            // 上传图片（点击上传按钮）
            finish(type) {
                console.log('finish', type)
                let _this = this;
                let formData = new FormData();
                // 输出
                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob((data) => {
                        formData.append('file', data, _this.fileName);
                        formData.append('type','avatar');
                       uploadFile(formData).then((res) => {
                           if (res.data.status == 0) {
                               this.$message({
                                   showClose: true,
                                   type:'success',
                                   message: '上传头像成功'
                               });
                           }
                           this.$store.dispatch('getUserInfo');
                       })
                    })

                } else {
                    this.$refs.cropper.getCropData((data) => {
                        console.log(data);
                        // this.model = true;
                        // this.modelSrc = data;
                    })
                }
            },
            // 实时预览函数
            realTime(data) {
                console.log('realTime')
                this.previews = data
            },
            // 下载图片
            down(type) {
                console.log('down')
                var aLink = document.createElement('a')
                aLink.download = 'author-img'
                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob((data) => {
                        this.downImg = window.URL.createObjectURL(data)
                        aLink.href = window.URL.createObjectURL(data)
                        aLink.click()
                    })
                } else {
                    this.$refs.cropper.getCropData((data) => {
                        this.downImg = data;
                        aLink.href = data;
                        aLink.click()
                    })
                }
            },
            // 选择本地图片
            uploadImg(e, num) {
                console.log('uploadImg');
                var _this = this;
                // 上传图片
                var file = e.target.files[0]
                _this.fileName = file.name;
                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                    alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
                    return false
                }
                var reader = new FileReader();
                reader.onload = (e) => {
                    let data;
                    if (typeof e.target.result === 'object') {
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]))
                    }
                    else {
                        data = e.target.result
                    }
                    if (num === 1) {
                        _this.option.img = data
                    } else if (num === 2) {
                        _this.example2.img = data
                    }
                }
                // 转化为base64
                // reader.readAsDataURL(file)
                // 转化为blob
                reader.readAsArrayBuffer(file);
            },
            imgLoad(msg) {
                console.log('imgLoad')
                console.log(msg)
            }
        }
    }
</script>

<style scoped lang="scss">
    .change_avatr_container {
        text-align: left;
        .avatar_container_body {
            text-align: left;
            .cropper-component {
                width: 500px;
                margin: 0 auto;
                position: relative;
                .btn-box {
                    margin: 20px 0;
                    .btn {
                        padding: 4px 12px;
                        text-align: center;
                        border-radius: 4px;
                        background-color: #387EF6;
                        color: #fff;
                        cursor: pointer;
                        display: inline-block;
                    }
                    .operation-btn {
                        width: 30px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        background-color: #fff;
                        border: 1px solid #eaeaea;
                        cursor: pointer;
                        display: inline-block;
                        font-size: 20px;
                        color: #333;
                        padding: 0;
                        margin: 0 10px;
                    }
                }
                .info-item {
                    display: flex;
                    flex-direction: column;
                    .mine {
                        display: flex;
                        margin-top: 20px;
                        .operation-box {
                            display: inline-block;
                            .cropper {
                                width: 260px;
                                height: 260px;
                            }
                        }
                        .preview-box {
                            margin-left: 50px;
                            .preview {
                                margin-top: 14px !important;
                                width: 150px;
                                height: 150px;
                                border-radius: 50%;
                                border: 1px solid #ccc;
                                background-color: #ccc;
                                margin: 5px;
                                overflow: hidden;
                            }
                        }
                    }

                }
            }
            .update_main {
                margin: 15px 0;
            }
        }
        .my_avatar {
            width: 120px;
            height: 120px;
        }
    }

</style>