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
                <ButtonControls @click="openModal" :modalControl="true"></ButtonControls>
                <PostsList :posts="displayedPosts"></PostsList>
            </div>

            <ModalWindow v-if="isModalOpen" @close="closeModal">
                <p slot="header">Add a new post</p>
                <div class="modal__field" slot="body">
                    <label class="field__label field_modal" for="title">
                        Title
                        <AppInput
                            fieldName="postTitle"
                            type="text"
                            fieldId="postTitle"
                            size="big"
                            v-model.trim="title"
                        />
                    </label>
                </div>
                <div class="field__description" slot="body">
                    <label class="field__label field_modal" for="description">Description</label>
                    <textarea class="field__area" id="description" name="description" v-model.trim="content"></textarea>
                </div>

                <div class="modal-buttons__container" slot="footer">
                    <Button size="big" color="dark" weight="standard" icon="chain" sizeBtnImg="standard">
                        Upload
                    </Button>

                    <Button size="big" color="lightgreen" weight="standard" type="submit" @click="handlePostButton">
                        Submit
                    </Button>
                </div>
            </ModalWindow>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonControls from '../common/buttons/ButtonControls.vue';
import Button from '../common/buttons/Button.vue';
import PostsList from '../posts/PostsList.vue';
import defaultAvatar from '../../assets/img/default.png';
import ModalWindow from '../common/modal/ModalWindow.vue';
import AppInput from '../common/inputs/AppInput.vue';

export default {
    components: {
        Button,
        PostsList,
        ModalWindow,
        AppInput,
        ButtonControls,
    },
    data() {
        return {
            defaultAvatar,
            isModalOpen: false,
            title: '',
            content: '',
        };
    },
    computed: {
        ...mapState({
            displayedPosts: (state) => state.posts.displayedPosts,
            user: (state) => state.auth.authUser,
        }),
    },
    mounted() {
        this.$store.dispatch('loadUserPosts', this.user);
    },
    methods: {
        handlePostButton() {
            const post = {
                id: new Date().toISOString(),
                userId: this.user.id,
                title: this.title,
                content: this.content,
                likeAmount: 0,
                isLicked: false,
                createdAt: new Date().toString(),
            };
            this.$store.dispatch('addNewPost', post);
            this.$store.dispatch('loadUserPosts', this.user);
            this.isModalOpen = false;
            this.title = '';
            this.content = '';
        },
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.user__block {
    background-image: none;
    background-color: $main-color;
    min-height: 100vh;
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

.modal__field {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.field__description {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.field__area {
    padding: 10px;
    width: 681px;
    height: 255px;
    @include font(32px, 38px, 400, normal);
    background: $color-text-area;
    border: 3px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 14px;

    @include media-tablet {
        width: 80vw;
    }

    @include media-mobile {
        width: 80vw;
        height: 150px;
    }
}
.modal-buttons__container {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 681px;
}

.button__block.button_close {
    margin-left: auto;
    width: 35px;
    height: 45px;
    background: none;
    &:hover {
        transform: rotate(180deg);
    }
    &:active {
        transition: 0.05s ease-in-out;
        transform: scale(0.8);
    }
}
</style>
