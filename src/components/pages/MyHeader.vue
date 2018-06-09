<template>
    <header class="myHeader">
        <ul class="menu">
            <li v-for="link in links" v-bind:key="link.id">
                <a :href="link.href">
                    {{link.name}}
                </a>
            </li>
        </ul>
    </header>
</template>
<script>
export default{
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
        ul {
            float: right;
            margin: 0;
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
    } }
</style>
