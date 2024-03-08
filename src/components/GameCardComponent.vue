<script setup>
    import Utilities from '@/assets/services/Utilities';
</script>
<script>
    export default{
        props: {
            data: {
                type: Object
            }
        },
        methods: {
            iconSetter(icon) {
                return Utilities.iconSetter(icon);
            }
        }

    }
</script>

<template>
    <div class="card dark-grey-bg" >
        <img :src="data.images" class="card-img-top" alt="...">
        <div class="card-body">
            <h6 class="card-title primary-font">{{data.title}}</h6>
            <div class="icon-container m-auto mb-3 d-flex justify-content-start align-items-center">
                <i v-for="icons in data.platforms" :class="iconSetter(icons.type)" class="bi tertiary-font me-2 fs-6"></i>
            </div>
        </div>
        <div class="card-footer">
        
        </div>
    </div>
</template>

<style scoped>
    .card{
        max-width: 300px;
    }

    .card-img-top{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        max-height: 8rem;
    }
</style>