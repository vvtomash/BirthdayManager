import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './store';
import router from './router';
import ValidationDirective from './directives/validate';

import './style/index.scss';

Vue.use(VueResource);
Vue.directive('validate', ValidationDirective);
new Vue({
  router,
  store,
}).$mount('#app');
