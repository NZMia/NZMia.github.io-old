import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_me } from "../reduxs/me.redux";

@withRouter
	@connect (
		state => state.me,
		{ get_me }
	)

class Auth extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			hasCookies: this.props.hasCookies
		}
	}

	componentWillMount() {

		console.log('will');
		console.log(this.state.hasCookies);
		setTimeout(()=> {
			this.props.get_me();
			console.log(this.props.hasCookies)
		},0);

	}

	componentDidMount() {

		this.props.get_me();
		console.log(this.state.hasCookies);
		//console.log(this.props.hasCookies)
	}

	render() {
		return (
			<div className="auth site-content">

				{
					//console.log(this.props.hasCookies)
					// this.props.hasCookies ?
					// 	console.log('gp admin') :
					// 	console.log('go checkin')
						// <Route path={`${this.props.match.url}/admin`}
						//        render={(props) => <Admin {...props} />}></Route> :
						//
						// <Route path={`${this.props.match.url}`}
						//        render={(props) => <CheckIn {...props} matchUrl={this.props.match.url} />}></Route>
				}

            </div>
		)
	}
}

export default Auth;
