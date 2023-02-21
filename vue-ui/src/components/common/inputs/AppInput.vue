<template>
    <div class="field">
        <input
            :class="`field__input_${size}`"
            :type="type"
            :id="fieldId"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    props: {
        fieldName: {
            type: String,
            default: 'text',
        },
        type: {
            type: String,
            default: 'text',
            validator(value) {
                return ['email', 'number', 'password', 'search', 'text'].includes(value);
            },
        },
        fieldId: {
            type: String,
            default: 'text',
        },
        size: {
            type: String,
            default: 'standard',
            validator(value) {
                return ['standard', 'medium', 'big', 'long'].includes(value);
            },
        },
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" scoped>
.field {
    width: 100%;
}
.field__container {
    padding-top: 26px;
}
.field__input_standard {
    padding: 5px;
    margin-top: 10px;
    width: 100%;
    @include font(18px, 28px, 400, normal);
    border: none;
    height: 40px;
    background: $input-main;
    border: 1px solid $main-color;
    border-radius: 10px;
}

.field__input_medium {
    position: relative;
    padding: 15px 19px;
    min-width: 100%;
    height: 40px;
    color: rgba(0, 0, 0, 0.8);
    background: $color-white;
    @include font(18px, 20px, 400, normal);
    border: 1px solid $main-color;
    border-radius: 10px;
}

.field__input_big {
    padding: 10px;
    width: 681px;
    font-family: 'Roboto';
    @include font(32px, 38px, 400, normal);
    border: 3px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 13px;

    @include media-tablet {
        width: 80vw;
    }

    @include media-mobile {
        height: 25px;
    }
}

.field__input_long {
    padding: 6px 6px 6px 10px;
    width: 100%;
    height: 30px;
    font-family: 'Roboto Condensed';
    @include font(18px, 20px, 400, normal);
    border: none;
    border-radius: 16px;

    @include media-laptop {
        display: none;
    }

    @include media-mobile {
        display: none;
    }
}

input::placeholder {
    font-weight: normal;
    opacity: 1;
    color: black
}
</style>
