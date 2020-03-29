<template>
  <section
    id="home"
    class="home-banner-04 gray-bg"
  >
    <div class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <div
          class="col-md-6 full-screen my-photo"
          v-bind:style="{ 'background-image': 'url(' + banner.image || 'banner.jpg' + ')' }"
          Z
        ></div>

        <div class="col col-md-6 p-80px-tb">
          <div class="home-text-center">
            <h5 class="font-alt-">{{ banner.title }}</h5>
            <p v-html="banner.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    banner: Object,
  }
}
</script>
