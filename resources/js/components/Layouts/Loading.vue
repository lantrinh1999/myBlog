<template lang="">
    <div v-if="isLoading" id="loading">
        <div class="load-circle"><span class="one"></span></div>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: Boolean,
    },
};
</script>

<style lang="css" scope></style>
