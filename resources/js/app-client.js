require("./bootstrap");
import app from "./app";
import Vue from "vue";
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

app.$mount("#app");
