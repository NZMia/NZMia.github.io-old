import React, {Component} from 'react'
import { Tag, Input, Icon, Button, Form } from 'antd';

class ListRefactor extends Component {
    constructor(...args) {
		super(...args);
		this.state = {

		}
       // console.log(this.props.tagItem);
    }

    render() {
        return <Tag closable afterClose={() => this.handleTogClose(tag)}></Tag>
    }
}

export default ListRefactor;