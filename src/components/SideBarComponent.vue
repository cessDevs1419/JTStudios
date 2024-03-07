<script setup>
import IconLogo from './icons/IconLogo.vue';


</script>
<script>
    export default {
    data() {
        return {
        isSidebarActive: false,
        show: false
        };
    },
    methods:{
        showMenu() {
            this.show = !this.show;
        }
    }
    };
</script>

<template>
    <div class="offcanvas-lg offcanvas-start sidebar px-0 secondary-bg border-0" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
        <div class="offcanvas-header px-0">
            <button type="button" class="btn w-100 bg-none d-flex justify-content-around bottom-divider align-items-center border border-top-0 border-start-0 border-end-0 p-5 px-md-4" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close">
                <IconLogo class=""></IconLogo>
            </button>
        </div>
        <div class="sidebar overflow-y-auto">
            <div class="d-none d-lg-flex justify-content-around bottom-divider align-items-center border border-top-0 border-start-0 border-end-0 p-5 px-md-4">
                <IconLogo class=""></IconLogo>
            </div>
            <div class="nav-items p-4">
                <router-link class="rounded-2 p-3 text-decoration-none primary-font d-flex align-items-center" to="/admin">
                    <i class="bi bi-house-door me-2"></i>
                    <h6 class="m-0">Game Overview</h6>
                </router-link>
                <router-link class="rounded-2 p-3 text-decoration-none primary-font d-flex align-items-center" to="/admin/content-management">
                    <i class="bi bi-gear me-2"></i>
                    <h6 class="m-0">Content Management</h6>
                </router-link>
                <router-link class="rounded-2 p-3 text-decoration-none primary-font d-flex align-items-center" to="/admin/site-settings">
                    <i class="bi bi-file-richtext me-2"></i>
                    <h6 class="m-0">Site Settings</h6>
                </router-link>
            </div>
            <div class="dropdown mt-3 w-100">
                <button @click="showMenu" class="btn btn-secondary p-3 px-4 bg-transparent border-0 rounded-2 w-100 d-flex align-items-center justify-content-between dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Game Management
                </button>
                <ul v-if="show" class=" border-0 mt-0 py-0 bg-transparent px-4 w-100">
                    <li class="mt-0">
                        <router-link class="rounded-2 p-3 text-decoration-none tertiary-font border-0 d-flex align-items-center" to="/admin/add-game">
                            <i class="bi bi-plus-lg me-2"></i>
                            <h6 class="m-0">Add New Game..</h6>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .sidebar{
        z-index: 1099;
        max-width: 300px;
        min-width: 300px;
        width: 100%;
        height: 100vh;
    }
    
    

    .bottom-divider{
        border-color: var(--dark-grey) !important;
    }

	.router-link-active{
        background-color: var(--accent-color);
		color: var(--secondary-font);
	}

    .secondary-bg{
        background-color: var(--secondary-color) !important;
    }

</style>