<template>
  <main class="wrap">
    <custom-loader :is-loading="false"/>
    <custom-header/>
    <custom-footer/>
  </main>
</template>
<script>
import CustomHeader from '../components/header.vue';
import CustomFooter from '../components/footer.vue';
import CustomLoader from '../components/loader.vue';

export default{
  components: { CustomHeader, CustomFooter, CustomLoader },
  data() {
    return {};
  },
};
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../style/mixins.scss";

    section.account {
        height: 100%;
        .title {
            @include title();
    }
        .password {
            width: 260px;
            margin: 100px auto 40px auto;
            input {
                height: 30px;
                padding: 6px;
                margin: 10px auto;
                border-bottom: 1px solid $green1;
    }

    }
    .panel {
        position:absolute;
        bottom: 40px;
        right: 100px;
        button {
            @include greenButton();
            height: 30px;
            width: 80px;

    }
    }

    }
</style>
