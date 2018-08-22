import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


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
            <div className="siteContent page-home">
                home pageeeeeee
            </div>
        )
    }
}

export default Home;
