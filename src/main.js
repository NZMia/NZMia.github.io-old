import React from 'react';
import ReactDOM  from 'react-dom';
import { HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHeart, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Auth from './pages/auth';
import Home from './pages/home';

import { routes } from './router/router';
import reducers from './reducers/index.redux';

import renderRoutes from './router/routerConfig';

import './router/axiosConfig';
import 'main.scss';

library.add(faUser, faHeart, faArrowRight);

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension():f=>f
));

console.log(store.getState());

class App extends React.Component {

    render() {
        return (
	        <Provider store={store}>
		       <BrowserRouter>
		        <Switch>
					<Route path='/' exact component={Auth}></Route>
			        <Route path='/dashboard' component={Home}></Route>
			        {/*<Redirect to='/dashboard'></Redirect>*/}
				</Switch>
		       </BrowserRouter>
	        </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
