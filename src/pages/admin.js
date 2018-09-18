import React, {Component} from 'react';

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
	            { this.props.isAuth? <Redirect to='/admin' /> : null}
	            <h2>You must login </h2>
				<button onClick={this.props.login}>login</button>
            </div>
        )
    }
}

export default Admin;
