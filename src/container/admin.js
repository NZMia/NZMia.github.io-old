import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_all_action } from "../reduxs/admin.redux";
import {Link, Route, Redirect} from "react-router-dom";

import SideBar from '../components/sideBar';
import Markdown from '../components/markdownAare';
import Lists from '../components/list';

@connect (
	state => state.admin_reducer,
	{ load_all_action }
)

class Admin extends Component {

    constructor(...args) {
        super(...args);
    }

    componentWillMount() {
    }

    componentDidMount() {
	    this.props.load_all_action()
    }

    render() {
	    return (
		    <div className="page-admin site-content flex flex-spaceBetween">

		        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
			    <div className="sideBar-wrapper component-width-1">
		        	<SideBar url={this.props.match.url}/>

	            </div>

	            <div className="content-wrapper component-width-auto">

		            <Route path={`${this.props.match.url}/users`}
		                   render={(props) => <Lists {...props} myData={this.props.userList}/>}/>

		            <Route path={`${this.props.match.url}/articles`}
		                   component={Markdown}/>

		            <Route path={`${this.props.match.url}/tags`}
		                   render={(props) => <Lists {...props} myData={'go to tags'}/>}/>
	            </div>
            </div>
	    )
    }
}

export default Admin;
