import React, {Component} from 'react';

class Line extends Component {

	constructor(...args) {
		super(...args);
		var _this = this;
		_this.state = {
			color: this.props.color
		}
	}

	render() {
		return (
			<div className={"component-line" +" " + "line-" + this.state.color + " " + "padding-top"}>
			</div>
		)
	}
}

export default Line;