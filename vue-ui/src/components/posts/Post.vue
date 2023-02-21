<template>
    <div>
        <div class="post__head">
            <img
                class="post__img"
                :src="`${postItem.authorAvatar}`"
                :alt="`${postItem.name} ${postItem.name}`"
                @click="goToAuthorPage"
            />
            <p class="post__author">{{ postItem.name }} {{ postItem.surname }}</p>
            <img class="post__options" src="../../assets/icons/options.svg" alt="post-options" />
        </div>
        <div class="post__body">
            <h3 class="post__title">{{ postItem.title }}</h3>
            <p class="post__description">{{ postItem.content }}</p>
        </div>
        <div class="post__footer">
            <div class="like__counter-block">
                <i
                    @click="$emit('likePost', postItem)"
                    class="like__img"
                    :class="{ like__img_active: postItem.likeState }"
                ></i>
                <span class="like__value">{{ postItem.likeAmount }}</span>
                <span class="post__date">{{ formatPostData(postItem.createdAt) }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        postItem: {
            type: Object,
            userId: {
                type: [String, Number],
                default: '',
            },
            name: {
                type: String,
                default: '',
            },
            surname: {
                type: String,
                default: '',
            },
            authorAvatar: {
                type: String,
                default: '',
            },
            title: {
                type: String,
                default: '',
            },
            content: {
                type: String,
                default: '',
            },
            likeAmount: {
                type: Number,
                default: null,
            },
            likeState: {
                type: Boolean,
            },
            createdAt: {
                type: String,
            },
        },
    },
    computed: {
        ...mapState({
            authUser: (state) => state.auth.authUser,
        }),
    },
    methods: {
        formatPostData(data) {
            return new Intl.DateTimeFormat('ru-RU', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            }).format(new Date(data));
        },
        goToAuthorPage() {
            if (this.postItem.userId === this.authUser.id) {
                return this.$router.push({ name: 'user-profile' });
            }
            return this.$router.push({ name: 'user', params: { userId: this.postItem.userId } });
        },
    },
};
</script>

<style lang="scss" scoped>
.post__head {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
}
.post__img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
        transform: scale(1.1);
    }
}
.post__author {
    padding-left: 7px;
    @include font(14px, 16px, 700, normal);
    color: $color-black;

    @include media-laptop {
        @include font(12px, 14px, 700, normal);
    }
}
.post__options {
    margin-left: auto;
    align-self: flex-start;
    cursor: pointer;
}
.post__body {
    margin-top: 12px;
}

.post__date {
    display: block;
    margin-left: auto;
    color: $main-color;
}
.post__title {
    @include font(14px, 16px, 500, normal);
    color: $color-black;

    @include media-laptop {
        @include font(12px, 14px, 500, normal);
    }
}
.post__description {
    padding-top: 10px;
    @include font(16px, 20px, 400, normal);
    color: rgba(0, 0, 0, 0.7);

    @include media-laptop {
        @include font(12px, 14px, 400, normal);
    }
}
.like__counter-block {
    margin-top: 11px;
    display: flex;
    flex-direction: row;
    gap: 0 10px;
    @include font(14px, 18px, 400, normal);
    color: $color-black;
    background: none;
    cursor: pointer;
    border: none;
}
.like__img {
    &:hover {
        transition: 0.3s ease-in-out;
        transform: scale(1.1);
    }
    &:active {
        transition: 0.1s ease-in-out;
        transform: scale(0.7);
    }
    display: block;
    width: 18px;
    height: 16px;
    background: url('@/assets/icons/like.svg') no-repeat;
    background-size: cover;
    background-position: center;
}
.like__img_active {
    background: url('@/assets/icons/like-active.svg');
}
</style>
