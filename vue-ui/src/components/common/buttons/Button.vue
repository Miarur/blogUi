<template>
    <button
        :class="`button__block button_${size} ${disabled ? 'button__color_disabled' : `button__color_${color}`}`"
        @click="$emit('click', $event)"
        :disabled="disabled"
    >
        <img
            v-if="icon"
            :src="getIconPath(icon)"
            class="button__img"
            :class="`button__img_${sizeBtnImg}`"
            :alt="`${icon}`"
        />
        <p class="button__text" :class="`button__text_${weight}`">
            <slot></slot>
        </p>
    </button>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'standard',
            validator(value) {
                return [
                    'standard',
                    'standard-slide',
                    'medium',
                    'thin',
                    'thin_anim-1',
                    'thin_anim-2',
                    'small',
                    'big',
                    'cube',
                ].includes(value);
            },
        },
        weight: {
            type: String,
            default: 'normal',
            validator(value) {
                return ['standard', 'standard-dark', 'bold', 'bold-white', 'bold-dark', 'bold-small', 'thin'].includes(
                    value,
                );
            },
        },
        color: {
            type: String,
            default: 'default',
            validator(value) {
                return ['default', 'dark', 'white', 'blue', 'lightblue', 'green', 'lightgreen', 'red'].includes(value);
            },
        },
        icon: {
            type: String,
            default: '',
        },
        sizeBtnImg: {
            type: String,
            default: 'standard',
            validator(value) {
                return ['standard', 'standard-reverse', 'small', 'small-reverse'].includes(value);
            },
        },
    },
    methods: {
        getIconPath(iconName) {
            try {
                const iconItem = iconName.toLowerCase();
                return require(`@/assets/icons/${iconItem}.svg`);
            } catch (err) {
                console.log(`< iconName Error > :  ${err}`);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.button__block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 60px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: $transition;
}
.button__img {
    width: 35px;
    height: 45px;
    transition: $transition;
}

.button__text {
    font-family: 'Inter';
    @include font(16px, 19px, 700, normal);
    color: $color-white;
    transition: $transition;
}

.button_standard {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        -webkit-box-shadow: 1px 9px 15px 0 rgba(0, 144, 255, 0.3);
        -moz-box-shadow: 1px 9px 15px 0 rgba(0, 144, 255, 0.3);
        box-shadow: 1px 9px 15px 0 rgba(0, 144, 255, 0.3);
    }
    &:active {
        transform: scale(0.9);
    }

    @include media-laptop {
        display: none;
    }
}

.button__img_standard {
    width: 26px;
    height: 25px;
}
.button__img_standard-reverse {
    width: 26px;
    height: 25px;
    transform: rotate(180deg);
}

.button__text_standard {
    margin-left: 10px;
    text-align: center;
    color: $color-white;
}

.button__text_standard-dark {
    margin-left: 10px;
    @include font(16px, 19px, 700, normal);
    text-align: center;
    color: $text-main-color;
}

.button__text_bold {
    @include font(24px, 29px, 700, normal);
    text-align: center;
    color: $color-white;
}

.button__text_bold-white {
    @include font(20px, 24px, 700, normal);
    color: $color-white;
}

.button__text_bold-dark {
    margin-left: 2px;
    @include font(12px, 15px, 700, normal);
    text-align: center;
    color: $color-black;
}
.button__text_bold-small {
    margin-left: 2px;
    @include font(12px, 15px, 700, normal);
    text-align: center;
    color: $color-black;
}
.button__text_thin {
    font-family: 'Roboto Condensed';
    @include font(18px, 20px, 400, normal);
    color: $color-black;
}
.button_medium {
    margin: 75px auto 0 auto;
    width: 200px;
    min-height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:hover {
        transform: translateX(20px);
        background-color: $settings-btn;
    }
    &:active {
        -webkit-box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.3);
    }

    @include media-laptop {
        width: 150px;
        min-height: 40px;
        margin: 40px auto 0 auto;
    }
}
.button_small {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 30px;
    color: $color-black;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
    border-radius: 3px;
    border: none;
    cursor: pointer;
    &:hover {
        transform: translateY(-5px);
        -webkit-box-shadow: 0 11px 4px -7px rgba(81, 160, 202, 1);
        -moz-box-shadow: 0 11px 4px -7px rgba(81, 160, 202, 1);
        box-shadow: 0 11px 4px -7px rgba(81, 160, 202, 1);
    }
    &:active {
        transition: 0.2s ease-out;
        transform: translateY(5px);
        .button__img.button__img_small {
            transition: 0.1s ease-in;
            transform: rotate(90deg);
        }
        .button__img.button__img_small-reverse {
            transition: 0.1s ease-in;
            transform: rotate(90deg);
        }
    }
}
.button__img_small {
    width: 22px;
    height: 22px;
}
.button__img_small-reverse {
    width: 22px;
    height: 22px;
    transform: rotate(180deg);
}

