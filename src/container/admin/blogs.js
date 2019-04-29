import React, { Component } from 'react';
import { Route} from "react-router-dom";
import BlogNew from './blogNew';
import BlogList from './blogList';
 
class Blogs extends Component {

    render() {
        return (
            <div>
                <Route path={`${this.props.match.url}/view list`} render={(props) => <BlogList {...props} />}></Route>
                <Route path={`${this.props.match.url}/add new`} render={(props) => <BlogNew {...props} />}></Route>
            </div>
        )
    }
}

export default Blogs
