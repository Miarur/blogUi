export const authenticationRoutes = [
    {
        path: 'login',
        name: 'login',
        component: () => import('@/components/pages/LoginPage.vue'),
    },

    {
        path: 'signup',
        name: 'signup',
        component: () => import('@/components/pages/SignUpPage.vue'),
    },

    {
        path: 'reset',
        name: 'reset-pass',
        component: () => import('@/components/pages/ResetPasswordPage.vue'),
    },
];

export default { authenticationRoutes };
