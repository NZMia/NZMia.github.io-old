import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { me, get_all} from '../../reduxs/me.redux';
const TabPane = Tabs.TabPane;

@connect(state => state.me, { get_all })


class Users extends Component {
    constructor(...args) {
        super(...args);
        this.state = {

        };
        console.log(this.props);
    }

    componentWillMount() {
        this.props.get_all();
    }
    render() {
        return (
            <div className="page-admin-users">
                <Tabs type="card">
                    <TabPane tab="Tab Title 1" key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </TabPane>
                    <TabPane tab="Tab Title 2" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                    <TabPane tab="Tab Title 3" key="3">
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Users;
