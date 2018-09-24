import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

@withRouter
class Auth extends Component {

	componentDidMount() {
		const publicRouter = ['/login', '/register'];

		const pathName = this.props.location.pathname;
		if (!(publicRouter.indexOf(pathName) != -1)) {

			axios.get('/user/info').then(res => {
				if(res.status==200) {

					console.log(res.data);
					if(res.data.code === 0) {

						console.log(this.props.data);
					}else {
						this.props.history.push('/login');
					}
				}
			})
		}
	}

	render() {
		return null
	}
}

export default Auth;
