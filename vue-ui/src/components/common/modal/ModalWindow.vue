<template>
    <Transition name="modal-slide" appear>
        <div class="modal">
            <div class="modal__wrap">
                <div class="modal__block">
                    <div class="modal__header">
                        <slot name="header"></slot>
                        <Button
                            @click="close"
                            size="cube"
                            color="white"
                            weight="standard"
                            icon="close"
                            sizeBtnImg="standard"
                        ></Button>
                    </div>

                    <slot name="body"></slot>

                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import Button from '../buttons/Button.vue';

export default {
    components: {
        Button,
    },
    emits: {
        close: null,
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/components/animations';
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    transition: $transition;
    z-index: 100;

    @include media-tablet {
        padding: 0 20px;
    }
}
.modal__wrap {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal__block {
    padding: 20px 30px;
    width: 750px;
    max-height: 600px;
    font-family: 'Roboto';
    @include font(32px, 38px, 400, normal);
    background: $color-white;
    box-shadow: 0 25px 200px rgba(0, 0, 0, 0.1);
    border-radius: 40px;

    @include media-tablet {
        width: 90vw;
    }

    @include media-mobile {
        padding: 10px;
        max-height: 400px;
    }
}

.modal__header {
    display: flex;
    justify-content: space-between;
    @include font(25px, 30x, 500, normal);
}
</style>
