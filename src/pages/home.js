import React, {Component} from 'react';
import CardFlip from '../components/cardFlip';

const progressRing = require('../mockData/progressRing');

class Home extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {
            name: this.props.name
        }
    }


    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-home site-content">
                <div className="cardFlip-wrapper flex flex-spaceAround">
                    {
                        Object.keys(progressRing).map((k, i) => {
                            return  <CardFlip key={i} />
                        })
                    }
                </div>
                {/*<div className="progressRing-wrapper flex flex-spaceAround">*/}
                    {/*{*/}
                        {/*Object.keys(progressRing).map((k, i) => {*/}
                            {/*return <ProgressCycle key={i} name={progressRing[i]} />*/}
                        {/*})*/}
                    {/*}*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Home;
