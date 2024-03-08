<script>
    props:{

    }
</script>
<template>
    
    <div class="title-container  ">
        <hr class="divider accent-border mb-2">
        <h2 class="dark-font accent-bg px-1">
            <slot name="title">

            </slot>
        </h2>
    </div>

</template>

<style scoped>
    .divider{
        width: 50%;
        border-width: .4rem;
    }
    .title-container{
        width: fit-content;
    }
</style>