const auth = {
    state: {
        authUser: null,
    },
    mutations: {
        setAuthUser(state, payload) {
            state.authUser = payload;
        },
        logout(state, payload) {
            state.authUser = payload;
        },
        setNewUserData(state, payload) {
            state.authUser = payload;
        },
    },
    actions: {
        authenticateUser({ commit }, payload) {
            localStorage.setItem('user', JSON.stringify(payload));
            commit('setAuthUser', payload);
        },

        logout({ commit }) {
            localStorage.setItem('user', null);
            commit('logout', null);
        },

        updateUser({ commit }, payload) {
            localStorage.setItem('user', JSON.stringify(payload));
            commit('setNewUserData', payload);
        },
    },
};

export default auth;
