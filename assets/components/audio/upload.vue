<template>
    <div class="audio-upload">
        <form enctype="multipart/form-data" novalidate class="upload-form text-center" v-show="showForm">
            <p>You can upload not more that {{ maxFiles }} files at once</p>
            <p>Each file should be less than 50MB</p>
            <p>Allowed file types are <code>mp3</code> and <code>m4a</code></p>
            <a href="#" class="btn btn-primary btn-icon-split" @click="$refs.file.click()">
                <span class="icon text-white-50"><i class="fas fa-upload"></i></span>
                <span class="text">Select files</span>
            </a>
            <input type="file" multiple name="audio" ref="file" @change="onAddFiles($event.target.files)"
                   accept="audio/mp3, audio/mp4">
        </form>
        <div class="audio-upload-list text-sm-left" v-show="!showForm">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm-1">#</div>
                        <div class="col-sm-4">Filename</div>
                        <div class="col-sm-2">Title</div>
                        <div class="col-sm-2">Artist</div>
                        <div class="col-sm-2">Album</div>
                        <div class="col-sm-1"></div>
                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="file in files">
                        <div class="row">
                            <div class="col-sm-1">
                                <i class="fa fa-check" v-if="file.audio"></i>
                                <i class="fas fa-circle-notch fa-spin" v-if="!file.audio"></i>
                            </div>
                            <div class="col-sm-4">
                                {{ file.file.name }}
                            </div>
                            <div class="col-sm-2">
                                <input type="text"
                                       v-if="file.audio"
                                       v-model="file.audio.title"
                                       @input="fileChanged(file)"
                                       class="form-control form-control-sm">
                            </div>
                            <div class="col-sm-2">
                                <select class="form-control form-control-sm"
                                        v-if="file.audio"
                                        v-model="file.audio.artist"
                                        @input="fileChanged(file)">
                                    <option v-for="artist in file.artists" :value="artist">
                                        {{ artist.title }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-sm-2">
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-sm"
                                           v-if="file.audio"
                                           v-model="file.audio.album.title"
                                           @input="fileChanged(file)">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" @click="showModal = true;">Choose</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-1" v-if="file.audio">
                                <button class="btn btn-danger btn-sm" :disabled="!file.audio">
                                    <i class="fa fa-times"></i>
                                </button>
                                <button class="btn btn-success btn-sm float-right" :disabled="!file.changed">
                                    <i class="fa fa-save"></i>
                                </button>
                            </div>
                        </div>
                        <div class="progress progress-sm mb-2" v-if="!file.audio">
                            <div class="progress-bar" role="progressbar" :style="{width: file.loaded + '%'}"></div>
                        </div>
                    </li>
                </ul>
                <div class="card-footer text-right">
                    <button :disabled="!allFilesUploaded" class="btn btn-primary btn-icon-split btn-sm"
                            @click="reset()">
                        <span class="icon text-white-50"><i class="fas fa-upload"></i></span>
                        <span class="text">Upload More</span>
                    </button>
                    <button :disabled="!modelsChanged" class="btn btn-success btn-icon-split btn-sm">
                        <span class="icon text-white-50"><i class="fas fa-save"></i></span>
                        <span class="text">Save All</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import AlbumSelect from '../widgets/album-select';

    const MAX_UPLOADED_FILES = 10;

    export default {
        data() {
            return {
                showForm: true,
                showModal: false,
                maxFiles: MAX_UPLOADED_FILES,

                files: [],
                allFilesUploaded: false,
                modelsChanged: false
            };
        },
        mounted() {
        },
        components: {
            AlbumSelect
        },
        methods: {
            reset() {
                this.showForm = true;
                this.files = [];
                this.allFilesUploaded = false;
                this.modelsChanged = false
            },
            fileChanged(file) {
                file.changed = true;
                this.modelsChanged = true;
            },
            uploadComplete() {
                let uploaded = true;
                this.files.forEach(file => {
                    if (!file.audio) {
                        uploaded = false;
                    }
                });

                return uploaded;
            },
            onAddFiles(files) {
                if (!files.length) {
                    this.error = 'Please select files to upload';
                    return;
                }
                if (files.length > MAX_UPLOADED_FILES) {
                    this.error = 'You can upload not more than ' + MAX_UPLOADED_FILES + ' files at once';
                    return;
                }
                this.showForm = false;

                for (let i = 0; i <= files.length; i++) {
                    const file = files[i];
                    if (!file) {
                        continue;
                    }

                    let formData = new FormData();
                    formData.append('audio', file);
                    this.files.splice(i, 0, {
                        file: file,
                        loaded: 0,
                        audio: null,
                        changed: false,
                        artists: [],
                        albums: []
                    });

                    axios.post('/index.php/api/audio/upload', formData, {
                        onUploadProgress: event => {
                            this.files[i]['loaded'] = Math.round(event.loaded * 100 / event.total);
                        },
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(data => {
                        this.files[i]['audio'] = data.data.audio;
                        this.files[i]['artists'] = data.data.artists;
                        this.files[i]['albums'] = data.data.albums;
                        this.allFilesUploaded = this.uploadComplete();

                    }).catch(error => console.warn('FAILURE!!', error));
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    .audio-upload-list {
        margin: -73px -20px;

        .list-group-item {
            position: relative;

            .progress {
                border-radius: 0;
                position: absolute;
                height: 100%;
                width: 100%;
                left: 0;
                top: 0;
                opacity: .1;
            }
        }
    }

    .upload-form {
        input {
            display: none;
        }
    }
</style>