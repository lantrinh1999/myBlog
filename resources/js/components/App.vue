<template>
  <div>
    <router-link to="/home">HOME</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
// import Footer from './Layouts/Footer';
// import Header from './Layouts/Header';
// import Loading from './Layouts/Loading';
import axios from 'axios';
import HomeCompnt from './Home/Home';
export default {
  name: 'App',
  components: {
    // HomeCompnt,
    // Footer,
    // Header,
    // Loading
  },
  data() {
    return {
      isLoading: true,
      aa: { title: 'a' },
    }
  },
  created() {
    // this.ajax();
  },
  mounted() {



  },
  methods: {
  },
}
</script>
