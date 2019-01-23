import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tag, Input, Icon, Button, Form } from 'antd';
import { tag, add_tag } from '../reduxs/tag.redux';
import Cookies from 'js-cookie';
import { format } from 'path';
@connect (
    state => state.tag,
    { add_tag }
)
class Tagsss extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            inputVisible: false,
            name: '',
            authUser: /\"(.*?)\"/.exec(Cookies.get('_userId'))[1]
        };
       
        this.handleTogClose = this.handleTogClose.bind(this);
      
    }

    handleTogClose = (removedTag) => {
        console.log(removedTag)
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleNewTag = () => {
        
       this.props.add_tag(this.state);
    }

    render() {
        return (
            <div className="page-admin-tags site-content flex flex-column flex-horizontal-center">
                
                <div className='top-content tags-group'>

                    <Tag closable afterClose={() => this.handleTogClose(tag)}></Tag>
                </div>

                {
                     this.props.msg ? <p className='error-msg' style={{ color: '#f50' }}>{this.props.msg}</p> : null
                }
                <Form className="bottom-content tag-new flex flex-spaceAround">
                    <div className="input-warpper">
                    
                        <Input placeholder="New Tag" style={{ color: 'rgba(0,0,0,.25)', borderStyle: 'dashed' }}
                               prefix={<Icon type="plus" style={{ color: 'rgba(0,0,0,.25)' }}/>} 
                               onChange={this.handleChange} 
                               value={this.state.name} />
                    </div>
                    <div className="input-warpper">
                        <Button onClick={this.handleNewTag}>
                            Add New
                        </Button>
                    </div>
                </Form>
            </div> 
        )
    }
}

export default Tagsss;