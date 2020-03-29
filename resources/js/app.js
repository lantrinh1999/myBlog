import Vue from "vue";
import App from "./components/App";
import VueMeta from "vue-meta";
import axios from "axios";
Vue.prototype.$axios = axios;

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});
// import Vuex from "vuex";
import router from "./router";

export default new Vue({
    render: (h) => h(App),
    router,
    metaInfo: {
        title: "Linhlatin",
        titleTemplate: "%s - Hello",
        meta: [
            {
                charset: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                "data-hid": "mobile-web-app-capable",
                name: "mobile-web-app-capable",
                content: "yes",
            },
            {
                "data-hid": "apple-mobile-web-app-title",
                name: "apple-mobile-web-app-title",
                content: "vjd-website",
            },
            {
                "data-hid": "author",
                name: "author",
                content: "Linhlatin",
            },
            {
                "data-hid": "theme-color",
                name: "theme-color",
                content: "#3B8070",
            },
            {
                "data-hid": "twitter:site",
                name: "twitter:site",
                content: "@linhlatin",
            },
            {
                "data-hid": "description",
                name: "description",
                content: "Linhlatin",
            },
            {
                "data-hid": "og:site_name",
                property: "og:site_name",
                content: "Linhlatin",
            },
            {
                "data-hid": "og:title",
                property: "og:title",
                content: "Linhlatin",
            },
            {
                "data-hid": "og:type",
                property: "og:type",
                content: "Linhlatin",
            },
            {
                "data-hid": "og:description",
                property: "og:description",
                content: "Linhlatin",
            },
            {
                "data-hid": "og:url",
                property: "og:url",
                content: "https://linhlatin.com",
            },
            {
                "data-hid": "og:image",
                property: "og:image",
                content: "https://i.imgur.com/ZINLGQO.jpg",
            },
            {
                "data-hid": "twitter:creator",
                property: "twitter:creator",
                content: "@linhlatin",
            },
            {
                "data-hid": "twitter:title",
                property: "twitter:title",
                content: "Linhlatin",
            },
            {
                "data-hid": "twitter:url",
                property: "twitter:url",
                content: "https://linhaltin.com",
            },
            {
                "data-hid": "twitter:description",
                name: "twitter:description",
                content: "",
            },
            {
                "data-hid": "twitter:image:src",
                property: "twitter:image:src",
                content: "https://i.imgur.com/ZINLGQO.jpg",
            },
            {
                rel: "manifest",
                href: "/",
            },
            {
                rel: "shortcut icon",
                href: "https://i.imgur.com/ZINLGQO.jpg",
            },
            {
                rel: "apple-touch-icon",
                href: "https://i.imgur.com/ZINLGQO.jpg",
            },
        ],
        htmlAttrs: {
            lang: "vi",
            amp: true,
        },
    },
});
