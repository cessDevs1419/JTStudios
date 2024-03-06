<template>          
<a class="text-decoration-none logo-container m-0 p-0">
    <div class="w-100 d-flex align-items-center m-0 p-0 ">
        <div class="logo">

        </div>
        <div class="divider mx-3"></div>
        <div class="title h-100 d-flex align-items-center">
            <h3 class=" text-white m-0">JT STUDIOS</h3>
        </div>
    </div>      
</a>

</template>

<style scoped>
    .logo-container{
        width: 100%;
        max-width: fit-content;
    }

    .logo{
        background-image: url('./src/assets/images/logo.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 48px;
        height: 45px;
    }

    .divider{
        border: 1px solid grey;
        width: 1px;
        height: 2.5rem;
    }
</style>