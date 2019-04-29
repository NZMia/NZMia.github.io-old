import React, { Component } from 'react';
import {
    Form, Select, Button, Upload, Icon, Rate, Input
} from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

const { Option } = Select;

class BlogNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: BraftEditor.createEditorState(null)
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (editorState) => {
        this.setState({ editorState })
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    editorLanguage = (languages, context) => {
        if (context === 'braft-editor') {
            languages.en.controls.clear = 'clear'
            return languages.en
          }
    }
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item
                    label="Title"
                    >
                    {getFieldDecorator('email', {
                        rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                        required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label="Select[multiple]">
                    {getFieldDecorator('select-multiple', {
                        rules: [
                        { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                    })(
                        <Select mode="multiple" placeholder="Please select favourite colors">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="Content">
                    <BraftEditor
                    value={this.state.editorState}
                    onChange={this.handleChange}
                    language={this.editorLanguage}/>
                </Form.Item>
                <Form.Item label="Rate">
                    {getFieldDecorator('rate', {
                        initialValue: 3.5,
                    })(
                        <Rate />
                    )}
                </Form.Item>

                <Form.Item
                label="Dragger"
                >
                <div className="dropbox">
                    {getFieldDecorator('dragger', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    })(
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                    )}
                </div>
                </Form.Item>

                <Form.Item
                wrapperCol={{ span: 12, offset: 6 }}
                >
                <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create({name: 'blog-new'})(BlogNew)