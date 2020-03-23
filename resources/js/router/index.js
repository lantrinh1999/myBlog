import Vue from 'vue';
import Router from 'vue-router';


// import Home from '@/components/Home';
// import Docs from '@/components/Docs';
// // Docs's children
// import DocsBlock from '@/components/Docs/DocsBlock';
// import Dev from '@/components/Dev';
// import Support from '@/components/Support';
// import PageNotFound from '@/components/PageNotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
//   routes: [{
//       path: "*",
//       name: 'PageNotFound',
//       component: PageNotFound,
//     },
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/docs',
//       name: 'Docs',
//       component: Docs,
//       children: [
//         {
//           path: ':id',
//           component: DocsBlock,
//           props: true
//         },
//       ],
//     },
//     {
//       path: '/dev',
//       name: 'Dev',
//       component: Dev
//     },
//     {
//       path: '/support',
//       name: 'Support',
//       component: Support
//     },

//     ],
})
