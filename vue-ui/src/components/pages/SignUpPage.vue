<template>
    <div>
        <div class="form">
            <div class="wrapper form__wrapper">
                <div class="form__container">
                    <img class="form__img" src="@/assets/img/login-form.jpg" alt="form-login__img" />
                    <form class="form-content form-content_signup" @submit.prevent="handleFormSignUp" ref="signUp">
                        <p class="form-content__title">Awesome Blog</p>
                        <p class="form-content__subtitle_resize">Sign Up in to access your space</p>

                        <label for="name" class="field__label field_signup">
                            Name
                            <AppInput
                                v-model.trim="name"
                                fieldName="name"
                                type="text"
                                fieldId="name"
                                :class="{
                                    invalid: $v.name.$dirty && (!$v.name.required || !$v.name.minLength),
                                }"
                            />
                            <span class="error-message" v-if="$v.name.$dirty && !$v.name.minLength">
                                Name less than 2 characters
                            </span>
                            <span class="error-message" v-if="$v.name.$dirty && !$v.name.required"> Enter name </span>
                            <span class="error-message__hidden" v-else></span>
                        </label>

                        <label for="surname" class="field__label field_signup">
                            Surname
                            <AppInput
                                v-model.trim="surname"
                                fieldName="surname"
                                type="text"
                                fieldId="surname"
                                :class="{
                                    invalid: $v.surname.$dirty && (!$v.surname.required || !$v.surname.minLength),
                                }"
                            />
                            <span class="error-message" v-if="$v.surname.$dirty && !$v.surname.minLength">
                                Surname less than 2 characters
                            </span>
                            <span class="error-message" v-if="$v.surname.$dirty && !$v.surname.required">
                                Enter surname
                            </span>
                            <span class="error-message__hidden" v-else></span>
                        </label>

                        <label for="email" class="field__label field_signup">
                            Email
                            <AppInput
                                v-model.trim="email"
                                fieldName="email"
                                type="email"
                                fieldId="email"
                                :class="{
                                    invalid: $v.email.$dirty && (!$v.email.required || !$v.email.email),
                                }"
                            />
                            <span class="error-message" v-if="$v.email.$dirty && !$v.email.required">
                                Please, write your email
                            </span>
                            <span class="error-message__hidden" v-else></span>
                        </label>
                        <Button size="medium" color="blue" weight="bold" sizeBtnImg="standard" type="submit">
                            SignUp
                        </Button>
                        <span class="form__prompt">
                            Do you have an account?
                            <a class="form__link" @click="$router.push({ name: 'login' })">Login </a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';
import Button from '../common/buttons/Button.vue';
import AppInput from '../common/inputs/AppInput.vue';
import defaultAvatar from '../../assets/img/default.png';

export default {
    components: {
        Button,
        AppInput,
    },
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            defaultPass: '12345',
        };
    },
    validations: {
        name: { required, minLength: minLength(2) },
        surname: { required, minLength: minLength(2) },
        email: { email, required },
    },
    methods: {
        handleFormSignUp() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            const newUser = {
                id: new Date().toISOString(),
                name: this.name,
                surname: this.surname,
                avatar: defaultAvatar,
                email: this.email,
                password: this.defaultPass,
                about: '',
                created_at: new Date().toISOString(),
                updated_at: ' ',
            };
            this.$store.dispatch('addUser', newUser);
            alert(`Please copy your default password :  ${newUser.password}`);
            this.$refs.signUp.reset();
            this.$router.push({ name: 'login' });
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
    max-width: 350px;
    font-family: 'Roboto';
    @include font(24px, 28px, 400, normal);
    text-align: center;
    color: $text-second-color;

    @include media-mobile {
        @include font(18px, 25px, 400, normal);
    }
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
