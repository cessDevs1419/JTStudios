<script setup>
    import Utilities from '@/assets/services/Utilities';
</script>
<script>
    export default{
        props: {
            data: {
                type: Object
            },
        },
        methods: {
            iconSetter(icon) {
                return Utilities.iconSetter(icon);
            }
        }

    }
</script>

<template>
    <div class="card dark-grey-bg m-auto" >
        <div class="card-header w-100 position-relative p-0 m-0">
            <div class="status-container position-absolute mt-2 ms-2 primary-bg border border-2 rounded-3 light-grey-border px-2 py-1">
                <h6 class="m-0 accent-color fw-light" v-if="data.status">{{data.status}}</h6>
            </div>
            <img :src="data.images" class="card-img-top" alt="...">
        </div>
        <div class="card-body p-3">
            <h6 class="card-title primary-font m-0 mb-1">{{data.title}}</h6>
            <div class="icon-container m-auto d-flex justify-content-start align-items-center">
                <i v-for="(icons, index) in data.platforms" :key="index" :class="iconSetter(icons.type)" class="bi tertiary-font me-2 fs-6"></i>
            </div>
        </div>
        <div class="card-footer light-grey-border justify-content-between d-flex align-items-center p-2">
            <div class="action-btn">
                <button class="btn-action btn btn-danger border-0 light-grey-bg me-2 p-0">
                    <i class="bi bi-pencil-square primary-font fs-5 m-0 "></i>
                </button>
                <button class="btn-action btn btn-danger border-0 light-grey-bg me-2  p-0">
                    <i class="bi bi-trash primary-font fs-5 m-0 "></i>
                </button>
                <button class="btn-action btn btn-danger border-0 light-grey-bg me-2  p-0">
                    <i class="bi bi-eye primary-font fs-5 m-0 "></i>
                </button>
            </div>
            <button class="btn-visit btn btn-danger d-flex align-items-center border-0 px-2 py-1 dark-grey-subtle-bg light-grey-font">
                <h6 class="m-0 me-1 fw-light">Visit Page</h6>
                <i class="bi bi-arrow-right fs-6 m-0 "></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
    .card{
        max-width: 300px;
    }
    .status-container{
        max-width: fit-content;
    }
    .card-img-top{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        max-height: 8rem;
    }

    .btn-action{
        width: 2rem;
        height: 2rem;
    }

    .btn-visit{
        height: 2rem;
    }
</style>