import Home from '../pages/home';
import Login from '../pages/login';
import About from '../pages/about';
import Admin from '../pages/admin';
import Count from '../pages/count';
import Auth from '../pages/auth';
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
        path: '/about',
        name: 'About',
        component: About,
        requiresAuth: false,
    },
    {
        path: '/auth',
        name: 'Admin',
        component: Auth,
        requiresAuth: true,
    },
	{
		path: '/count',
		name: 'Count',
		component: Count,
		requiresAuth: false,
	},

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
