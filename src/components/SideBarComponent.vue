<template>
    <div>
       <div class="sidebar secondary-bg active">
            <div class="d-flex justify-content-around align-items-center border bottom-divider border-top-0 border-start-0 border-end-0 p-5 px-4">
                <div class="logo">

                </div>
                <div class="divider"></div>
                <div class="title">
                    <h2 class=" text-white">JT STUDIOS</h2>
                </div>
            </div>
            <div class="nav-items">
                <div class="items">
                    
                </div>
            </div>
       </div> 
    </div>
</template>

<style scoped>
    .sidebar{
        max-width: 300px;
        min-width: 300px;
        width: 100%;
        height: 100vh;
    }

    .divider{
        border: 1px solid grey;
        width: 1pxrem;
        height: 3rem;
    }

    .bottom-divider{
        border-color: var(--dark-grey) !important;
    }

    .logo{
        background-image: url('../assets/images/logo.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 48px;
        height: 54px;
    }

    
    @media screen and (max-width: 960px) {
        .sidebar{
            position: fixed;
            max-width: 300px;
            min-width: 300px;
            width: 100%;
            height: 100vh;
            margin-left: -100rem;
        }

        .sidebar.active{
            margin-left: 100rem;
        }


    }
</style>