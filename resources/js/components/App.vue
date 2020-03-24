<template>
  <div>
    <Loading :isLoading="isLoading" />
    <Header />
    <HomeCompnt />
    <Footer />
  </div>
</template>
<script>
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import Loading from './Layouts/Loading';
import axios from 'axios';
import HomeCompnt from './Home/Home';
export default {
  name: 'App',
  components: {
    HomeCompnt,
    Footer,
    Header,
    Loading
  },
  data() {
    return {
      isLoading: true,
      aa: { title: 'a' },
    }
  },
  created() {
    this.ajax();
  },
  mounted() {



  },
  methods: {

    ajax: function () {
      axios({
        method: 'get',
        url: 'http://www.mocky.io/v2/5e798b062d0000a29318bd8a',
      })
        .then(function (response) {
          console.log(response.data);
        });
    }
  },
}
</script>
