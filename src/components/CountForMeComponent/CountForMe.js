import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountSpeed from '../CountSpeed/CountSpeed';
import RoundsInput from '../RoundsInput/RoundsInput';
import CountToNumber from '../CountToNumber/CountToNumber';

class CountForMe extends Component {
    render(){
        return(
            <div className="container">
                <CountToNumber />
                <CountSpeed />
                <RoundsInput />
            </div>
        );
    }
}

export default CountForMe;