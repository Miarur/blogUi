<template>
    <div class="search">
        <img class="search__icon" src="@/assets/icons/search-ico.svg" alt="search-ico" />
        <AppInput type="search" fieldName="search" fieldId="search" size="long" />
    </div>
</template>

<script>
import AppInput from './AppInput.vue';

export default {
    components: {
        AppInput,
    },
};
</script>

<style lang="scss" scoped>
.search {
    display: flex;
    flex-direction: row;
    width: 50vw;
}
.search__icon {
    margin-right: 14px;

    @include media-laptop {
        margin-left: 80px;
    }

    @include media-tablet {
        margin-right: 0;
    }

    @include media-mobile {
        margin-right: 0;
    }
}
</style>
