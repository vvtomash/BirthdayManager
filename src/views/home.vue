<template>
  <main class="wrap">
    <custom-header/>
    <section class="home">
      <div class="title">Home</div>
      <div class="info">This is Home page</div>
      <div
        class="content"
        @click="doSomething">{{ result }}</div>
    </section>
    <custom-footer/>
  </main>
</template>
<script>
import CustomHeader from '../components/header.vue';
import CustomFooter from '../components/footer.vue';

export default{
  components: { CustomHeader, CustomFooter },
  data() {
    return {
      result: 'Click me pls',
    };
  },
  methods: {
    doSomething() {
      this.result = 'Success';
    },
  },
};
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../style/mixins.scss";

    section.home {
        height: 100%;
        .title {
            @include title();
    }

    }
</style>
