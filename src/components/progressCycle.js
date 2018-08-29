import React, {Component} from 'react';


class ProgressCycle extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {

        }

        console.log(this.props.name);
    }

    render() {
        return (
             <svg className="component-progressCycle"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  height="200"
                  width="200">

                 <circle cx="100"
                         cy="100"
                         r="94"
                         stroke-width="5"
                         stroke="#ff6038"
                         fill="none"
                         class="progress-ring_circle"
                         value='60' />

                 <text x="100" y="100" fill="#1a1a3b" stroke="#1a1a3b" text-anchor="middle">

                 </text>
            </svg>
        )
    }
}

export default ProgressCycle;
