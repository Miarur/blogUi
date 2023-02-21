<template>
    <div class="box">
        <Header :is-auth="false"></Header>
        <div class="box__content">
            <h1 class="box__title">Sorry page not found</h1>
            <a class="box__link" @click="$router.push({ name: 'home'})">Go to home page</a>
        </div>
    </div>
</template>

<script>
import Header from '../common/Header.vue';

export default {
    components: {
        Header,
    },
};
</script>

<style lang="scss" scoped>
.box {
    height: 100vh;
}

.box__content {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.box__title {
    color: $color-white;
    @include font(40px, 45px, 500, normal);
    text-align: center;
}
.box__link {
    color: $link-main-color;
    @include font(30px, 35px, 500, normal);
    cursor: pointer;
    text-decoration: underline;
}
</style>
