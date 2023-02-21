import store from '../../store/localStorageData.json';

export const initStorage = () => {
    localStorage.setItem('posts', JSON.stringify(store.posts));
    localStorage.setItem('users', JSON.stringify(store.users));
};

export function getData() {
    return {
        posts: JSON.parse(localStorage.getItem('posts')),
        users: JSON.parse(localStorage.getItem('users')),
    };
}

export default { initStorage, getData };