.button_thin {
    padding: 12px 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 185px;
    height: 51px;
    @include font(18px, 20px, 400, normal);
    border-radius: 16px;
    cursor: pointer;

    @include media-mobile {
        min-width: 88vw;
    }
}

.button_thin_anim-1 {
    width: 185px;
    height: 51px;
    background-color: $color-subscribe;
    justify-content: center;
    gap: 0 20px;
    color: $color-white;
    border-radius: 16px;
    background: $color-subscribe;
    z-index: 0;
    &:hover {
        animation: backgrounds 3s ease-in-out infinite;
    }
    &:active {
        transition: 0.05s ease-in;
        -webkit-box-shadow: 9px 19px 10px -11px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: 9px 19px 10px -11px rgba(0, 0, 0, 0.7);
        box-shadow: 9px 19px 10px -11px rgba(0, 0, 0, 0.7);
    }

    @include media-mobile {
        min-width: 88vw;
    }
}

.button_thin_anim-2 {
    width: 185px;
    height: 51px;
    background-color: $color-unsubscribe;
    justify-content: center;
    gap: 0 8px;
    color: $color-white;
    border-radius: 16px;
    &:hover {
        background-color: $color-black;
    }
    &:active {
        transition: 0.05s ease-in;
        -webkit-box-shadow: 9px 19px 10px -11px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: 9px 19px 10px -11px rgba(0, 0, 0, 0.7);
        box-shadow: 9px 19px 10px -11px rgba(0, 0, 0, 0.7);
    }

    @include media-mobile {
        min-width: 88vw;
    }
}

.button_big {
    margin-top: 54px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 60px;
    background-color: $settings-btn;
    color: $color-white;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: $modal-submit;
        border: 1px solid $color-white;
    }
    &:active {
        transition: 0.05s ease-in;
        -webkit-box-shadow: 9px 19px 10px -11px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: 9px 19px 10px -11px rgba(0, 0, 0, 0.7);
        box-shadow: 9px 19px 10px -11px rgba(0, 0, 0, 0.7);
    }

    @include media-mobile {
        scale: calc(1 - 0.3);
    }
}

.button_cube {
    width: 35px;
    height: 45px;
    background: none;
    box-shadow: none;
    filter: none;
    .button__img:hover {
        transform: rotate(180deg);
    }
    .button__img:active {
        transition: 0.05s ease-in-out;
        transform: scale(0.8);
        box-shadow: none;
    }
}

.button_standard-slide {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
    border-radius: 10px;
    border: none;
    cursor: pointer;

    .button__text {
        @include media-tablet {
            display: none;
        }
    }
    &:hover .button__img {
        transform: translateX(35px);
    }
    &:hover .button__text {
        opacity: 0;
    }
    &:active .button__img {
        transition: 0.05s ease-in;
        transform: translateX(35px) rotate(90deg) scale(0.9);
    }

    @include media-tablet {
        order: 3;
        margin-left: 20px;
        width: 80px;
        height: 40px;
    }
}

.button__color_disabled {
    cursor: not-allowed;
    background-color: #848484;
    &:hover {
        transform: scale(1);
        background-color: #848484;
    }
    &:active {
        transform: scale(1);
        background-color: none;
        box-shadow: none;
    }
}

.button__color_dark {
    background-color: $color-dark;
}
.button__color_white {
    background-color: $color-white;
}
.button__color_blue {
    background-color: $form-submit;
}
.button__color_lightblue {
    background-color: $settings-btn;
}
.button__color_green {
    background-color: $color-subscribe;
}
.button__color_lightgreen {
    background-color: $color-green;
}
.button__color_red {
    background-color: $color-unsubscribe;
}

@keyframes backgrounds {
    20% {
        background-color: #10a73a;
    }
    40% {
        background-color: $color-subscribe;
    }
    60% {
        background-color: #10a73a;
    }
    80% {
        background-color: $color-subscribe;
    }
    100% {
        background-color: #10a73a;
    }
}
</style>
