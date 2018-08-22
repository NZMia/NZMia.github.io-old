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
            <header className="flex flex-center">
                <div className="headerWrapper">
                     <h1 className="text-lightBrown"> {this.state.name} Dashboard </h1>
                </div>
            </header>
        )
    }
}

export default Header;
