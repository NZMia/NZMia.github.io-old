import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from "../reducers/counter.redux";

@connect(
	state => ({
		num: state.Counter
	}),
	{ addGun, removeGun, addGunAsync }
)

class Counter extends Component {

	render() {
		return (
			<div className="reduxText">
				<h1>Redux Test {this.props.num}</h1>
				<button onClick={this.props.addGun}>Add</button>
				<button onClick={this.props.removeGun}>Remove </button>
				<button onClick={this.props.addGunAsync}>Apply</button>
			</div>
		)
	}
}

export default Counter;
