
<script setup>
    import AdminContainerComponent from '@/components/AdminContainerComponent.vue';
    import GameCardComponent from '@/components/GameCardComponent.vue';
</script>
<script>
    export default {
        data(){
            return {
                sampleData: 
                [
                    {
                        title:'Beyond Borders: Love & Resilience',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat, felis euismod consectetur iaculis, nisl purus facilisis urna, nec posuere eros lacus in erat.',
                        images:'./src/assets/images/sample_hero.png',
                        official_link: '',
                        status: '',
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
                        title:'Lucid Melody',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat, felis euismod consectetur iaculis, nisl purus facilisis urna, nec posuere eros lacus in erat.',
                        images:'./src/assets/images/sample_hero.png',
                        official_link: '',
                        status: 'UNPUBLISHED',
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
                        images:'./src/assets/images/sample_hero.png',
                        official_link: '',
                        status: 'HIDDEN',
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
                ]
            }
        }
    }
</script>
<template>
    <AdminContainerComponent>
        <div class="border h-100">
            <div class="header w-100 justify-content-between d-flex align-items-center flex-md-row flex-column">
                <div class="title d-flex align-items-center primary-font mb-3">
                    <i class="bi bi-controller  fs-3"></i>
                    <h3 class="mx-2 m-0">Games ({{ sampleData.length }})</h3>
                </div>
                <div class="tools d-flex align-items-center flex-md-nowrap flex-wrap mb-3">
                    <div class="input-group bg-transparent sans-font mb-3 mb-md-0">
                        <span class="input-group-text rounded-end-0 border-0 rounded-2 border-end-0 searchbar-grey"  >
                            <i class="bi bi-search fs-5 tertiary-font"></i>
                        </span>
                        <input type="text" class="form-control rounded-start-0 border-0 rounded-2 border-start-0 tertiary-font searchbar-grey" placeholder="Search . . " aria-label="Search" >
                    </div>
                    <router-link to="/admin/add-game" class="route-btn d-flex align-items-center text-decoration-none btn btn-danger rounded-2 mx-0 mx-md-2 rounded-0 px-4 accent-bg accent-border ">
                        <i class="bi bi-plus fs-3 secondary-font"></i> <p class="m-0 text-nowrap secondary-font">Add Game</p>
                    </router-link>
                </div>
            </div>
            <div class="row w-100 m-auto mt-5 px-0">
                <div v-for="(items, index) in sampleData" :key="index" class="col-xl-4 col-lg-6 m-auto mb-3">
                    <GameCardComponent
                        :data="items"
                    ></GameCardComponent>
                </div>
            </div>
        </div>
    </AdminContainerComponent>
</template>

<style scoped>
.accent-border{
    border-color: var(--accent-color);
}
.accent-bg{
    background: var(--accent-color);
}

</style>