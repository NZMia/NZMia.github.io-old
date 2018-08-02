import Home from '../pages/home';
import Login from '../pages/login';
import About from '../pages/about';

export const routes = [
    { path: '/',
        exact: true,
        component: Home,
        requiresAuth: false,
    },
    {
        path: '/login',
        component: Login,
        requiresAuth: false,

    },
    {
        path: '/about',
        component: About,
        requiresAuth: true,

    },
    {
        path: '*',
        component: 404,
        requiresAuth: false,
    }
]