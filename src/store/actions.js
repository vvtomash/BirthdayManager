import Vue from 'vue';

export default {
    getUser: ({ commit }) => Vue.http.get('/api/getUser')
        .then(response => response.json())
        .then((user) => {
            console.log(user);
            commit('SET_USER', user);
        }),
};
