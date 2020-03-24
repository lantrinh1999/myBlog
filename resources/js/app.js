import Vue from 'vue';
import App from './components/App';
import router from './router';
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

// You can also pass in the default options
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
export default new Vue({
    render: h => h(App),
    router,
    watch: {
        $route(to, from) {
            document.title = to.meta.title || 'Linhlatin';
        },

    },
    created() {
        this.pageTitle();
    },
    mounted() {
        this.pageTitle();
    },
    methods: {
        pageTitle: function () {
            const DEFAULT_TITLE = 'Linhlatin';
            router.beforeEach((to, from, next) => {
                document.title = to.meta.title || DEFAULT_TITLE;
                next();
            })
            router.afterEach((to, from) => {
                Vue.nextTick(() => {
                    document.title = to.meta.title || DEFAULT_TITLE;
                });
            });
        }
    },
});
