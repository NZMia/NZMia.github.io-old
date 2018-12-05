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
	            今天又是一个里程碑的日子，感恩父母，让我在拼搏的路上，没有后顾之忧。感恩自己的坚持，曾经无数辗转难眠的夜，就是我如今腰杆笔直的资本，虽然偶尔腰疼。
            </div>
        )
    }
}

export default NotFound;
