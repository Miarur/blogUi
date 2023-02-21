<template>
    <header class="header" :class="{ header_logged: isAuth }">
        <div class="wrapper header__wrapper">
            <Sidebar></Sidebar>
            <div class="logo" @click="$router.push({ name: 'home' })">
                <a class="logo__link">
                    <img class="logo__image" src="@/assets/icons/logo.svg" alt="logo_img" />
                </a>
                <h1 class="logo__title">AwB</h1>
            </div>

            <template v-if="isAuth">
                <SearchInput></SearchInput>

                <Button
                    @click="logoutUser"
                    size="standard-slide"
                    color="white"
                    weight="standard-dark"
                    icon="logout-btn"
                    sizeBtnImg="standard"
                >
                    Logout
                </Button>
            </template>

            <Button
                v-else
                size="standard"
                color="dark"
                weight="standard"
                icon="login-btn"
                sizeBtnImg="standard"
                type="submit"
            >
                Login
            </Button>
        </div>
    </header>
</template>

<script>
import Button from './buttons/Button.vue';
import Sidebar from '../sidebar/Sidebar.vue';
import SearchInput from './inputs/SearchInput.vue';

export default {
    components: {
        Button,
        Sidebar,
        SearchInput,
    },
    props: {
        isAuth: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        logoutUser() {
            this.$store.dispatch('logout');
        },
    },
};
</script>

<style lang="scss" scoped>
.header__wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1842px;
    height: 57px;

    @include media-tablet {
        justify-content: space-between;
    }

    @include media-mobile {
        justify-content: space-between;
    }
}
.header {
    padding: 12px 40px 0 40px;
    height: 80px;
    background-color: $main-color;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    &.header_logged {
        background: url('../../assets/img/background.png') no-repeat;
        background-size: cover;
        background-position: 50% 49%;
    }

    @include media-mobile {
        padding: 10px 10px 0 10px;
    }
}
.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 148px;
    max-height: 54px;
    cursor: pointer;
    .logo__image {
        width: 56px;
        height: 54px;

        @include media-mobile {
            max-width: 28px;
        }
    }
    .logo__title {
        margin: 0;
        padding-left: 18px;
        align-items: flex-start;
        font-family: 'Roboto';
        @include font(32px, 48px, 700, normal);
        text-align: center;
        color: $color-white;

        @include media-mobile {
            @include font(22px, 28px, 700, normal);
        }
    }

    @include media-tablet {
        margin-left: auto;
        order: 2;
    }

    @include media-tablet {
        margin-left: 0;
    }

    @include media-mobile {
        margin-left: 0;
    }
}
</style>
