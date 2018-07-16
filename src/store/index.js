import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getters = {};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  GET_BIRTHDAYS: (state, users) => {
    state.users = users;
  },
  LOGIN_USER: (state, { userId }) => {
    state.user.userId = userId;
  },
  USER_REGISTER: (state, { user }) => {
    state.user = user;
  },
};

const actions = {
  loginUser: ({ commit }, email, pass) => Vue.http.post('/api/user/login', { email, pass })
    .then(response => response.json())
    .then((data) => {
      if (data.err) {
        throw new Error('Cant login');
      }

      commit('LOGIN_USER', { userId: data.userId });
    }),

  registerUser: ({ commit }, user) => Vue.http.post('/api/user/register', { user })
    .then(response => response.json())
    .then((json) => {
      if (json.err) {
        throw new Error('Can\'t register');
      }

      commit('USER_REGISTER', { user: json.user });
    }),

  getUser: ({ commit }) => Vue.http.get('/api/getUser')
    .then(response => response.json())
    .then((user) => {
      commit('SET_USER', user);
    }),

  getBirthdays: ({ commit }) => Vue.http.get('api/getBirthdays')
    .then(response => response.json())
    .then((users) => {
      commit('GET_BIRTHDAYS', users);
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
