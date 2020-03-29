require("./bootstrap");
import app from "./app";
import Vue from "vue";
const router = app.$router;
import axios from "axios";
import CripLoading from "crip-vue-loading";
Vue.use(CripLoading, { axios });
router.beforeEach((to, from, next) => {
    let name = to.name.toLowerCase();
    if (name != "contact" && name != "homea" && name != "about") {
        window.scrollTo(0, 0);
    }
    next();
    $(".nav-link").removeClass("active");
});
var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -25,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
});

app.$mount("#app");
