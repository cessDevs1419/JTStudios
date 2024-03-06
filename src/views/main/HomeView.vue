<script setup>
  import TemplateContainer from '@/components/TemplateContainer.vue';
  import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
  import IconLogo from '@/components/icons/IconLogo.vue';
</script>
<script>
  export default {
    data(){
      return {
        heroSectionData:[
          {
            title:'Beyond Borders: Love & Resilience',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat, felis euismod consectetur iaculis, nisl purus facilisis urna, nec posuere eros lacus in erat.',
            hero:'./src/assets/images/sample_hero.png',
            game_logo:'./src/assets/images/sample_logo.png',
            official_link: '',
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
          },
          {
            title:'Edelstein Academy',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat, felis euismod consectetur iaculis, nisl purus facilisis urna, nec posuere eros lacus in erat.',
            hero:'./src/assets/images/sample_hero.png',
            game_logo:'./src/assets/images/sample_logo.png',
            official_link: '',
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
              },
              {
                type: 'linux',
                link: ''
              }
            ]
          },
        ],
        aboutUsSectionData: {
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales blandit sapien, quis ultrices velit vestibulum eget. Pellentesque a lacus nibh. Cras eget tortor cursus, fringilla enim eget, feugiat nibh. Integer placerat aliquet vestibulum. Nunc mollis elementum nisl id vestibulum. Donec finibus rhoncus dolor, ut gravida eros ultricies commodo.  Aenean placerat, nibh interdum dapibus ornare, leo urna luctus ligula, ut pellentesque magna ligula non arcu. Nunc lobortis malesuada magna et tincidunt.',
          image: './src/assets/images/sample_aboutus.png'
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
          case 'linux':
            return 'bi-ubuntu'
        }
      }
    }
  }
</script>

<template >
  <div class="primary-bg">
    <div id="carouselExample" class="carousel slide hero-container" v-if="heroSectionData">
      <div class="carousel-inner"> 
        <div class="carousel-item " :class="{'active' : index === 0}" v-for="(items, index) in heroSectionData" :key="index">
          <div class="hero-container mt-0 top-0 w-100" >
            <div class="hero w-100 h-100 mt-0" :style="{ 'background-image': 'url(' + items.hero + ')' }">
              <div class="backdrop-filter d-flex justify-content-center flex-column align-items-center w-100 h-100">
                <TemplateContainer>
                  <div class="title-container mb-4 text-center">
                    <div class="logo m-auto mb-3" :style="{ 'background-image': 'url(' + items.game_logo + ')' }"></div>
                    <h1 class="title text-white">{{items.title}}</h1>
                    <div class="icon-container m-auto mb-3 d-flex justify-content-around align-items-center">
                      <i v-for="icons in items.platforms" :class="iconSetter(icons.type)" class="bi text-white mx-2 fs-4"></i>
                    </div>
                    <p class="description m-auto text-white fw-lighter text-wrap">{{ items.description }}</p>
                  </div>
                  <div class="button-container d-flex justify-content-center align-item-center flex-wrap mt-4">
                    <router-link to="" class="text-decoration-none btn btn-danger bg-transparent mx-2 accent-border rounded-0 px-5 btn-lg">LEARN MORE</router-link>
                    <router-link to=""class="text-decoration-none btn btn-danger  mx-2 rounded-0 px-5 accent-bg accent-border btn-lg">OFFICIAL SITE</router-link>
                  </div>
                </TemplateContainer>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <i class="bi bi-chevron-left fs-1 accent-color" aria-hidden="true"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <i class="bi bi-chevron-right fs-1 accent-color" aria-hidden="true"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <TemplateContainer>
      <div class="row w-100 m-auto">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="title-container mb-5">
            <SectionHeaderComponent class="mb-4">
              <template #title>
                ABOUT US
              </template>
            </SectionHeaderComponent>
          </div>
          <div class="logo-container mx-md-0 mx-auto px-0 mb-4">
            <IconLogo></IconLogo>
          </div>
          <p class="description m-md-0 m-auto text-center text-md-start px-0 text-white fw-lighter text-wrap">{{aboutUsSectionData.description}}</p>
          <div class="button-container  d-flex justify-content-center  justify-content-md-start align-item-center flex-wrap mt-5">
            <router-link to="" class="text-decoration-none btn btn-danger bg-transparent accent-border rounded-0 px-5 btn-lg">LEARN MORE</router-link>
          </div>
        </div>
        <div class="col-lg-6">
          <img class="h-100 w-100" :src="aboutUsSectionData.image" alt="">
        </div>
      </div>
    </TemplateContainer>
    <TemplateContainer>
      <div class="title-container mb-5 px-3">
            <SectionHeaderComponent class="mb-4">
              <template #title>
                  OUR GAMES
              </template>
            </SectionHeaderComponent>
      </div>
    </TemplateContainer>
  </div>

</template>

<style scoped>
  .accent-border{
    border-color: var(--accent-color);
  }
  .accent-bg{
    background: var(--accent-color);
  }

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
  .description{
    max-width: 500px;
  }

  .logo-container{
    max-width: 220px;
  }
</style>
