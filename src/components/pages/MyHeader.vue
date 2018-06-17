<template>
    <header class="myHeader">
        <ul class="user-info">
            <li><router-link to="/home">{{ user.name }}</router-link></li>
        </ul>
        <ul class="menu">
            <li v-for="link in links" v-bind:key="link.id">
                <router-link :to="link.href">{{ link.name }}</router-link>
            </li>
        </ul>
    </header>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    created() {
        this.getUser();
    },
    computed: mapState(['user']),
    methods: mapActions(['getUser']),
    data() {
        return {
            count: 0,
            links: [
                { id: 1, href: '/home', name: 'Home' },
                { id: 2, href: '/login', name: 'Login' },
            ],
        };
    },
};
</script>
<style lang="sass" rel="stylesheet/scss" scoped>

    header.myHeader {
        min-height: 60px;
        width: 100%;
        .circle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            img {
                width: 60px;
                height: 60px;
            }
        }
        .menu {
            float: right;
            margin: 0;
        }
        .user_info {
            float: left;
            margin: 0;
        }
        ul {
            float: left;
            li {
                list-style: none;
                display: inline-block;
                padding: 18px 14px;
                a {
                    color: #2c3e50;
                    &:hover {
                        text-decoration: none;
                        border-bottom: 2px solid #42b983;
                    }
                }
            }
        }
    }
</style>
