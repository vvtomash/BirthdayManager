import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import Main from '../components/Main.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Main },
        { path: '/home', name: 'home', component: Home },
        { path: '/login', name: 'login' },
    ],
});
