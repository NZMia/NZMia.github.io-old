import React, {Component} from 'react';

class Footer extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
    }

    render() {
        return (
            <footer className="flex flex-center endSticky">
                <div className="footer-wrapper text-center">
                    <h3 className="text-lightBrown"> Designed && Implemented By Mia Zhang</h3>

                    <div className="content-wrapper flex flex-spaceBetween">
                        <div className="social-link flex flex-center">

                            <a href="https://github.com/NZMia">
                                <img className="social-link-github" src={require('../assets/images/github.svg')} />
                            </a>
                            <a href="https://www.linkedin.com/in/nzmia/">
                                <img className="social-link-linkedIn" src={require('../assets/images/linkedin.svg')} />
                            </a>
                            <a href="mailto:nzmiazhang@gmail.com">
                                <img className="contact-detail-email" src={require('../assets/images/email.svg')} />
                            </a>
                        </div>
                        <div className="show-interest">

                        </div>

                        <div className="up-coming">

                        </div>

                    </div>

                    <h4 className="text-lightBrown">Copyright © 2018 By Mia Zhang. All Rights Reserved</h4>
                </div>
            </footer>
        )
    }
}

export default Footer;
