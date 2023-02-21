<template>
    <div class="button-controls">
        <Button
            size="small"
            color="white"
            weight="bold-small"
            icon="sort"
            sizeBtnImg="small"
            @click="sortingPosts('asc', 'setDisplayedPosts')"
        >
            date old
        </Button>

        <Button
            size="small"
            color="white"
            weight="bold-small"
            icon="sort"
            sizeBtnImg="small-reverse"
            @click="sortingPosts('desc', 'setDisplayedPosts')"
        >
            date new
        </Button>

        <Button v-if="modalControl"
            @click="$emit('click', $event)"
            size="small"
            color="lightgreen"
            weight="bold-small"
            icon="plus"
            sizeBtnImg="small-reverse"
        >
            add
        </Button>
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
    components: {
        Button,
    },
    props: {
        modalControl: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        sortingPosts(value, commitName) {
            this.$store.dispatch('sortPosts', {
                posts: this.$store.state.posts.displayedPosts,
                method: value,
                commit: commitName,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.button-controls {
    margin: 15px 0 0 auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 300px;
    gap: 0 10px;
}
</style>
