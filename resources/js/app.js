
import Vue from 'vue';
import App from './components/App';
import Vuex from 'vuex';
import router from './router';
Vue.use(Vuex);
export default new Vue({
    render: h => h(App),
    router,
});
