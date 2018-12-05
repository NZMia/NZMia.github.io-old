import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Select, Input, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { get_login } from "../reduxs/me.redux";

import Header from '../components/header';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

@connect (
	state => state.me,
	{ get_login }
)
class Login extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            email: '',
            pwd: '',
	        type: '',
        };
	    this.handleRegister = this.handleRegister.bind(this);
	    this.handleLogin = this.handleLogin.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    console.log('get login');
	    console.log(this.props.matchUrl);
    }


    handleRegister() {
        this.props.history.push('/register');
    }

    handleLogin() {
    	console.log(this.state);
	    this.props.get_login(this.state);
    }

    handleChange(key, val) {
	    this.setState({
		    [key]: key != 'type' ? val.target.value : val
	    })
    }

    render() {
        return (
	        <section className="main-content">
                <NavBar />
                <Header name={"Redux"} />
	            <div className="auth-page site-content flex flex-center">
					{/*{this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}*/}
	               {/* <div className="auth-wrapper">
		                {
			                this.props.msg ? <p className='error-msg' style={{ color: '#f50' }}>{this.props.msg}</p> : null
		                }
	                    <Input placeholder="Enter your email"
	                           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
	                           onChange={val => this.handleChange('email', val)} />

	                    <Input placeholder="Enter your password"
	                           type="password"
	                           prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
	                           onChange={val => this.handleChange('pwd', val)} />

		                <div className="select-wrapper">

	                        <Select className="flex flex-horizontal-center"
	                                defaultValue="---Select---"
	                                style={{ flex: '1' }}
	                                onChange={val => this.handleChange('type', val)}>
	                            <Select.Option value="Visitor">Visitor</Select.Option>
	                            <Select.Option value="Administrator">Administrator</Select.Option>
	                        </Select>
	                    </div>
	                    <div className="button-wrapper flex flex-spaceAround">

	                        <Button type="dashed" onClick={this.handleLogin}>
	                            Sign In
	                        </Button>

	                        <Button type="dashed" onClick={this.handleRegister}>
	                            Sign Up
	                        </Button>
	                    </div>
	                </div>*/}
	            </div>
		        <Footer />
	        </section>
        )
    }
}
export default Login;
