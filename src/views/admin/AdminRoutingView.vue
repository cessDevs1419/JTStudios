<script setup>
    import SideBarComponent from '@/components/SideBarComponent.vue';
    import { RouterView } from 'vue-router';
</script>
<template>
    <SideBarComponent>
    </SideBarComponent>

    <RouterView />
</template>