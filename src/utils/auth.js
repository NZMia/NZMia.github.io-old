import React, {Component} from 'react';
import axios from 'axios';
import {loading_one} from "../reduxs/admin.redux";
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

@withRouter
@connect (
	state => state.admin_reducer,
	{loading_one}
)

class Auth extends Component {

	constructor(...args) {
		super(...args);
	}

	componentDidMount() {
		console.log( this.props.location.pathname)
		axios.get('/user/info').
			then(res=>{
			console.log(res.data);
				if (res.status==200) {
					if (res.data.code==0) {

						this.props.loading_one(res.data.data)
						this.props.history.push('/admin')
					}else{
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
