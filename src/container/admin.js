import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logout, getUserData } from "../reduxs/auth.redux";

@connect (
	state=>state.Auth,
	{ logout, getUserData }
)
class Admin extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
        console.log(this.props.authed);
    }


    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-admin site-content">
                <h2>
	                your name is {this.props.user}, age is {this.props.age}
                </h2>

				<button onClick={this.props.logout}>logout</button>
            </div>
        )
    }
}

export default Admin;
