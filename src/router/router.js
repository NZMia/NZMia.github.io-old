import Home from '../container/home';
import NotFound from '../container/notFound';

import Auth from '../utils/auth';
export const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Home,
        requiresAuth: false,
    },
    {
        path: '/admin',
        name: 'Auth',
        component: Auth,
        requiresAuth: true,
    },
    {
        path: '*',
        component: NotFound,
        requiresAuth: false,
    }
];
