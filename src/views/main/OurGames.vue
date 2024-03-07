<script setup> 
  import TemplateContainer from '@/components/TemplateContainer.vue';
  import SectionHeaderComponent from '@/components/SectionHeaderComponent.vue';
</script>


<template>
    <div class="primary-bg pt-5">
      <TemplateContainer class="">
      <div class="row w-100 m-auto mb-3">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="title-container mb-5">
            <SectionHeaderComponent class="mb-4">
              <template #title>
                OUR GAMES
              </template>
            </SectionHeaderComponent>
          </div>
          <h2 class="text-white fw-medium mb-3">{{ ourGamesSectionData.title }}</h2>
          <p class=" sans-font m-md-0 m-auto text-center text-md-start px-0 text-white fw-lighter text-wrap">{{ourGamesSectionData.description}}</p>

        </div>
        <div class="col-lg-6">

        </div>
      </div>
      <div class="row w-100 m-auto">
        <div class=" col-xl-3 col-lg-6" v-for="(items, index) in ourGamesSectionData.games" >
          <div class="games m-auto" :style="{ 'background-image': 'url(' + items.images + ')' }" >
            <div class="backdrop-filter">

            </div>
          </div>
        </div>
      </div>
    </TemplateContainer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                ourGamesSectionData: {
                    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nibh interdum dapibus.',
                    description: 'Aenean placerat, nibh interdum dapibus ornare, leo urna luctus ligula, ut pellentesque magna ligula non arcu. Nunc lobortis malesuada magna et tincidunt.',
                    games: [
                        {
                        title: 'Beyond Borders',
                        images: './src/assets/images/beyond_border_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Edelstein Academy',
                        images: './src/assets/images/edelstein_academy_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Beyond Borders',
                        images: './src/assets/images/beyond_border_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Edelstein Academy',
                        images: './src/assets/images/edelstein_academy_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Edelstein Academy',
                        images: './src/assets/images/edelstein_academy_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Beyond Borders',
                        images: './src/assets/images/beyond_border_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Edelstein Academy',
                        images: './src/assets/images/edelstein_academy_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Beyond Borders',
                        images: './src/assets/images/beyond_border_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Beyond Borders',
                        images: './src/assets/images/beyond_border_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Edelstein Academy',
                        images: './src/assets/images/edelstein_academy_game_sample.png',
                        link: ''
                        },
                        {
                        title: 'Beyond Borders',
                        images: './src/assets/images/beyond_border_game_sample.png',
                        link: ''
                        }
                        ,
                        {
                        title: 'Edelstein Academy',
                        images: './src/assets/images/edelstein_academy_game_sample.png',
                        link: ''
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

  .games{
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    max-width: 300px;
    min-width: 200px;
    height: 300px;
  }

  .backdrop-filter{
    background: rgba(0, 0, 0, 0.60);
  }
</style>