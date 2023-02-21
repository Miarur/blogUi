<template>
    <div class="user__block">
        <div class="content__wrapper">
            <div class="user">
                <div class="user-img">
                    <img
                        class="user-img__item"
                        :src="`${user.hasOwnProperty('avatar') ? user.avatar : this.defaultAvatar}`"
                        alt="user-img"
                    />
                </div>

                <div class="user-name">
                    <span class="user-name__text">{{ `${user.name} ${user.surname}` }}</span>
                </div>

                <div class="user-btn__group">
                    <Button size="thin" color="white" weight="thin" icon="follower" sizeBtnImg="standard">
                        Followers
                        <span class="button__value">520</span>
                    </Button>

                    <Button size="thin" color="white" weight="thin" icon="following" sizeBtnImg="standard">
                        Following
                        <span class="button__value">520</span>
                    </Button>
                </div>

                <div class="user-btn__group">
                    <Button size="thin_anim-1" color="green" weight="bold-white" icon="subscribe" sizeBtnImg="standard">
                        Subscribe
                    </Button>

                    <Button size="thin_anim-2" color="red" weight="bold-white" icon="unsubscribe" sizeBtnImg="standard">
                        Unsubscribe
                    </Button>
                </div>

                <div class="user-about">
                    <p class="user-about__title">About</p>
                    <p class="user-about__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam.
                    </p>
                </div>
            </div>

            <div class="user-feed">
                <ButtonControls :modalControl="false"></ButtonControls>
                <PostsList :posts="displayedPosts"></PostsList>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonControls from '../common/buttons/ButtonControls.vue';
import Button from '../common/buttons/Button.vue';
import PostsList from '../posts/PostsList.vue';
import defaultAvatar from '../../assets/img/default.png';

export default {
    props: {
        userId: {
            type: [Number, String],
            default: null,
        },
    },
    components: {
        Button,
        PostsList,
        ButtonControls,
    },
    data() {
        return {
            defaultAvatar,
            user: {},
        };
    },
    computed: {
        ...mapState({
            users: (state) => state.users.users,
            displayedPosts: (state) => state.posts.displayedPosts,
        }),
    },
    mounted() {
        this.user = this.users.find((user) => user.id === this.userId);
        if (this.user !== null || this.user !== undefined) {
            this.$store.dispatch('loadUserPosts', this.user);
        }
    },
};
</script>

<style lang="scss" scoped>
.user__block {
    min-height: 100vh;
    background-image: none;
    background-color: $main-color;
}
.content__wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0 70px;

    @include media-tablet {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 40px 0;
        padding: 0 10px;
    }
}
.user {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 388px;
    align-items: center;
    font-family: 'Roboto Condensed';
    @include font(18px, 20px, 400, normal);

    @include media-tablet {
        padding: 20px 0;
    }
}
.user-img {
    padding: 19px 38px;
    background-color: $color-white;
    border-radius: 16px;

    @include media-tablet {
        padding: 10px;
        max-width: calc(332px - 20px);
    }
}

.user-img__item {
    max-width: 312px;
    height: 313px;
    border-radius: 50%;

    @include media-tablet {
        padding: 10px;
        max-width: 100%;
    }
}
.user-name {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    padding: 11px 0;
    min-width: 388px;
    background-color: $color-white;
    border-radius: 16px;

    @include media-mobile {
        min-width: calc(100% - 20px);
    }
}
.user-name__text {
    text-align: center;
}
.user-btn__group {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 13px 13px;

    @include media-mobile {
        flex-direction: column;
    }
}
.user-about {
    margin-top: 22px;
    padding: 16px 21px;
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    border-radius: 16px;
}
.user-about__title {
    font-family: 'Inter';
    @include font(24px, 35px, 400, normal);
}
.user-about__description {
    padding-top: 20px;
    @include font(20px, 23px, 400, normal);
    color: $text-description;
}
.user-feed {
    display: flex;
    flex-direction: column;
    max-width: 657px;
}
</style>
