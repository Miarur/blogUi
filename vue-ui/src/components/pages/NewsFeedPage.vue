<template>
    <div class="news-feed__block">
        <Header isAuth></Header>
        <div class="news-feed">
            <div class="wrapper news-feed__wrapper">
                <ButtonControls @click="openModal" :modalControl="true"></ButtonControls>
                <PostsList :posts="displayedPosts"></PostsList>
            </div>
        </div>
        <ModalWindow v-if="isModalOpen" @close="closeModal">
            <p slot="header">Add a new post</p>
            <div class="modal__field" slot="body">
                <label class="field__label field_modal" for="title">
                    Title
                    <AppInput fieldName="postTitle" type="text" fieldId="postTitle" size="big" v-model.trim="title" />
                </label>
            </div>
            <div class="field__description" slot="body">
                <label class="field__label field_modal" for="description">Description</label>
                <textarea class="field__area" id="description" name="description" v-model.trim="content"></textarea>
            </div>
            <div class="modal-buttons__container" slot="footer">
                <Button size="big" color="dark" weight="standard" icon="chain" sizeBtnImg="standard"> Upload </Button>

                <Button size="big" color="lightgreen" weight="standard" type="submit" @click="addPost"> Submit </Button>
            </div>
        </ModalWindow>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonControls from '../common/buttons/ButtonControls.vue';
import Header from '../common/Header.vue';
import Button from '../common/buttons/Button.vue';
import PostsList from '../posts/PostsList.vue';
import ModalWindow from '../common/modal/ModalWindow.vue';
import AppInput from '../common/inputs/AppInput.vue';

export default {
    components: {
        Header,
        Button,
        PostsList,
        ModalWindow,
        AppInput,
        ButtonControls,
    },
    data() {
        return {
            isModalOpen: false,
            title: '',
            content: '',
        };
    },
    computed: {
        ...mapState({
            displayedPosts: (state) => state.posts.displayedPosts,
            user: (state) => state.auth.authUser,
            posts: (state) => state.posts.posts,
            users: (state) => state.users.users,
        }),
    },
    mounted() {
        this.$store.dispatch('loadNewsFeed', this.users);
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        addPost() {
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
            this.$store.dispatch('loadNewsFeed', this.users);
            this.isModalOpen = false;
            this.title = '';
            this.content = '';
        },
    },
};
</script>

<style lang="scss" scoped>
.news-feed {
    min-height: 100vh;
}
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.news-feed__block {
    background-image: none;
    background-color: $main-color;
}
.news-feed__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 657px;

    @include media-laptop {
        padding: 15px;
    }
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
