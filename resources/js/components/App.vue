<template>
  <div style="min-height: 100vh">
    <Loading
      v-if="isLoading"
      :isLoading="isLoading"
    />
    <Header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer />
  </div>
</template>
<script>
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Loading from "./Layouts/Loading";
import axios from "axios";
import $ from "jquery";
// import meta_data from "../meta/index.js";
import HomeCompnt from "./Home/Home";
import VueMeta from "vue-meta";
export default {
  metaInfo: {
    title: "Linhlatin",
    titleTemplate: "%s - Hello!",
  },
  name: "App",
  components: {
    HomeCompnt,
    Footer,
    Header,
    Loading,
  },
  data() {
    return {
      isLoading: true,
      aa: {
        title: "a",
      },
    };
  },
  created() { },
  mounted() {
    this.removeAttr();
    this.$nextTick(function () {
      this.isLoading = false;
    });
    // console.log(meta_data.get());
  },
  methods: {
    removeAttr: function () {
      $("div").removeAttr("data-server-rendered");
      $("[data-vue-meta=ssr]").remove();
    },
  },
};
</script>
