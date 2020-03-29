<template>
    <header>
        <nav
            :class="{ 'fixed-header': zfix }"
            class="navbar header-nav header-nav-white fixed-top navbar-expand-lg"
        >
            <div class="container">
                <!-- Brand -->
                <a class="navbar-brand" href="/"
                    >Linhlatin
                    <!-- <span class="theme-bg"></span> -->
                </a>
                <!-- / -->

                <!-- Mobile Toggle -->
                <button
                    class="navbar-toggler"
                    :click="(fix = true)"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarRyan"
                    aria-controls="navbarRyan"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <!-- / -->

                <!-- Top Menu -->
                <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarRyan"
                >
                    <ul class="navbar-nav">
                        <li>
                            <router-link
                                class="nav-link"
                                v-scroll-to="'#home'"
                                :to="{ name: 'home' }"
                                >Home
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                class="nav-link"
                                v-scroll-to="'#about'"
                                :to="{ name: 'about' }"
                                >About Me
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                class="nav-link"
                                v-scroll-to="'#contact'"
                                :to="{ name: 'contact' }"
                                >Home
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-link" to="aaaaaa"
                                >404
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- / -->
            </div>
            <!-- Container -->
        </nav>
        <!-- Navbar -->
    </header>
</template>
<script>
export default {
    data() {
        return {
            zfix: false,
        };
    },
    mounted() {
        this.activeNav();
        this.HeaderFixed();
        this.MenuClose();
        // window.addEventListener('scroll', this.HeaderSticky());
    },
    created() {
        // window.removeEventListener('scroll', this.HeaderSticky());
    },
    methods: {
        activeNav: function () {
            let path = window.location.pathname.split("/");
            let last_path = path.slice(-1)[0];
            let a = $("body").find(".navbar-nav").find("a");
            let element = document.getElementById(last_path);
            let aa = $("body").find(`a[href='/${last_path}']`);
            if (
                typeof element != "undefined" &&
                element != null &&
                typeof aa != "undefined" &&
                aa != null
            ) {
                setTimeout(() => {
                    let Scroll = this.$scrollTo("#" + last_path);
                }, 500);
                if (window.scrollY >= 50) {
                    this.fix = true;
                } else {
                    this.fix = false;
                }
                a.removeClass("active");
                $(aa).addClass("active");
            }
            $("body").on("click", ".navbar-nav a", function () {
                a.removeClass("active");
                $(this).addClass("active");
            });
        },
        HeaderFixed: function () {
            if (window.scrollY >= 50) {
                $("nav").addClass("fixed-header");
            } else {
                $("nav").removeClass("fixed-header");
            }
            $(window).on("scroll", function () {
                if (window.scrollY >= 50) {
                    $("nav").addClass("fixed-header");
                } else {
                    $("nav").removeClass("fixed-header");
                }
            });
        },
        MenuClose: function () {
            $(".navbar-nav .nav-link").on("click", function () {
                let toggle = $(".navbar-toggler").is(":visible");
                console.log(toggle);
                if (toggle) {
                    $(".navbar-collapse").collapse("hide");
                }
            });
        },
    },
};
</script>
