import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { login, getUserData } from "../reduxs/auth.redux";

@connect (
	state=>state.Auth,
	{ login, getUserData }
)

class Login extends Component {

	constructor(...args) {
	    super(...args);
	    var _this = this;
	    _this.state = {
	        user: '',
	        pwd: ''
	    }
	    _this.handleRegister = this.handleRegister.bind(this);
	    _this.handleLogin = this.handleRegister.bind(this);
	}


	handleRegister() {
		this.props.history.push('/register')
	}

    handleLogin() {
	    console.log('login');
    }

    handleChange(key, val) {
    	this.setState({
            [key]: val
    	})
	}

    render() {
        return (
            <div className="auth-page site-content flex flex-center">

	            <div className="auth-wrapper">
					<Input placeholder="Enter your email"
					       prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					       onChange={val => this.handleChange('user', val)} />

		            <Input placeholder="Enter your password"
		                   type="password"
		                   prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
		                   onChange={val => this.handleChange('pwd', val)} />

		            <div className="button-wrapper flex flex-spaceAround">

			            <Button type="dashed" onClick={this.handleLogin}>
				            Sign In
			            </Button>

			            <Button type="dashed" onClick={this.handleRegister}>
				            Sign Up
			            </Button>
		            </div>
	            </div>
            </div>
        )
    }
}
export default Login;
