import React, {Component} from 'react';
import {
    Button
  } from 'antd';
class TestButton extends Component {

    render() {
        return (
            <Button {...props}>
                Click me
            </Button>
        )
    }
}

export default TestButton;
