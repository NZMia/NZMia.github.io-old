import React, {Component} from 'react';
import CardFlip from '../components/cardFlip';
import axios from 'axios';
// const progressRing = require('../mockData/progressRing');
import { Button } from 'antd';


class Home extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
    }

    componentDidMount() {
	    axios.get('/myAuth').then(res=>{
		    console.log(res);
		    // if (res.status===200) {
		    // 	this.setState({data:res.data})
		    // }
	    })
    }
    getData = () => {
	    axios.get('/data')
		    .then(res => {
			    if(res.status === 200) {
			        console.log(res, 'res');
			    }
		    })
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-home site-content">
	            <Button type="dashed">Dash</Button>
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
