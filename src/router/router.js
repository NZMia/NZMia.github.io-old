import Home from '../container/home';
import Login from '../container/login';
import About from '../container/about';
import Admin from '../container/admin';
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
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About,
    //     requiresAuth: false,
    // },
    {
        path: '/user',
        name: 'Admin',
        component: Auth,
        requiresAuth: true,
    },
	// {
	// 	path: '/count',
	// 	name: 'Count',
	// 	component: Count,
	// 	requiresAuth: false,
	// },

	// {
	// 	path: '/admin',
	// 	component: Admin,
	// 	requiresAuth: false,
	// },
	// {
	// 	path: '/login',
	// 	component: Login,
	// 	requiresAuth: false,
	// },
    {
        path: '*',
        component: NotFound,
        requiresAuth: false,
    }
];
