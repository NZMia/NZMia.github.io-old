import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { routes } from '../router/router';

class NavBar extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name,
            stickyState: ' '
        }
        _this.handleScroll = this.handleScroll.bind(this);

    }

    handleScroll = () => {
        var changeSticky = document.querySelector('header').clientHeight;
        var endSticky = document.querySelector('.endSticky').offsetTop;
        var windowH = window.scrollY;
        
        if (windowH > changeSticky  && windowH < endSticky) {

            this.setState({stickyState: 'stickyNav'})
        }else if (windowH > endSticky) {

            this.setState({stickyState: 'end'})
        }else {

            this.setState({stickyState: ''})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll,false);

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll, false);
    }

    render() {
        return (
            <nav className={'component-nav flex flex-end' + ' ' + this.state.stickyState}>
                {
                    routes.map((r, i) => {
                        return (
                            r.name != null ?<li key={i}><Link to={r.path}>{r.name}</Link></li> : ""
                        )
                    })
                }
            </nav>
        )
    }
}

export default NavBar
