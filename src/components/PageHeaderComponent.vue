<script setup>
    import IconLogo from './icons/IconLogo.vue';
    import Utilities from '@/assets/services/Utilities';
</script>

<script>
    export default {
        props:{
            title: {
                type: String,
                required: true,
            }
        },

        methods:{
            iconSetter(icon) {
                return Utilities.iconSetter(icon);
            }
        }

    }
</script>
<template>
    <div>
        <nav class="navbar primary-bg position-fixed p-0 w-100 z-1" data-bs-theme="dark">
            <div class=" p-3 py-md-5 px-md-4 d-flex justify-content-start flex-wrap w-100">
                <!-- <button class="navbar-brand bg-transparent border-0 p-0 w-100 cursor-pointer" @click="showSideBar" >
                    <div class="d-flex justify-content-between justify-content-md-around align-items-center ">
                        <div class="logo">
            
                        </div>
                        <div class="divider"></div>
                        <div class="title">
                            <h2 class=" text-white m-0">JT STUDIOS</h2>
                        </div>
                    </div>
                </button> -->
                <button class="navbar-brand bg-transparent border-0 p-0 w-100 cursor-pointer btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                    <div class="d-flex justify-content-between justify-content-md-around align-items-center ">
                        <IconLogo></IconLogo>
                    </div>
                </button>

                <div class="body p-0">
                    <div class="title p-0 d-flex align-items-center primary-font">
                        <i class="bi my-0 fs-2 me-2 " :class="iconSetter(title)"></i>
                        <h2 class="m-0">
                            {{ title }}
                        </h2>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .navbar-brand{
        max-width: 230px;
        display: none;
    }

    .divider{
        border: 1px solid grey;
        width: 1px;
        height: 3rem;
    }


    .logo{
        background-image: url('../assets/images/logo.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 48px;
        height: 54px;
    }

    @media screen and (max-width: 960px) {
        .navbar-brand{
            display: block;
            max-width: 200px;
        }
        
        .logo{
            width: 38px;
            height: 44px;
        }
        .divider{
            height: 2rem;
        }

        .overlay{
            display: none;
            background: rgba(0, 0, 0, 0.753);
        }
    }

</style>