import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tag, Input, Icon, Button, Form, Empty } from 'antd';
import { tag, add_tag, get_tags, update_tag } from '../../reduxs/tag.redux';

import Cookies from 'js-cookie';
import "antd/dist/antd.css";

@connect(state => state.tag, { add_tag, get_tags, update_tag })

class Tags extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            inputVisible: false,
            name: '',
            isActive:'',
            tag_id:'',
            authUser: /\"(.*?)\"/.exec(Cookies.get('_userId'))[1]
        };
        this.handleTogClose = this.handleTogClose.bind(this);
    }

    componentWillMount() {
        this.props.get_tags();
    }

    handleTogClose = (removeItem) => {
        console.log(removeItem);
        this.props.update_tag(removeItem);
    };

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleNewTag = () => {
        this.props.add_tag(this.state);
        setTimeout(()=>{ this.props.get_tags()},1000)
    };
    render() {
        return (
        <div className="page-admin-tags site-content flex flex-column flex-horizontal-center">

            <div className='top-content tags-group'>

                {
                    this.props.tagList && this.props.tagList.length != 0 ?
                    this.props.tagList.map(item => {
                        return (
                            item.isActive && 
                            <Tag closable afterClose={() => this.handleTogClose(item)}>
                                { item.name }
                            </Tag>
                        )
                    }):
                    <Empty />
                }
            </div>

            {this.props.msg ? <p className='error-msg' style={{ color: '#f50' }}>{this.props.msg}</p> : null}
            <Form className="bottom-content tag-new flex flex-spaceAround">
                <div className="input-warpper">

                    <Input placeholder="New Tag"
                        style={{ color: 'rgba(0,0,0,.25)', borderStyle: 'dashed' }}
                        prefix={<Icon type="plus" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange={this.handleChange} value={this.state.name} />
                </div>
                <div className="input-warpper">
                    <Button onClick={this.handleNewTag}>
                        Add New
                    </Button>
                </div>
            </Form>
        </div>);
    }
}

export default Tags;
