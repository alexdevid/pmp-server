<template>
    <form enctype="multipart/form-data" novalidate class="upload-form">
        <p>You can upload not more that 10 files at once</p>
        <p>Each file should be less than 50MB</p>
        <p>Allowed file types are <code>mp3</code> and <code>m4a</code></p>
        <a href="#" class="button file-select" @click="$refs.file.click()">Select files</a>
        <input type="file" multiple name="audio" ref="file" @change="onAddFiles($event.target.files)" accept="audio/mp3, audio/mp4">
    </form>
</template>

<script>
    const MAX_UPLOADED_FILES = 10;

    export default {
        data() {
            return {
                error: null,

                filesToUpload: []
            };
        },
        mounted() {
            console.log(this.message);
        },
        methods: {
            onAddFiles(files) {
                console.log(files)
                if (!files.length) {
                    this.error = 'Please select files to upload';
                    return;
                }
                if (files.length > MAX_UPLOADED_FILES) {
                    this.error = 'You can upload not more than ' + MAX_UPLOADED_FILES + ' files at once';
                    return;
                }

                this.filesToUpload = files;
                console.log(this.filesToUpload);
            }
        }
    };
</script>

<style lang="less" scoped>
    .upload-form {
        padding: 30px 20px;
        p {
            margin: 5px;
        }
        input {
            display: none;
        }
        .file-select {
            display: inline-block;
            margin-top: 30px;
        }
    }
</style>