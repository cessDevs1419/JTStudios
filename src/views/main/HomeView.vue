<script setup>
  
</script>
<script>
  export default {
    data(){
      return {
        heroSectionData:{
          title:'Beyond Borders: Love & Resilience',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat, felis euismod consectetur iaculis, nisl purus facilisis urna, nec posuere eros lacus in erat.',
          hero:'./src/assets/images/sample_hero.png',
          game_logo:'./src/assets/images/sample_logo.png',
          platforms: [
            {
              type: 'windows',
              link: ''
            },
            {
              type: 'apple',
              link: ''
            },
            {
              type: 'android',
              link: ''
            }
          ]
        }
      }
    },
    methods: {
      iconSetter(icon){
        switch(icon){
          case 'windows':
            return 'bi-windows'
          case 'apple':
            return 'bi-apple'
          case 'android':
            return 'bi-android2'
        }
      }
    }
  }
</script>

<template>
  <div class="hero-container mt-0 top-0 w-100" v-if="heroSectionData">
    <div class="hero w-100 h-100 mt-0" :style="{ 'background-image': 'url(' + heroSectionData.hero + ')' }">
      <div class="backdrop-filter d-flex justify-content-center flex-column align-items-center w-100 h-100">
        <div class="title-container mb-4 text-center">
          <div class="logo m-auto mb-3" :style="{ 'background-image': 'url(' + heroSectionData.game_logo + ')' }"></div>
          <h1 class="title text-white">{{heroSectionData.title}}</h1>
          <div class="icon-container m-auto mb-3 d-flex justify-content-around align-items-center">
            <i v-for="icons in heroSectionData.platforms" :class="iconSetter(icons.type)" class="bi text-white mx-2 fs-4"></i>
          </div>
          <p class="descripition m-auto text-white fw-lighter text-wrap">{{ heroSectionData.description }}</p>
        </div>
        <div class="button-container d-flex justify-content-center align-item-center flex-wrap">
          <router-link to="" class="text-decoration-none btn btn-danger bg-transparent mx-2 accent-border rounded-0 px-4 btn-lg">LEARN MORE</router-link>
          <router-link to=""class="text-decoration-none btn btn-danger  mx-2 rounded-0 px-4 accent-bg accent-border btn-lg">OFFICIAL SITE</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hero, .logo{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .logo{
    height: 150px;
    width: 400px;
  }

  .backdrop-filter{
    background: rgba(0, 0, 0, 0.60);
  }

  .hero-container{
    height: 100vh;
  }

  .icon-container{
    width: fit-content;
  }
  .descripition{
    max-width: 500px;
  }
  .accent-border{
    border-color: var(--accent-color);
  }
  .accent-bg{
    background: var(--accent-color);
  }
</style>
