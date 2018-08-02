import React, {Component} from 'react';

class Header extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
    }
    render() {
        return (
            <header>
                <h1>Hollow state {this.state.name} , props {this.props.name} </h1>
            </header>
        )
    }
}

export default Header;