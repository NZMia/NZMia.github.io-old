import React, {Component} from 'react';
import { Spin } from 'antd';

class Loading extends Component {

	constructor(...args) {
		super(...args);
	}

	render() {
		return (
			<div>
				 <Spin size="large" />
			</div>
		)
	}
}

export default Loading
