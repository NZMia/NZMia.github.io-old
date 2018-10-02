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
import Home from './container/home';
import Login from './container/login';
import Register from './container/register';
import Admin from "./container/admin";

import { routes } from './router/router';
import reducers from './reduxs/index.redux';

import Auth from './utils/auth';

// import './router/axiosConfig';
import 'main.scss';

library.add(faUser, faHeart, faArrowRight);

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension():f=>f
));

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <section className="main-content">
                        <NavBar />
                        <div className="main-content-wrapper">
                            <Header name={"Redux"} />

                            <Route path='/' exact component={Home}></Route>
                            <Route path='/user' exact component={Auth}></Route>
                            <Route path='/login' component={Login}></Route>
                            <Route path='/admin' component={Admin}></Route>
                            <Route path='/register' component={Register}></Route>

                            <Footer />
                        </div>
                    </section>
                </HashRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
