<script>
    export default {
    data() {
        return {
        isSidebarActive: false
        };
    },
    methods: {
            toggleSidebar() {
                this.isSidebarActive = !this.isSidebarActive;
            }
        }
    };
</script>

<template>
    <div class="sidebar secondary-bg border-0" :class="{ 'sidebar-active': isSidebarActive }" >
        <button @click="toggleSidebar" class="bg-transparent border-0 p-0 w-100">
            <div class=" d-flex justify-content-around align-items-center border bottom-divider border-top-0 border-start-0 border-end-0 p-5 px-md-4">
                <div class="logo">
    
                </div>
                <div class="divider"></div>
                <div class="title">
                    <h2 class=" text-white m-0">JT STUDIOS</h2>
                </div>
            </div>
        </button>
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
            <button class="btn btn-secondary p-3 px-4 bg-transparent border-0 rounded-2 w-100 d-flex align-items-center justify-content-between dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Game Management
            </button>
            <ul class="dropdown-menu border-0 mt-0 py-0 bg-transparent px-4 w-100">
              <li class="mt-0">
                <router-link class="rounded-2 p-3 text-decoration-none tertiary-font border-0 d-flex align-items-center" to="/admin/add-game">
                    <i class="bi bi-plus-lg me-2"></i>
                    <h6 class="m-0">Add New Game..</h6>
                </router-link>
              </li>
            </ul>
        </div>
    </div>

    <div class="overlay position-fixed w-100 h-100 " :class="{ 'd-block': isSidebarActive }" >
        
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
    
    .divider{
        border: 1px solid grey;
        width: 1px;
        height: 3rem;
    }


    .logo{
        background-image: url('../assets/images/logo.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 48px;
        height: 54px;
    }

	.router-link-active{
        background-color: var(--accent-color);
		color: var(--secondary-font);
	}



    @media screen and (max-width: 960px) {

        .sidebar{
            transform: translateX(-100%);
            transition: .3 s ease-out;
            position: fixed;
        }

        .sidebar-active{
            transform: translateX(0%);
            transition: .3 s ease-in;
        }
        
        .logo{
            width: 38px;
            height: 44px;
        }
        .divider{
            height: 2rem;
        }

        .overlay{
            display: none;
            background: rgba(0, 0, 0, 0.753);
        }
    }
</style>