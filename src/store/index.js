import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getters = {};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
};

const actions = {
  getUser: ({ commit }) => Vue.http.get('/api/getUser')
    .then(response => response.json())
    .then((user) => {
      commit('SET_USER', user);
    }),
};

const store = new Vuex.Store({
  state: {
    user: { name: '' },
  },
  getters,
  mutations,
  actions,
});

export default store;
