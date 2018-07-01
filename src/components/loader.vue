<template>
    <span class="loader-wrapper" v-if="isLoading">
      <img src="../assets/img/loader.gif" :width="size" :height="size">
    </span>
</template>

<script>
    export default {
        name: "loader",
        props: {
          size: Number,
          isLoading: Boolean
        }
    }
</script>

<style scoped>
  .loader-wrapper img {
    height: 100%;
  }
</style>
