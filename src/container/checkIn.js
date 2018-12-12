import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Select, Input, Icon, Button, Tabs } from 'antd';
import { connect } from 'react-redux';
import { set_login, set_register } from "../reduxs/me.redux";

import { signin, signup } from "../utils/constant";

import Header from '../components/header';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

const TabPane = Tabs.TabPane;

@withRouter
    @connect (
        state => state.me,
        { set_login, set_register }
    )

class CheckIn extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            pwd: '',
            rePwd: '',
            type: ''
        };

        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRegister() {
        this.props.set_register(this.state);
    }

    handleLogin() {
        this.props.set_login(this.state);
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
                    <div className="flex flex-center">

                        <div className="auth-wrapper component-width-2">
                            <Tabs>

                                <TabPane tab="Sign In" key="to-signin" className="form form-signin">

                                    <Input.Group>
                                        {
                                            this.props.msg ? <p className='error-msg' style={{ color: '#f50' }}>{this.props.msg}</p> : null
                                        }
                                        {
                                            Object.entries(signin).map(([key, value])=> {

                                                return <Input placeholder={value}
                                                              onChange={val => this.handleChange(key, val)}
                                                              prefix={key != 'pwd' ?
                                                                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> :
                                                                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                                            })
                                        }
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
                                        <Button type="dashed" onClick={this.handleLogin}>
                                            Sign In
                                        </Button>
                                    </div>
                                </TabPane>

                                <TabPane tab="Sign Up" key="to-signup" className="form  form-signup">
                                     <Input.Group>
                                         {
                                            this.props.msg ? <p className='error-msg' style={{ color: '#f50' }}>{this.props.msg}</p> : null
                                         }
                                         {
                                             Object.entries(signup).map(([key, value])=> {

                                                 return <Input placeholder={value}
                                                               onChange={val => this.handleChange(key, val)}
                                                               prefix={key != 'pwd' && key != 'rePwd'?
                                                                   <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> :
                                                                   <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                                             })
                                         }

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
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                <Footer />
            </section>
        )
    }
}

export default CheckIn;
