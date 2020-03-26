import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home/Home.vue";
// import About from '../components/Home/Section/About.vue';
//  import Banner from '../components/Home/Section/Banner.vue';

// import Contact from '../components/Home/Section/Contact.vue';
const routes = [{
    path: '/',
    name: 'home',
    component: Home,
},
{
    path: '/about',
    name: 'about',
    component: Home,
},
{
    path: '/contact',
    name: 'contact',
    component: Home,
}
];

Vue.use(Router);

export default new Router({
    mode: "history",
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes,
});

