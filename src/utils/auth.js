import React, {Component} from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

@withRouter

class Auth extends Component {

	constructor(...args) {
		super(...args);
	}

	componentDidMount() {
		const publicList = ['/login','/admin'];
		const pathname = this.props.location.pathname;

		if (publicList.indexOf(pathname)>-1) {
			return null
		}

		axios.get('/user/info').then(res=>{

			if (res.status === 200) {

				if( res.data.code === 0 ) {

					this.props.history.push('/admin');
				}else {
					this.props.history.push('/login')
				}
			}
		})
	}

	render() {
		return null
	}
}

export default Auth;
