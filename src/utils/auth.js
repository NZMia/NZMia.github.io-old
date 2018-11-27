import React, {Component} from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { get_me } from "../reduxs/me.redux";

@withRouter

@connect (
	state => state.me,
	{ get_me }
)

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

		this.props.get_me();
	}

	render() {
		return null
	}
}

export default Auth;
