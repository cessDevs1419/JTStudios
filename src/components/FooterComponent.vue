<template>
    <div class="footer-container sans-font footer-bg text-white p-0">
        <div class="container-fluid px-5 pt-5">
            <div class="footer-info row w-100 m-auto">
                <div class="col-lg-3">
                    <div class="row text-left">
                        <div class="col-lg-2">
                            <img src="../assets/images/logo.png" alt="" srcset="">
                        </div>
                        <div class="col-lg-10 ml-1">
                            <h1><span class="divider mx-3" style="height: 53px; border-right: 2px solid white;"></span>JT STUDIOS</h1>
                        </div>
                    </div>
                    <div class="row tertiary-font pt-3">
                        <p style="font-size: 12px;">Aenean placerat, nibh interdum dapibus ornare, leo urna luctus ligula, ut pellentesque magna ligula non arcu. Nunc lobortis malesuada magna et tincidunt.</p>
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-2">
                    <p class="footer-header fw-bold">
                        JT Studios
                    </p>
                    <ul class="JTStudio-links m-0 p-0">
                        <li class="my-2">
                        <router-link to="/">Home</router-link>
                        </li>
                        <li class="my-2">
                        <router-link to="/">About Us</router-link>
                        </li>
                        <li class="my-2">
                        <router-link to="/">Our Games</router-link>
                        </li>
                        <li class="my-2">
                        <router-link to="/">Contact Us</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2">
                    <p class="footer-header fw-bold">
                        Our Games
                    </p>
                    <ul class="JTStudio-links m-0 p-0">
                        <li class="my-2">
                        <router-link to="/">Beyond Borders</router-link>
                        </li>
                        <li class="my-2">
                        <router-link to="/">Edelstein Academy</router-link>
                        </li>
                        <li class="my-2">
                        <router-link to="/">Lucid Melody</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2">
                    <p class="footer-header fw-bold">
                        Other
                    </p>
                    <ul class="JTStudio-links m-0 p-0">
                        <li class="my-2">
                        <router-link to="/">About</router-link>
                        </li>
                        <li class="my-2">
                        <router-link to="/">Privacy Policy</router-link>
                        </li>
                        <li class="my-2">
                        <router-link to="/">Terms of Service</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2">
                    <p class="footer-header fw-bold">
                        Follow Us
                    </p>
                    <i class="icon bi bi-facebook accent-font mx-2" style="font-size: 16px;"></i><i class="icon bi bi-instagram accent-font mx-2 " style="font-size: 16px;"></i><i class="icon bi bi-twitter-x mx-2 accent-font" style="font-size: 16px;"></i>
                </div>
            </div>
            <hr class="tertiary-font">
            <p class="copyright text-center tertiary-font py-2">
                All Rights Reserved. JT Studios 2023.
            </p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    .footer-container li {
        list-style-type: none;
    }
    .footer-container a {
        text-decoration: none;
        font-size: 14px;
        color: #FFF;
    }

    .footer-container a:hover{
        color: var(--accent-color);
        font-weight: 600;
    }
</style>