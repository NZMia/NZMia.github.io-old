import React from 'react';
import ReactDOM  from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { routes } from './router/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHeart, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header';
import NavBar from './components/navBar';
import Footer from './components/footer';

import renderRoutes from './router/routerConfig';
import './router/axiosConfig'
import 'main.scss';

library.add(faUser, faHeart, faArrowRight);

const authed = false;
const authPath = '/login';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <section className="main-content">

					<NavBar />

	                <div className="main-content-wrapper">
		                <Header name={"Test"} />
		                {renderRoutes(routes, authed, authPath)}
		                <Footer />
	                </div>

                </section>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
