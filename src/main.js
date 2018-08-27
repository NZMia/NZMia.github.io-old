import React from 'react';
import ReactDOM  from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { routes } from './router/router';
import { renderRoutes } from 'react-router-config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHeart, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Header from './components/header';
import NavBar from './components/navBar';
import Footer from './components/footer';
import 'main.scss';

library.add(faUser, faHeart, faArrowRight);

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <section className="mainContent">
                    <NavBar />
                    <Header name={"LMS"} />
                    {renderRoutes(routes)}
                    <Footer />
                </section>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
