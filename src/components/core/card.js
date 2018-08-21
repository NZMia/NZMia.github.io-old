import React, {Component} from 'react';
import Line from './line';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Card extends Component {

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
			<div className="component-card flex flex-spaceBetween">
				<div className="wrapper-image component-width-auto">
					<div className="card-image">
					     {/*// style={{backgroundImage: 'url(' + require('../assets/images/image.jpeg') + ')'}}>*/}
					</div>
				</div>

				<div className="wrapper-content component-width-auto padding">

					<div className="auth flex flex-start">
						<FontAwesomeIcon icon="user" />
						<div className="wrapper-content">
							<p> Name </p>
							<p> Date </p>
						</div>
					</div>
					<div className="content">
						<h3> Title </h3>
						<p className="multiLineTextElipsis">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
						</p>
					</div>
					<Line color={"lightGrey"}/>

					<div className="comment flex flex-spaceBetween padding-top">
						<button> Write Comment </button>

						<FontAwesomeIcon
							icon="heart"
							color="red"
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default Card;