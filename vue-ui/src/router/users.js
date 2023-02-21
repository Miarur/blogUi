export const usersRoutes = [
    {
        path: 'profile',
        name: 'user-profile',
        component: () => import('@/components/pages/UserProfilePage.vue'),
        props: true,
    },

    {
        path: ':userId',
        name: 'user',
        component: () => import('@/components/pages/AnotherProfilePage.vue'),
        props: true,
    },

    {
        path: 'settings',
        name: 'user-settings',
        component: () => import('@/components/pages/UserSettingsPage.vue'),
    },
];

export default { usersRoutes };
