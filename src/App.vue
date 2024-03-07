<script setup>
  import { useRouter } from 'vue-router';
  import { ref, watch } from 'vue';
  import NavbarComponent from './components/NavbarComponent.vue';
  import SideBarComponent from './components/SideBarComponent.vue';
  import PageHeaderComponent from './components/PageHeaderComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';

  const showNavbar = ref(true);
  const router = useRouter();
  const currentRoutePath = ref(router.currentRoute.value.path);
  const pageTitle = ref()

  watch(() => router.currentRoute.value.path, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      currentRoutePath.value = newValue;
      pageTitle.value = router.currentRoute.value.name;
      showNavbar.value = !newValue.startsWith('/admin');
    }
  });

</script>

<script>
  export default {
    components: {
      PageHeaderComponent,
      SideBarComponent
    }
  }
</script>

<template>

  <NavbarComponent v-if="showNavbar" >
  </NavbarComponent>

  <div class="d-flex mt-0 p-0">
    <SideBarComponent v-if="!showNavbar" >
    </SideBarComponent>

    <div class="container-fluid mt-0 p-0">
      <PageHeaderComponent :title="pageTitle" v-if="!showNavbar" >
      </PageHeaderComponent>
  
      <RouterView />
    </div>
  </div>

  <FooterComponent v-if="showNavbar"></FooterComponent>
  
</template>
