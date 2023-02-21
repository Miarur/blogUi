<template>
    <div>
        <div class="form">
            <div class="wrapper form__wrapper">
                <div class="form__container">
                    <img class="form__img" src="@/assets/img/login-form.jpg" alt="form-login__img" />
                    <form class="form-content" @submit.prevent="loginUser">
                        <p class="form-content__title">Awesome Blog</p>
                        <p class="form-content__subtitle">Log in to access your space</p>

                        <label for="email" class="field__label"
                            >Email
                            <AppInput
                                fieldName="email"
                                type="email"
                                fieldId="email"
                                v-model.trim="email"
                                :class="{
                                    invalid: $v.email.$dirty && (!$v.email.required || !$v.email.email),
                                }"
                            />
                            <span class="error-message" v-if="$v.email.$dirty && !$v.email.required">
                                please enter email
                            </span>
                            <span class="error-message__hidden" v-else></span>
                        </label>

                        <label for="password" class="field__label">
                            Password
                            <AppInput
                                fieldName="password"
                                type="password"
                                fieldId="password"
                                v-model.trim="password"
                                :class="{
                                    invalid: $v.password.$dirty && (!$v.password.require || !$v.password.minLength),
                                }"
                            />
                            <span class="error-message" v-if="$v.password.$dirty && !$v.password.minLength">
                                Password less than 3 characters
                            </span>
                            <span class="error-message" v-else-if="$v.password.$dirty && !$v.password.required">
                                Enter password
                            </span>
                            <span class="error-message__hidden" v-else></span>
                        </label>

                        <Button size="medium" color="blue" weight="bold" sizeBtnImg="standard" type="submit">
                            Login
                        </Button>

                        <span class="form__prompt">
                            Forgot your password ?
                            <a class="form__link" @click="$router.push({ name: 'reset-pass' })"> Click here </a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { email, required, minLength } from 'vuelidate/lib/validators';
import Button from '../common/buttons/Button.vue';
import AppInput from '../common/inputs/AppInput.vue';

export default {
    components: {
        Button,
        AppInput,
    },
    data() {
        return {
            email: null,
            password: null,
        };
    },
    computed: {
        ...mapState({
            users: (state) => state.users.users,
        }),
    },
    validations: {
        email: { email, required },
        password: {
            required,
            minLength: minLength(3),
        },
    },
    methods: {
        checkAuthUser() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            const user = this.users.find((user) => user.email === this.email && user.password === this.password);
            if (!user) {
                alert('User not found, please write correct data or create new account');
                return;
            }
            this.$store.dispatch('authenticateUser', user);
        },
        loginUser() {
            this.checkAuthUser();
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/components/form';

.form {
    padding-top: 110px;
    padding-bottom: 100px;
    min-height: 100vh;
}
.form__wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 1040px;

    @include media-mobile {
        padding: 10px;
    }
}
.form__container {
    display: flex;
    flex-direction: row;
    background-color: $color-white;
    border-radius: 8px;
    max-width: 1040px;
}
.form__img {
    max-width: 456px;
    min-height: 699px;
    border: none;
    border-radius: 8px;

    @include media-laptop {
        display: none;
    }
}
.form-content__title {
    margin: 0;
    @include font(40px, 47px, 500, normal);
    text-align: center;
    color: $text-main-color;
}
.form-content__subtitle {
    margin: 0;
    padding-top: 32px;
    @include font(24px, 28px, 400, normal);
    text-align: center;
    color: $text-second-color;
}

.form-content__subtitle_resize {
    padding-top: 23px;
    width: 350px;
    font-family: 'Roboto';
    @include font(24px, 28px, 400, normal);
    text-align: center;
    color: $text-second-color;
}

.form__prompt {
    margin-top: 32px;
    @include font(20px, 23px, 400, normal);
    text-align: center;
    color: $text-second-color;
}
.form__link {
    text-decoration-line: underline;
    color: $link-main-color;
    transition: $transition;
    cursor: pointer;
    &:hover {
        color: $link-hover-color;
    }
    &:active {
        color: $color-black;
    }
    &:visited {
        color: $link-visited-color;
    }
}
</style>
