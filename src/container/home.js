import React, {Component} from 'react';
import { Button } from 'antd';

import Header from '../components/header';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

class Home extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
    }

    componentDidMount() {
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-home site-content">
	            <section className="main-content">
	                <NavBar />
	                <Header name={"Redux"} />
		            <Button type="dashed">Dash</Button>
	                <Footer />
	            </section>
                {/*<div className="cardFlip-wrapper flex flex-spaceAround">*/}
                    {/*{*/}
                        {/*Object.keys(progressRing).map((k, i) => {*/}
                            {/*return  <CardFlip onClick={this.getData} key={i} />*/}
                        {/*})*/}
                    {/*}*/}
                {/*</div>*/}
                {/*<div className="progressRing-wrapper flex flex-spaceAround">*/}
                    {/*{*/}
                        {/*Object.keys(progressRing).map((k, i) => {*/}
                            {/*return <ProgressCycle key={i} name={progressRing[i]} />*/}
                        {/*})*/}
                    {/*}*/}
                {/*</div>*/}


	            {/*<BrowserRouter>*/}

	            {/*</BrowserRouter>*/}
            </div>
        )
    }
}

export default Home;
