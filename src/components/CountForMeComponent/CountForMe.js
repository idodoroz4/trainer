import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberCounter from '../GeneralComponents/NumberCounter';
import SpeedComponent from '../SpeedComponent/SpeedComponent';

class CountForMe extends Component {
    render(){
        return(
            <div className="container">
                <NumberCounter
                    title="Count To"
                    num={10}
                    minus={() => {console.log("CountToMinus")}}
                    plus={() => {console.log("CountToPlus")}}
                />
                <SpeedComponent />
                <NumberCounter
                    title="Rounds"
                    num={1}
                    minus={() => {console.log("RoundsMinus")}}
                    plus={() => {console.log("RoundsPlus")}}
                />
            </div>
        );
    }
}

export default CountForMe;