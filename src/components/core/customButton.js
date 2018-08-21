import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CustomButton extends Component {

	constructor(...args) {
		super(...args);
		var _this = this;
		_this.state = {
		}
	}

	render() {return (
		<div className="componentButton core-button-fog">
	            <span className="size16 ">
	                <a className="text-midnightSky flex flex-spaceBetween" href={this.props.myData} >

	                    <span className="titleContent">
		                    {this.props.myTitle}
	                    </span>
	                </a>
	            </span>
			</div>
		)

	}
}

export default CustomButton;