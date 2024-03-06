
<script setup>
  import IconLogo from './icons/IconLogo.vue';
</script>
<script>
  export default {
    data() {
      return {
        isScrolled: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 10; 
      }
    }
  };
</script>

<template>
    <nav class="navbar navbar-expand-lg position-fixed p-0 w-100" >
        <div class="navbar-container container-fluid py-2" :class="{ 'primary-bg': isScrolled }">
          <IconLogo></IconLogo>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav w-100 d-flex justify-content-lg-end justify-content-start px-3 ">
              <li class="nav-item mx-3">
                <router-link to="/" class="nav-link text-white px-1">Home</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/about" class="nav-link text-white px-1">About Us</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/games" class="nav-link text-white px-1">Our Games</router-link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>

<style scoped>
    .navbar{
        background: linear-gradient(180deg, rgba(30, 30, 30, 0.75) 50%, rgba(0, 0, 0, 0.00) 100%);
        z-index: 1099;
      }
    
    .navbar-container {
        transition: .3s ease-in-out;
    }

    .router-link-active{
      border-bottom: solid var(--accent-color);
      border-bottom-width: .25rem;
    }

    @media screen and (max-width: 991px) {
      .navbar-container {
          background-color: var(--primary-color);
      }
    }
</style>