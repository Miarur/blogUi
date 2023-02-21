<template>
    <Transition appear name="scalable">
        <div class="post__list" v-if="posts.length === 0">
            <div class="post__block">
                <h1>Sorry posts not found</h1>
            </div>
        </div>
        <div v-else class="post__list">
            <transition-group
                :duration="550"
                name="fade"
                appear
                :key="index"
                tag="div"
                class="post__block"
                v-for="(post, index) in this.posts"
            >
                <Post @likePost="handleLikeClick" :postItem="post" :key="index"></Post>
            </transition-group>
        </div>
    </Transition>
</template>

<script>
import Post from './Post.vue';

export default {
    props: {
        posts: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        Post,
    },
    methods: {
        handleLikeClick(post) {
            if (post) {
                if (post.likeState === true) {
                    post.likeState = false;
                    post.likeAmount -= 1;
                } else if (post.likeState === false) {
                    post.likeState = true;
                    post.likeAmount += 1;
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/components/animations';
.post__list {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins';
    @include font(16px, 20px, 500, normal);
    gap: 42px 0;
}
.post__block {
    padding: 22px 22px;
    max-width: 656px;
    background-color: $color-white;
    border-radius: 10px;
}
</style>
