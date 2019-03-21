import React, { Component } from 'react';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate, Checkbox,
    Row, Col,
  } from 'antd';
const { Option } = Select;
class BlogNew extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
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
            <Form  onSubmit={this.handleSubmit}>
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