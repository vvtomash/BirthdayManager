<template>
    <main class="wrap">
        <my-header></my-header>
        <my-footer></my-footer>
    </main>
</template>
<script>
import MyHeader from './pages/MyHeader.vue';
import MyFooter from './pages/MyFooter.vue';

export default{
    data() {
        return {};
    },
    components: { MyHeader, MyFooter },
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
