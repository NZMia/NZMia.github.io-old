import React, {Component} from 'react';


class CardFlip extends Component {

    constructor(...args) {
        super(...args);
        var _this = this;
        _this.state = {

        }
    }

    render() {
        return (
            <div className="component-cardFlip">
                <div className="cardFlip-contain">
                    <div className="card-flip front-cardFlip">
                        <h3 className="front-title">Season 1</h3>
                    </div>
                    <div className="card-flip end-cardFlip">
                        <h3 className="back-title"> Season 2</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardFlip;
