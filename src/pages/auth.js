import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, getUserData } from "../reducers/auth.redux";
import Admin from '../pages/admin';
import Login from '../pages/login';
import axios from 'axios';

@connect (
	state=>state.Auth,
	{ login, getUserData }
)

class Auth extends Component {
	constructor(props) {
		super(props)
		this.state={
			data:{}
		}
		console.log(this.props);
	}
	componentDidMount() {
		// this.props.getUserData();
		axios.get('/myAuth').then(res=>{
			if (res.status===200) {
				this.setState({data:res.data})
			}
		})
	}

	render(){
		return (
			<div>
				<h2>Name {this.props.email}, age{this.props.age}</h2>

				{/*{*/}
					{/*this.props.isAuth ?*/}
						{/*<Redirect to='/admin' /> :*/}

						{/*<Redirect to='/login' />*/}
				{/*}*/}
				{
					this.props.isAuth ?
						"isAuth true" :

						"isAuth false"
				}
				<h2>need login </h2>
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}

export default Auth;
