<template>
    <div class="user__block">
        <div class="settings">
            <div class="settings__wrapper">
                <h3 class="settings__title">General</h3>

                <div class="settings__container">
                    <img class="settings__avatar" :src="userCopy.avatar" :alt="userCopy.avatar" />
                    <div class="settings-head">
                        <form class="settings__user-data" @submit.prevent="handlePersonalData">
                            <label for="name" class="label__settings">
                                <AppInput
                                    fieldName="name"
                                    type="text"
                                    fieldId="name"
                                    size="medium"
                                    v-model="name"
                                    :class="{
                                        invalid: $v.name.$dirty &&
                                        ( !$v.name.required || !$v.name.minLength),
                                    }"
                                />
                                <span class="error-message" v-if="$v.name.$dirty && !$v.name.required">
                                    enter name
                                </span>
                                <span class="error-message" v-if="$v.name.$dirty && !$v.name.minLength">
                                    name less than 2 characters
                                </span>
                                <span class="error-message__hidden" v-else></span>
                            </label>

                            <label for="surname" class="label__settings">
                                <AppInput
                                    fieldName="surname"
                                    type="text"
                                    fieldId="surname"
                                    size="medium"
                                    v-model.trim="surname"
                                    :class="{
                                        invalid: $v.surname.$dirty && (!$v.surname.required || !$v.surname.minLength),
                                    }"
                                />
                                <span class="error-message" v-if="$v.surname.$dirty && !$v.surname.required">
                                    Enter name
                                </span>
                                <span class="error-message" v-if="$v.surname.$dirty && !$v.surname.minLength">
                                    surname less than 2 characters
                                </span>
                                <span class="error-message__hidden" v-else></span>
                            </label>

                            <label for="email" class="label__settings">
                                <AppInput
                                    fieldName="email"
                                    type="email"
                                    fieldId="email"
                                    size="medium"
                                    v-model.trim="email"
                                    :class="{
                                        invalid: $v.email.$dirty && ( !$v.email.required || !$v.email.email),
                                    }"
                                />
                                <span class="error-message" v-if="$v.email.$dirty && !$v.email.required">
                                    enter email
                                </span>
                                <span class="error-message__hidden" v-else></span>
                            </label>

                            <label for="password" class="label__settings">
                                <AppInput
                                    fieldName="password"
                                    type="password"
                                    fieldId="password"
                                    size="medium"
                                    placeholder="current password"
                                    v-model.trim="userPassword"
                                />
                                <span class="error-message" v-if="userPassword !== user.password">
                                    wrong password
                                </span>
                                <span class="error-message__hidden" v-else></span>
                            </label>

                            <label for="newPassword" class="label__settings">
                                <AppInput
                                    fieldName="newPassword"
                                    type="password"
                                    fieldId="newPassword"
                                    size="medium"
                                    placeholder="New Password"
                                    v-model.trim="password"
                                    :class="{
                                        invalid: $v.password.$dirty && (!$v.password.required || !$v.password.sameAs),
                                    }"
                                />
                                <span class="error-message" v-if="$v.password.$dirty && !$v.password.required">
                                    enter password
                                </span>
                                <span class="error-message" v-if="$v.password.$dirty && !$v.password.sameAs">
                                    password mismatch
                                </span>
                                <span class="error-message__hidden" v-else></span>
                            </label>

                            <label for="confirmPassword" class="label__settings">
                                <AppInput
                                    fieldName="confirmPassword"
                                    type="password"
                                    fieldId="confirmPassword"
                                    size="medium"
                                    placeholder="Confirm new password"
                                    v-model.trim="confirmPassword"
                                />
                                <span
                                    class="error-message"
                                    v-if="$v.confirmPassword.$dirty && !$v.confirmPassword.required"
                                >
                                    enter confirm password
                                </span>
                                <span class="error-message__hidden" v-else></span>
                            </label>

                            <Button size="big" color="lightblue" weight="standard" sizeBtnImg="standard" type="submit">
                                save changes
                            </Button>
                        </form>
                    </div>

                    <div class="settings-body">
                        <h3 class="settings-body__title">About</h3>
                        <p class="settings-body__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi
                            diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi
                            diam.
                        </p>
                        <div class="button__position">
                            <Button size="big" color="lightblue" weight="standard" sizeBtnImg="standard">
                                save all
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import {
    email,
    required,
    minLength,
    sameAs,
} from 'vuelidate/lib/validators';
import Button from '../common/buttons/Button.vue';
import AppInput from '../common/inputs/AppInput.vue';

export default {
    components: {
        Button,
        AppInput,
    },
    computed: {
        ...mapState({
            user: (state) => state.auth.authUser,
        }),
    },
    data() {
        return {
            userCopy: {},
            name: '',
            surname: '',
            email: '',
            userPassword: '',
            password: '',
            confirmPassword: '',
        };
    },
    mounted() {
        this.userCopy = { ...this.user };
        this.name = this.userCopy.name;
        this.surname = this.userCopy.surname;
        this.email = this.userCopy.email;
    },
    validations: {
        name: {
            required,
            minLength: minLength(2),
        },
        surname: {
            required,
            minLength: minLength(2),
        },
        email: {
            email,
            required,
        },
        password: {
            required,
            sameAs: sameAs('confirmPassword'),
            minLength: minLength(3),
        },
        confirmPassword: { required },
    },
    methods: {
        handlePersonalData() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            this.userCopy.name = this.name;
            this.userCopy.surname = this.surname;
            this.userCopy.email = this.email;
            this.userCopy.password = this.password;
            this.$store.dispatch('updateUser', this.userCopy);
        },
    },
};
</script>

<style lang="scss" scoped>
.user__block {
    min-height: 100vh;
    background-image: none;
    background-color: $main-color;
}
.settings {
    padding-bottom: 100px;
}
.settings__wrapper {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 1280px;
    font-family: 'Roboto Condensed';
    @include font(18px, 20px, 400, normal);

    @include media-laptop {
        padding: 0 20px;
        max-width: 700px;
    }

    @include media-mobile {
        padding: 0 10px;
    }
}
.settings__title {
    padding-top: 140px;
    font-family: 'Roboto';
    @include font(30px, 35px, 700, normal);
    color: $color-white;

    @include media-mobile {
        padding-top: 20px;
    }
}
.settings__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
    padding: 60px 37px 30px 37px;
    max-width: 1280px;
    background-color: $color-white;
    border-radius: 16px;

    @include media-mobile {
        padding: 0;
    }
}
.settings-head {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @include media-laptop {
        margin-top: 20px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 50px 0;
    }
}
.settings__avatar {
    max-width: 320px;
    max-height: 320px;
    border-radius: 50%;
    @include media-mobile {
        max-width: calc(100% - 10%);
    }
}

.settings__user-data {
    position: relative;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 300px;
    gap: 19px 0;

    @include media-laptop {
        margin-left: 0;
    }
}
.settings-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));

    @include media-laptop {
        margin-top: 30px;
    }
}
.settings-body__title {
    @include font(30px, 35px, 700, normal);
    color: $color-black;

    @include media-mobile {
        @include font(25px, 30px, 700, normal);
    }
}
.settings-body__description {
    margin-top: 15px;
    max-width: 400px;
    padding: 32px 36px;
    background: $settings-description;
    border-radius: 16px;
    @include font(14px, 16px, 400, normal);

    @include media-mobile {
        padding: 10px;
        border-radius: 0;
    }
}

.label__settings {
    min-width: 100%;

    @include media-mobile {
        min-width: 50%;
    }
}

.button__position {
    margin-top: auto;
}
</style>
