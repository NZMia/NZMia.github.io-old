import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_me, set_logout } from "../reduxs/me.redux";
import { Route, Link } from "react-router-dom";

import { Menu, Icon, Switch, Avatar, Button, Modal } from 'antd';

import Cookies from 'js-cookie';
import { adminRoute } from "../router/routers";
import Title from 'antd/lib/skeleton/Avatar';

import Tags from "./tags";

@connect (
    state => state.me,
    { get_me, set_logout },
)

class Admin extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            collapsed: false,
            visible: false,
            theme: 'dark',
            userId: this.props.hasCookies ? /\"(.*?)\"/.exec(Cookies.get('_userId'))[1] : ''
        };

        this.changeTheme = this.changeTheme.bind(this);
        this.handShowItem = this.handShowItem.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    /**
     * is Auth Check
     * 
     * if none cookies record, redirect to login page then.
     */ 
    componentWillMount() {
        this.props.get_me(this.state.userId);
    }

    componentDidMount() {
        console.log('did update');
    }

    handShowItem(target, url) {
        // this.props.user_selected(target, url);

        //const current_user = localStorage.getItem('current_user');

        // if(this.props.projectList.size === 0 && current_user) {
        //
        // }
    }

    handleUpdate(e) {
        console.log("myUpdate");
    }

    handleSave(e) {
        console.log("mySave");
    }

    /**
     * Logout function
     * 
     * clear cookies
     * redirect to home page if logout
     */
    showModal = () => {
        this.setState({visible: true})
    };

    hideModal = () => {
        this.setState({visible: false})
    }

    handleLogout = () => {
        this.hideModal();
        this.props.set_logout();
        Cookies.remove('_userId', { path: '' });
        this.props.history.push("/");
    }
    
    render() {
        return (
            <div className="page-admin site-content flex flex-spaceBetween">
                
                <div className="sideBar-wrapper component-width-1">

                    <Menu className="sideBar-component"
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          mode="inline"
                          theme={this.state.theme}
                          inlineCollapsed={this.state.collapsed}>

                        <div className="flex flex-column flex-horizontal-center">
                            <Avatar shape="square" size="large" icon="user" />
                            <p className="text-white">{this.props.firstName}.{this.props.lastName}</p>
                            <p className="text-white">{this.props.type}</p>
                            <p className="text-white">{this.props.email}</p>
                        </div>

                        {
                            adminRoute.map(item => {
                                return (
                                    <Menu.Item key={`${item}` != "home" ?`${this.props.match.url}/${item}` : '/'}>
                                        <Icon type="pie-chart" />
                                        <span>{item}</span>
                                        <Link to={`${item}` != "home" ? `${this.props.match.url}/${item}` : '/'} />
                                    </Menu.Item>
                                )
                            })
                        }

                        <Menu.Item disabled={true}>
                            <Switch checkedChildren="dark"
                                   unCheckedChildren="light"
                                   onChange={this.changeTheme}
                                   defaultChecked>
                                Change Theme
                            </Switch>
                        </Menu.Item>

                        <Menu.Item disabled={true}>

                            <Button type="dashed" onClick={this.showModal}>
                                Logout
                            </Button>
                            <Modal 	title="Are you sure you'd like to LOGOUT" 
                                    visible={this.state.visible} 
                                    onOk={this.handleLogout} 
                                    onCancel={this.hideModal} 
                                    okText='YES'
                                    cancelText='Cancel'>

                            </Modal>
                        </Menu.Item>
                    </Menu>
                </div>

                <div className="content-wrapper component-width-auto">

                    {/* {
                        this.props.redirectTo ?
                            <Route path={`${this.props.redirectTo}`}
                                   render={(props) => <AdminDetails {...props}  myData={this.props.selectedUser} />}/> :

                            <Route path={`${this.props.match.url}/users`}
                                   render={(props) => <Lists {...props}  myData={this.props.userList} handleShow={this.handShowItem} />} />
                    }


                    <Route path={`${this.props.match.url}/articles`}
                           component={Markdown} />

                    <Route path={`${this.props.match.url}/tags`}
                           render={(props) => <Lists {...props} myData={'go to tags'}/>} /> */}

                    <Route path={`${this.props.match.url}/tags`} render={(props) => <Tags {...props} authUser={this.props.email}/>}></Route>

                </div>
            </div>
        )
    }
}

export default Admin;

