import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

@withRouter
class Auth extends Component {

    componentDidMount() {
        const publicRouter = ['/login', '/register'];

        const pathName = this.props.location.pathname;
        if (!(publicRouter.indexOf(pathName) != -1)) {

            axios.get('/user/info').then(res => {
                if(res.status==200) {

                    if(res.data.code === 0) {

                    }else {
                        this.props.history.push('/login');
                    }
                }
            })
        }
    }

    render() {
        return null
    }
}

export default Auth;
