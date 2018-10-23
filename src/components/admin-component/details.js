import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import {  update_action } from "../../reduxs/user.redux";

@connect (
	state => state.user_reducer,
	{ update_action }
)

class AdminDetails extends Component {
	constructor(...args) {
		super(...args);
		this.state = {
			_id: this.props._id,
			type: this.props.myData.type,
			firstName: this.props.myData.firstName,
			lastName: this.props.myData.lastName,
			isActive: this.props.myData.isActive,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);

	}

	componentDidUpdate() {

	}

	handleChange(key, val) {
		console.log(val.target.value);
		this.setState({
			[key]: val.target.value
		})
	}

	handleSubmit() {
		this.props.update_action(this.state);
	}

	handleCancel() {
		console.log('cancle');
	}
	render() {
		return (
			<div className="component-edit-form">

				{
					Object.keys(this.props.myData).map((i, index) => {

						if(i != '_id' && i != 'isActive' && i != 'createdAt' ) {
							return (
								<div className="wrapper flex flex-start" key={index}>
									<label className="component-width-1 text-right">{i}</label>
									<Input placeholder={this.props.myData[i]}
									       prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									       onChange={val => this.handleChange(i, val)} />
								</div>
							)
						}
					})
				}
                <div className="button-wrapper flex flex-spaceAround">

                    <Button type="dashed" onClick={this.handleSubmit}>
                        Submit
                    </Button>

                    <Button type="dashed" onClick={this.handleCancle}>
                        Cancel
                    </Button>
                </div>
	        </div>
		)
	}
}

export default AdminDetails