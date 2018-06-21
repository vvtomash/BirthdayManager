import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getters = {};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  LOGIN_USER: (state, { userId }) => {
    state.user.userId = userId;
  },
};

const actions = {
  loginUser: ({ commit }, email, pass) => Vue.http.post('/api/loginUser', { email, pass })
    .then(response => response.json())
    .then((data) => {
      if (data.err) {
        throw new Error('Cant login');
      }

      commit('LOGIN_USER', { userId: data.userId });
    }),

  getUser: ({ commit }) => Vue.http.get('/api/getUser')
    .then(response => response.json())
    .then((user) => {
      commit('SET_USER', user);
    }),
};

const store = new Vuex.Store({
  state: {
    user: { 
      name: '',
      userId: null,
    },
  },
  getters,
  mutations,
  actions,
});

export default store;
