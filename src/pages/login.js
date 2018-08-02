import React, {Component} from 'react';

class Login extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
    }

    render() {
        return (
            <div>login</div>
        )
    }
}

export default Login;