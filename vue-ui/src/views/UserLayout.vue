<template>
    <div class="user__block">
        <Header :isAuth="true"></Header>
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
.user__block {
    background-image: none;
    background-color: $main-color;
}
</style>
