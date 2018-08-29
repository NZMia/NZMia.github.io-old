import React, {Component} from 'react';

class Admin extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
        console.log(this.props.authed);
    }


    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-admin site-content">
                admin tester
            </div>
        )
    }
}

export default Admin;
