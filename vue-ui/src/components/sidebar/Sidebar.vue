<template>
    <nav class="sidebar" v-if="user">
        <div :class="`${isSidebarOpened ? 'sidebar__btn sidebar_opened' : 'sidebar__btn'}`" @click="toggleSidebar">
            <span class="line"></span>
        </div>
        <ul :class="`${isSidebarOpened ? 'sidebar__block sidebar_opened' : 'sidebar__block'}`" @click="toggleSidebar">
            <li class="sidebar__item_user">
                <img :src="user.avatar" alt="user"  class="user__avatar"/>
                <a class="sidebar__link" @click="$router.push({ name: 'user-profile' })">
                    {{`${user.name} ${user.surname}`}}
                </a>
            </li>

            <li class="sidebar__item">
                <img class="sidebar__icon" src="@/assets/icons/home.svg" alt="home" />
                <a class="sidebar__link" @click="$router.push({ name: 'home' })">Home</a>
            </li>
            <li class="sidebar__item">
                <img class="sidebar__icon" src="@/assets/icons/profile.svg" alt="profile" />
                <a class="sidebar__link" @click="$router.push({ name: 'user', params: { userId: 1, }})">Profile</a>
            </li>
            <li class="sidebar__item">
                <img class="sidebar__icon" src="@/assets/icons/setting.svg" alt="settings" />
                <a class="sidebar__link" @click="$router.push({ name: 'user-settings' })">Settings</a>
            </li>

            <div class="button__position">
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
            </div>
        </ul>
    </nav>
</template>

<script>
import { mapState } from 'vuex';
import Button from '../common/buttons/Button.vue';

export default {
    components: {
        Button,
    },
    data() {
        return {
            isSidebarOpened: false,
        };
    },
    computed: {
        ...mapState({
            user: (state) => state.auth.authUser,
        }),
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpened = !this.isSidebarOpened;
        },
        logoutUser() {
            this.$store.dispatch('logout');
        },
    },
};
</script>

<style lang="scss" scoped>
.sidebar {
    max-width: 48px;
}

.menu__toggle {
    opacity: 0;
}

.sidebar__btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 21px;
    left: 45px;
    width: 48px;
    height: 28px;
    cursor: pointer;
    z-index: 2;

    &:hover {
        .line {
            background-color: $color-green;

            &::after {
                background-color: $color-green;
            }

            &::before {
                background-color: $color-green;
            }
        }
    }

    @include media-mobile {
        left: 15px;
        width: 38px;
        position: absolute;
    }

    @include media-tablet {
        position: absolute;
    }
}

.line {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: $color-white;
    border-radius: 10px;
    transition: $transition;
    transition: $transition;

    &::before {
        display: block;
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: $color-white;
        border-radius: 10px;
        transition: $transition;
        content: '';
        top: -16px;
        transition: $transition;
    }

    &::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: $color-white;
        border-radius: 10px;
        transition: $transition;
        content: '';
        top: 16px;
        transition: $transition;
    }

    @include media-mobile {
        height: 2px;
        &::after {
            height: 2px;
            top: 10px;
        }
        &::before {
            height: 2px;
            top: -10px;
        }
    }
}

.sidebar__btn.sidebar_opened {
    .line {
        transform: rotate(45deg);

        &::before {
            top: 0;
            transform: rotate(0);
        }

        &::after {
            top: 0;
            transform: rotate(90deg);
        }
    }
}

.sidebar__block {
    padding: 90px 0 0 50px;
    display: flex;
    flex-direction: column;
    position: fixed;
    visibility: hidden;
    top: 0;
    left: -100%;
    width: 350px;
    height: 100%;
    margin: 0;
    list-style: none;
    text-align: left;
    background-color: $main-color;
    box-shadow: 1px 0 6px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: $transition;
}

.sidebar__item {
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0 15px;
}

.sidebar__item_user {
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    max-width: 250px;
}

.user__avatar {
    max-width: 45px;
    max-height: 45px;
    border-radius: 50%;
}

.sidebar__icon {
    width: 32px;
    height: 32px;
}

.sidebar__link {
    display: block;
    padding: 12px 24px;
    color: $color-white;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition: $transition;
    cursor: pointer;

    &:hover {
        color: $color-green;
    }
}

.sidebar__block.sidebar_opened {
    visibility: visible;
    left: 0;
}

.button__position {
    margin-top: 42px;
}
</style>
