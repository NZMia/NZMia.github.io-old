import React from 'react';
import ReactDOM  from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './router/router';
import 'main.scss';

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				{renderRoutes(routes)}
			</HashRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
	module.hot.accept()
}
