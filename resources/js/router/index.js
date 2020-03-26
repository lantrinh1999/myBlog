import Vue from 'vue';
import Router from 'vue-router';


import Home from '../components/Home/Home.vue';

const routes = [{
    path: '/home',
    name: 'home',
    component: Home,
},
];


Vue.use(Router);

export default new Router({
    mode: 'history',
    // linkActiveClass: "active",
    // linkExactActiveClass: "exact-active",
    routes,
})

