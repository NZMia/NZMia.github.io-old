import React, { Component } from 'react'
import { Menu, Icon, Switch } from 'antd';
import { Link } from "react-router-dom";

class SideBar extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			collapsed: false,
			theme: 'dark',
		}
		this.changeTheme = this.changeTheme.bind(this);
	}

	changeTheme = (value) => {
		this.setState({
			theme: value ? 'dark' : 'light',
		});
	};

	render() {
		return (
			<Menu className="sideBar-component"
			      defaultSelectedKeys={['1']}
			      defaultOpenKeys={['sub1']}
			      mode="inline"
			      theme={this.state.theme}
			      inlineCollapsed={this.state.collapsed}>

				<Menu.Item key='/'>
	                <Icon type="pie-chart" />
	                <span>Home</span>
					<Link to="/" />
	            </Menu.Item>

	            <Menu.Item key={`${this.props.url}/users`}>
		            <Icon type="desktop" />
		            <span>Users</span>
		            <Link to={`${this.props.url}/users`} />
	            </Menu.Item>

	            <Menu.Item key={`${this.props.url}/articles`}>
		            <Icon type="inbox" />
		            <span>Articles</span>
		            <Link to={`${this.props.url}/articles`} />
	            </Menu.Item>

				<Menu.Item key={`${this.props.url}/tags`}>
		            <Icon type="inbox" />
		            <span>Tags</span>
					<Link to={`${this.props.url}/tags`} />
	            </Menu.Item>

				<li>
					<Switch checkedChildren="dark"
					        unCheckedChildren="light"
					        onChange={this.changeTheme}
					        defaultChecked> Change Theme </Switch>
				</li>

	        </Menu>
		)
	}
}

export default SideBar
