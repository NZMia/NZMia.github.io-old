import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Routers from './pages'
import 'main.scss'

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Routers />
			</HashRouter>
		)
	}
}

render(<App/>, document.getElementById('app'))

if (module.hot) {
	module.hot.accept()
}
