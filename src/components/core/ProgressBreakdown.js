import React, {Component} from 'react';
import CustomButton from '../components/customButton';

class ProgressBreakdown extends Component {

	constructor(...args) {
		super(...args);
		var _this = this;
		_this.state = {
			name: this.props.name
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div className="component-progressBreak flex flex-spaceBetween">
				<div className="wrapper-image component-width-auto">
					<div className="card-image"
					      style={{backgroundImage: 'url(' + require('../assets/images/image.jpeg') + ')'}}>
					     {/*style={{backgroundImage: {url({this.props.coursesData.coverImageUr})}}}>*/}
					</div>
				</div>

				<div className="wrapper-content component-width-auto padding">

					<h2 className="text-pineapple">
						{this.props.coursesData.name}
					</h2>

					<CustomButton myData={this.props.coursesData.link}
									myTitle={this.props.coursesData.name}/>
				</div>
			</div>
		)
	}
}

export default ProgressBreakdown;