<template>
  <!-- Loading -->

  <!-- / -->

  <!-- Header -->

  <!-- Header End -->

  <!-- Main Start -->

  <div>

    <Banner />
    <About />
    <Contact />
  </div>
  <!-- Main End -->

  <!-- Footer-->
</template>
<script>

import About from "./Section/About";
import Banner from "./Section/Banner";
import Contact from "./Section/Contact";
export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - Linhlatin",
  },
  name: "Home",
  components: {
    About,
    Banner,
    Contact
  },
};
</script>
