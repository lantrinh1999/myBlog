<template>
  <header>
    <nav
      class="navbar header-nav header-nav-white fixed-top navbar-expand-lg"
      v-bind:class="{ 'fixed-header': fix }"
    >
      <div class="container">
        <router-link
          class="navbar-brand"
          v-scroll-to="'#home'"
          :to="{ name: 'home' }"
        >Linhlatin</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarRyan"
          aria-controls="navbarRyan"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span></span>
          <span></span>
          <span></span> -->
        </button>
        <!-- / -->

        <!-- Top Menu -->
        <div>
          <ul
            style="display: flex;"
            class="navbar-nav"
          >
            <li>
              <router-link
                class="nav-link"
                v-scroll-to="'#home'"
                :to="{ name: 'home' }"
              >Home</router-link>
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
              >Contact
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
import $ from "jquery";
export default {
  data() {
    return {
      fix: false,
    };
  },
  mounted() {
    // this.scroll()
    // this.HeaderFixed()
    this.HeaderSticky();
  },
  methods: {
    activeNav: function () {
      this.path = window.location.pathname;
    },
    HeaderFixed() {
      console.log(window.scrollY);
      if (window.scrollY >= 50) {
        this.fix = true;
      } else {
        this.fix = false;
      }
    },
    scroll: function () {
      $(window).on("scroll", function () {
        this.HeaderFixed();
      });
    },
    HeaderSticky: function () {
      $(".navbar-toggler").on("click", function (a) {
        a.preventDefault();
        $(".navbar").addClass("fixed-header");
      });
    },
  },
};
</script>

