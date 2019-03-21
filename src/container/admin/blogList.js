import React, {Component} from 'react';
import {
    Button, Menu, Dropdown, Icon,
  } from 'antd';
import TestButton from '../../components/testButton';
const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );


function handleMenuClick(e) {
console.log('click', e);
}
const ButtonIcon3 = props => {
    return <Button {...props}>where is yuyuyu</Button>;
  };
class BlogList extends Component {

    render() {
        return (
            <div>
                <Dropdown overlay={menu}>
                    <ButtonIcon3></ButtonIcon3>
                </Dropdown>
                <Dropdown overlay={menu}>
                    <Button>test</Button>
                </Dropdown>
            </div>
        )
    }
}

export default BlogList