import React, {Component} from 'react';

class NotFound extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
    }

    render() {
        return (
            <div className="site-content">

            </div>
        )
    }
}

export default NotFound;
