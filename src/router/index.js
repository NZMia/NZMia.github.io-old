import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../container/home';
import Login from '../container/login';
import Register from '../container/register';
import Admin from "../container/admin";
import Auth from '../container/auth';

class RootRouter extends React.Component {

	render() {
		return (
			<HashRouter>
                <div>
	                <Route path='/' exact component={Home}></Route>
	                <Route path='/auth' component={Auth}></Route>
                </div>
            </HashRouter>
		)
	}
}

export default RootRouter
