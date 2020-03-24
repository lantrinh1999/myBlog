<template>
  <!-- Loading -->

  <!-- / -->

  <!-- Header -->

  <!-- Header End -->

  <!-- Main Start -->
  <main>

    <Banner />
    <About />
    <Contact />

  </main>
  <!-- Main End -->

  <!-- Footer-->

</template>
<script>
import About from './Section/About';
import Banner from './Section/Banner';
import Contact from './Section/Contact';
export default {
  name: "Docs",
  components: {
    About,
    Banner,
    Contact,
  }
}

</script>
