import {
    getAllPosts,
    getUserPosts,
} from '../components/helpers/postHelper';

const posts = {
    state: {
        posts: null,
        displayedPosts: [],
    },
    mutations: {
        setPostsList(state, payload) {
            state.posts = [...payload];
        },
        setDisplayedPosts(state, payload) {
            state.displayedPosts = [...payload];
        },
        setUserPosts(state, payload) {
            state.displayedPosts = [...payload];
        },
        setNewPost(state, payload) {
            state.posts = [...state.posts, payload];
        },
    },
    actions: {
        initPostsList({ commit }, payload) {
            commit('setPostsList', payload);
        },
        addNewPost({ commit }, payload) {
            commit('setNewPost', payload);
        },
        loadNewsFeed({ commit, state }, users) {
            const posts = getAllPosts(state.posts, users);
            commit('setDisplayedPosts', posts);
        },
        loadUserPosts({ commit, state }, user) {
            const userPosts = getUserPosts(state.posts, user);
            commit('setUserPosts', userPosts);
        },
        sortPosts({ commit }, payload) {
            switch (payload.method) {
            case 'asc': {
                const dateOld = payload.posts.sort((a, b) => {
                    const oldDate = new Date(a.createdAt).getTime();
                    const nextDate = new Date(b.createdAt).getTime();
                    return oldDate - nextDate;
                });
                commit(payload.commit, dateOld);
                break;
            }
            case 'desc': {
                const dateNew = payload.posts.sort((a, b) => {
                    const oldDate = new Date(a.createdAt).getTime();
                    const nextDate = new Date(b.createdAt).getTime();
                    return nextDate - oldDate;
                });
                commit(payload.commit, dateNew);
                break;
            }
            default:
                return commit(payload.commit, payload.posts);
            }
        },
    },
};

export default posts;
