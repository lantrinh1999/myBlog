import axios from 'axios';
import Vue from "vue";
axios.setBaseURL('/api');
Vue.use(axios);


export default axios;
