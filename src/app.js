import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './store';
import router from './router';

import './style/index.scss';

Vue.use(VueResource);
new Vue({
    router,
    store,
}).$mount('#app');
