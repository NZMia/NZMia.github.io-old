import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from "../reduxs/auth.redux";

@connect (
	state=>state.Auth,
	{ getUserData }
)

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state={
			data:{}
		};
	}

	componentDidMount() {
		 this.props.getUserData();
	}

	render(){
		return (
			<div className="page-auth site-content">

				{
					this.props.isAuth ? <Redirect to='/admin' /> : <Redirect to='/login' />
				}
			</div>
		)
	}
}

export default Auth;
