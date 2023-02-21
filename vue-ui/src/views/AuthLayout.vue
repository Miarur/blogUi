<template>
    <div class="authorization__block">
        <Header :isAuth="false"></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '../components/common/Header.vue';

export default {
    components: {
        Header,
    },
};
</script>

<style lang="scss" scoped>
</style>
