import Home from '../pages/home';
import Login from '../pages/login';
import About from '../pages/about';

export const routes = [
    { path: '/',
        exact: true,
	    name: 'Home',
        component: Home,
	    routes: [
		    {
			    path: "/home/test1",
			    name: 'Home11',

		    },
		    {
			    path: "/home/test2",
			    name: 'Home22',

		    }
	    ],
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