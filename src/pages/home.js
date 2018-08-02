import React, {Component} from 'react';
import Header from '../components/header';

class Home extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
    }

    render() {
        return (
            <Header name={"Mia"}></Header>
        )
    }
}

export default Home;