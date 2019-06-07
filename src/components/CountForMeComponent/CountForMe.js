import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountSpeed from '../CountSpeed/CountSpeed';
import RoundsInput from '../RoundsInput/RoundsInput';
import CountToNumber from '../CountToNumber/CountToNumber';
import { StartButton } from '../GeneralComponents/StartButton';
import RestTimer from '../RestTimer/RestTimer';

class CountForMe extends Component {
    render(){
        return(
            <div className="container">
                <CountToNumber />
                <CountSpeed />
                <RoundsInput />
                <RestTimer />
                <StartButton onClick={() => console.log("clicked!")} value="START" />
            </div>
        );
    }
}

export default CountForMe;