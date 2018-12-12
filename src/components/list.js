import React, { Component } from 'react';
import { List } from 'antd';
import { connect } from 'react-redux';

@connect (
	state => state.user_reducer,
)

class Lists extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			ModalText: 'Content of the modal',
			visible: false,
			confirmLoading: false,
			showModals: false,
			content:[]
		}

	}

	componentDidUpdate() {
	}

	render() {
		return (
			<div className="list-component">
				<List itemLayout="horizontal"
				      header={<div>Header</div>}
				      footer={<div>Footer</div>}
				      pagination={{pageSize: 3}}
				      dataSource={this.props.myData}
				      renderItem={item => (
					      <List.Item actions={[
						      <a onClick={this.props.mySave}>
							      Deactivatess
						      </a>
					      ]}>

						      <List.Item.Meta
							      title={
							        	<a href="https://ant.design">
									        {item.firstName + '.' + item.lastName} : {item.type}
								        </a>
							      }
							      description={item.email}/>

						      </List.Item> )} />
			</div>
		)
	}
}

export default Lists
