<script setup>
    // import TemplateContainerVue from "@/components/TemplateContainer.vue";
</script>

<template>
    <div class="primary-bg">
        <div class="hero-section vh-100" v-for="(items, index) in heroSectionData" :key="index">
            <div class="hero w-100 h-100 mt-0" :style="{ 'background-image': 'url(' + items.hero + ')' }">
                <div class="backdrop-filter w-100 h-100 mt-0 d-flex align-items-center">
                    <div class="container-lg px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="game-logo m-auto mb-3" :style="{ 'background-image': 'url(' + items.game_logo + ')' }"></div>
                                <div class="accent-color fs-1"> {{ items.title }}</div>
                                <div class="text-white my-4 description-container sans-font">{{ items.description }}</div>
                                <div class="row text-white">
                                    <div class="col-md d-flex flex-row align-items-center">
                                        <p class="m-0">Available On</p>
                                        <div class="icon-container ms-3 d-flex text-start">
                                            <i v-for="icons in items.platforms" :class="iconSetter(icons.type)" class="bi text-white mx-2 fs-4"></i>
                                        </div>
                                        <p class="m-0 m-auto">RELEASE DATE <span class="mx-4">February 14, 2024</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            heroSectionData: [
                {
                    title:'Beyond Borders: Love & Resilience',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat, felis euismod consectetur iaculis, nisl purus facilisis urna, nec posuere eros lacus in erat. Aenean congue mauris eros, eleifend scelerisque mi porta vel. Quisque vestibulum elit velit, sed mollis ex volutpat quis. Curabitur ut lectus euismod, eleifend felis non, commodo massa.',
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
                    },  
                    {
                        type: 'linux',
                        link: ''
                    }
                    ]
                }
            ]
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

<style scoped>
.game-logo{
    background-repeat: no-repeat;
    background-size: contain;
    height: 150px;
    width: 100%;
  }

.description-container {
    max-width: 586px;
}

.hero{
    background-repeat: no-repeat;
    background-size: cover;
}

.backdrop-filter {
    background: linear-gradient(90deg, #0C0C0C 29.41%, rgba(0, 0, 0, 0.00) 100%);
}

.container-lg {
    max-width: 92.5rem;
}
</style>
