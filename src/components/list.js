import React, { Component } from 'react';
import { List, Avatar } from 'antd';

class Lists extends Component {

	constructor(...args) {
		super(...args);

	}

	render() {
		return (
			<div className="list-component">
				 <List itemLayout="horizontal"
				       header={<div>Header</div>}
				       footer={<div>Footer</div>}
				       pagination={{
						    onChange: (page) => {
							    console.log(page);
						    },
						    pageSize: 3,
				       }}
				       dataSource={this.props.myData}
				       renderItem={item => (
						    <List.Item actions={
						    	[
						    		<a>Edit</a>,
								    <a>Deactivate</a>
							    ]}>

						        <List.Item.Meta
							        title={
							        	<a href="https://ant.design">
									        {item.firstName + '.' + item.lastName} : {item.type}
								        </a>
							        }
							        description={item.email}
						        />
						      </List.Item> )} />
			</div>
		)
	}
}

export default Lists
