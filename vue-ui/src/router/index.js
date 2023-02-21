import Vue from 'vue';
import VueRouter from 'vue-router';
import { authenticationRoutes } from './authentication';
import { usersRoutes } from './users';

const { NavigationFailureType, isNavigationFailure } = VueRouter;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/pages/NewsFeedPage.vue'),
    },

    {
        path: '/auth',
        name: 'auth',
        component: () => import('@/views/AuthLayout.vue'),
        children: authenticationRoutes,
    },

    {
        path: '/users',
        name: 'user',
        component: () => import('@/views/UserLayout.vue'),
        props: true,
        children: usersRoutes,
    },

    {
        path: '*',
        name: '404',
        component: () => import('@/components/pages/PageNotFound.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

function patchRouterMethod(router, methodName) {
    console.log(router);
    router[`old${methodName}`] = router[methodName];
    router[methodName] = async function (location) {
        return router[`old${methodName}`](location).catch((error) => {
            if (isNavigationFailure(error, NavigationFailureType.redirected)) {
                return;
            }
            if (isNavigationFailure(error, NavigationFailureType.cancelled)) {
                return;
            }
            if (isNavigationFailure(error, NavigationFailureType.duplicated)) {
                return this.currentRoute;
            }
            throw error;
        });
    };
}
patchRouterMethod(router, 'push');
patchRouterMethod(router, 'replace');

export default router;
