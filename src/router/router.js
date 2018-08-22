import Home from '../pages/home';
import Login from '../pages/login';
import About from '../pages/about';

export const routes = [
    { path: '/',
        exact: true,
        name: 'Home',
        component: Home,
        requiresAuth: false,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        requiresAuth: false,

    },
    {
        path: '/about',
        name: 'About',
        component: About,
        requiresAuth: true,

    },
    {
        path: '*',
        component: 404,
        requiresAuth: false,
    }
]
