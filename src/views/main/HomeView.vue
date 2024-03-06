<script setup>
  
</script>
<script>
  export default {
    data(){
      return {
        heroSectionData:{
          title:'Beyond Borders: Love & Resilience',
          description:'',
          hero:'./src/assets/images/sample_hero.png',
          game_logo:'./src/assets/images/sample_logo.png',
          platforms: [
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
    }
  }
</script>

<template>
  <div class="hero-container mt-0 top-0 w-100" v-if="heroSectionData">
    <div class="hero w-100 h-100 mt-0" :style="{ 'background-image': 'url(' + heroSectionData.hero + ')' }">
      <div class="backdrop-filter d-flex justify-content-center align-items-center w-100 h-100">
        <div class="title-container border">
          <div class="logo w-auto h-auto" :style="{ 'background-image': 'url(' + heroSectionData.game_logo + ')' }"></div>
          <h1 class="title text-white">{{heroSectionData.title}}</h1>
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
</style>
