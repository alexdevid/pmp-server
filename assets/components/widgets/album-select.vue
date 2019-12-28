<template>
    <div class="album-select">
        <input type="text" class="form-control form-control-sm">
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action" v-for="album in albums">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ album.title }}</h5>
                    <small>3 tracks</small>
                </div>
                <p class="mb-1">{{ album.artist.title }}</p>
                <small>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                    blandit.</small>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            model: {
                type: Object,
                required: false
            },
            albums: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>
    .album-select {
        position: relative;

        .list-group {
            position: absolute;
            width: 300px;
            left: -25px;
            top: 35px;
            border: 1px solid rgba(0, 0, 0, .125);
        }
    }
</style>