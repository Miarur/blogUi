<template>
    <div id="app" class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { initStorage } from './components/helpers/storeHelper';

export default {
    name: 'App',
    computed: {
        ...mapState({
            user: (state) => state.auth.authUser,
        }),
    },
    watch: {
        user: {
            immediate: true,
            handler(value) {
                if (value) {
                    const posts = JSON.parse(localStorage.getItem('posts'));
                    this.$store.dispatch('initPostsList', posts);
                    return this.$router.push({ name: 'home' });
                }
                return this.$router.push({ name: 'login' });
            },
        },
    },
    created() {
        initStorage();
        const user = JSON.parse(localStorage.getItem('user'));
        this.$store.dispatch('authenticateUser', user);
        const users = JSON.parse(localStorage.getItem('users'));
        this.$store.dispatch('initUsersList', users);
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
</style>
