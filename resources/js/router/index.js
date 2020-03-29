import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home/Home.vue";
import PageNotFound from "../components/PageNotFound.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            keepAlive: true
        },
    },
    {
        path: "/about",
        name: "about",
        component: Home,
        meta: {
            keepAlive: true
        },
    },
    {
        path: "/contact",
        name: "contact",
        component: Home,
        meta: {
            keepAlive: true
        },
    },
    {
        path: "404",
        name: "PageNotFound",
        component: PageNotFound,
        meta: {
            keepAlive: true
        },
    },
    {
        path: "*",
        redirect: {
            name: "PageNotFound",
        },
        meta: {
            keepAlive: true
        },
    },
    {
        path: "/vuichoi-giaitri",
        name: "entertainment",
        component: require("../components/Entertainment/App.vue"),
    },
];

Vue.use(Router);

export default new Router({
    mode: "history",
    linkActiveClass: "active",
    // linkExactActiveClass: "exact-active",
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({
    //                 x: 0,
    //                 y: 0,
    //                 behavior: 'smooth'
    //             })
    //         }, 0)
    //     })
    // }
});
