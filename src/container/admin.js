import React, {Component} from 'react';
import { connect } from 'react-redux';
import SideBar from '../components/sideBar';

class Admin extends Component {

    constructor(...args) {
        super(...args);

    }


    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-admin site-content flex flex-spaceBetween">
	            <div className="sideBar-wrapper component-width-1">
		            <SideBar />
	            </div>
            </div>
        )
    }
}

export default Admin;
