<template>
    <main class="wrap">
        <my-header></my-header>
        <section class="home">
            <div class="title">Home</div>
            <div class="info">This is Home page</div>
            <div class="content" v-on:click="doSomething">{{ result }}</div>
        </section>
        <my-footer></my-footer>
    </main>
</template>
<script>
import MyHeader from './pages/MyHeader.vue';
import MyFooter from './pages/MyFooter.vue';

export default{
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
    components: { MyHeader, MyFooter },
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
