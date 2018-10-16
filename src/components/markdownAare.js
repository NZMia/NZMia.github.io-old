import React, { Component } from 'react';

class Markdown extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			collapsed: false,
		}
	}

	render() {
		return (
			<div className="markdown-component">
				right Markdown site
			</div>
		)
	}
}

export default Markdown
