import React, {Component} from 'react';

class About extends Component {

	constructor(...args) {
		super(...args);
		var _this = this;
		_this.state = {
			name: this.props.name
		}
	}

	render() {
		return (
			<div>about</div>
		)
	}
}

export default About;