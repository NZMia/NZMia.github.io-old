import React from 'react';
import ReactDOM  from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Home from './container/home';
import Admin from './container/admin';
import CheckIn from './container/checkIn';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk';

import RootReducer from './reduxs/index.redux';

import '../axiosConfig';
import 'main.scss';


const store = createStore(RootReducer, compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	//window.devToolsExtension? window.devToolsExtension():f=>f
));

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
                <div>
	                <Route path='/' exact component={Home}></Route>
					<Route path='/admin' component={Admin}></Route>
					<Route path='/checkin' component={CheckIn}></Route>
                </div>
            </HashRouter>
	</Provider>, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
