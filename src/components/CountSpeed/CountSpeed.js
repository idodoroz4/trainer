import React, { Component } from 'react';
import { connect } from 'react-redux';
import RowComponent from '../GeneralComponents/RowComponent';
import { ChangeSpeed } from './CountSpeedActions';

class SpeedComponent extends Component {
    render(){
        return(
            <RowComponent title="Speed">
                <button
                    onClick={() => {  }}
                    className="btn btn-success btn-lg speedButton"
                > Low </button>
                <button
                    onClick={() => {  }}
                    className="btn btn-warning btn-lg speedButton"
                > Medium </button>
                <button
                    onClick={() => {  }}
                    className="btn btn-danger btn-lg speedButton"
                > High </button>
            </RowComponent>
        )
    }
}

export default SpeedComponent;