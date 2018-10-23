import React, { Component } from 'react';
import { connect } from 'react-redux';
import { users_action, user_current_action, user_selected } from "../reduxs/user.redux";
import {Link, Route, Redirect} from "react-router-dom";

import { Menu, Icon, Switch, Avatar } from 'antd';

import Markdown from '../components/markdownAare';
import Lists from '../components/list';
import AdminDetails from '../components/admin-component/details';

import { admin } from "../router/routers";

@connect (
	state => state.user_reducer,
	{ users_action, user_current_action, user_selected }
)

class Admin extends Component {

    constructor(...args) {
        super(...args);

	    this.state = {
		    collapsed: false,
		    theme: 'dark',
	    };

	    this.changeTheme = this.changeTheme.bind(this);
	    this.handShowItem = this.handShowItem.bind(this);
    }

	changeTheme = (value) => {
		this.setState({
			theme: value ? 'dark' : 'light',
		});
	};

    componentWillMount() {
    }

    componentDidMount() {
	    this.props.users_action();
	    this.props.user_current_action();
    }

    handShowItem(target, url) {
	    this.props.user_selected(target, url);
    }

    handleUpdate(e) {
	    console.log("myUpdate");
    }

    handleSave(e) {
	    console.log("mySave");
    }

    render() {
	    return (
		    <div className="page-admin site-content flex flex-spaceBetween">
			    {this.props.redirectTo?
				    <Redirect to={`${this.props.match.url}/users/update`} />:null}

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
					    </div>

					    {
						    admin.map(item => {
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
			        </Menu>
	            </div>

	            <div className="content-wrapper component-width-auto">

	                {
		                this.props.redirectTo ?
			                <Route path={`${this.props.redirectTo}`}
			                       render={(props) => <AdminDetails {...props}  myData={this.props.selectedUser} />}/> :

			                <Route path={`${this.props.match.url}/users`}
			                       render={(props) => <Lists {...props}  myData={this.props.userList} handleShow={this.handShowItem} />} />
	                }


		            <Route path={`${this.props.match.url}/articles`}
		                   component={Markdown}/>

		            <Route path={`${this.props.match.url}/tags`}
		                   render={(props) => <Lists {...props} myData={'go to tags'}/>} />

	            </div>
            </div>
	    )
    }
}

export default Admin;
