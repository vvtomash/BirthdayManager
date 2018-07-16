import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/home.vue';
import Main from '../views/main.vue';
import Login from '../views/login.vue';
import Calendar from '../views/calendar.vue';
import Register from '../views/register.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/home', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/calendar', name: 'calendar', component: Calendar },
  ],
});
