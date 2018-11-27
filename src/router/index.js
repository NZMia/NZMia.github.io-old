import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../container/home';
import Login from '../container/login';
import Register from '../container/register';
import Admin from "../container/admin";
import Auth from '../utils/auth';

class RootRouter extends React.Component {

	render() {
		return (
			<HashRouter>
                <div>
	                <Route path='/' exact component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
	                <Route path='/admin' component={Admin}></Route>
	                <Route path='/auth' component={Auth}></Route>
                    <Route path='/register' component={Register}></Route>
                </div>
            </HashRouter>
		)
	}
}

export default RootRouter
