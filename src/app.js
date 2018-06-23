import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './store';
import router from './router';
import Validation from './logic/validation';

import './style/index.scss';

Vue.use(VueResource);
Vue.directive('validate', {
  update(el, binding, vnode) {
    const {
      arg,
      expression,
      value,
      oldValue,
    } = binding;
    if (value === oldValue) {
      return;
    }
    vnode.context.validation[expression] = Validation.isValid(arg, value);
  },
});
new Vue({
  router,
  store,
}).$mount('#app');
