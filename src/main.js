import React from 'react';
import ReactDOM  from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk';

import RootRouter from './router/index';
import RootReducer from './reduxs/index.redux';

import '../axiosConfig';
import 'main.scss';


const store = createStore(RootReducer, compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension():f=>f
));

ReactDOM.render(
	<Provider store={store}>
		<RootRouter />
	</Provider>, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
