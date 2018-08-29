import Home from '../pages/home';
import Login from '../pages/login';
import About from '../pages/about';
import Admin from '../pages/admin';
import NotFound from '../pages/notFound';

export const routes = [
    {
        path: '/',
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
        requiresAuth: false,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        requiresAuth: true,
    },
    {
        path: '*',
        component: NotFound,
        requiresAuth: false,
    }
]
