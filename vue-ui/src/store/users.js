const users = {
    state: {
        users: [],
        displayedUserPosts: [],
    },
    mutations: {
        usersList(state, payload) {
            state.users = [...payload];
        },
        setUser(state, payload) {
            state.users = [...state.users, payload];
        },
    },
    actions: {
        initUsersList({ commit }, payload) {
            commit('usersList', payload);
        },
        addUser({ commit }, payload) {
            commit('setUser', payload);
        },
    },
};

export default users;
