import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Select, Input, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { register_action } from "../reduxs/user.redux";

import Header from '../components/header';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

@connect(
    state => state.user_reducer,
    { register_action }
)
class Register extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            pwd: '',
            rePwd: '',
            type: 'Visitor',

        };
        this.handleRegister = this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key, val) {

        this.setState({
            [key]: key != 'type' ? val.target.value : val
        })
    }
    handleRegister() {
        this.props.register_action(this.state);
    }

    render() {
        return (
	        <section className="main-content">
                <NavBar />
                <Header name={"Redux"} />
                <div className="auth-page site-content flex flex-center">
	            {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
                <div className="auth-wrapper">
                    <Input.Group>
                        {
                            this.props.msg ? <p className='error-msg' style={{ color: '#f50' }}>{this.props.msg}</p> : null
                        }
                        <Input placeholder="Email"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={val => this.handleChange('email', val)} />

                        <Input placeholder="First Name"
                            type="text"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={val => this.handleChange('firstName', val)} />

                        <Input placeholder="Last Name"
                            type="text"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={val => this.handleChange('lastName', val)} />

                        <Input placeholder="Password"
                            type="password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={val => this.handleChange('pwd', val)} />

                        <Input placeholder="Confirm password"
                            type="password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={val => this.handleChange('rePwd', val)} />

                    </Input.Group>

                    <div className="select-wrapper">

                        <Select className="flex flex-horizontal-center"
                            defaultValue="---Select---"
                            style={{ flex: '1' }}
                            onChange={val => this.handleChange('type', val)}>
                            <Select.Option value="Visitor">Visitor</Select.Option>
                            <Select.Option value="Administrator">Administrator</Select.Option>
                        </Select>
                    </div>

                    <div className="button-wrapper">
                        <Button type="dashed" onClick={this.handleRegister}>
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
		        <Footer />
	        </section>
        )
    }
}

export default Register
