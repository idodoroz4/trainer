import React, { Component } from 'react';
import { connect } from 'react-redux';
import RowComponent from '../../GeneralComponents/RowComponent';
import { ChangeSpeed } from './CountSpeedActions';

class SpeedComponent extends Component {
    render(){
        return(
            <RowComponent title="Speed">
                <button
                    onClick={() => this.props.ChangeSpeed(1500)}
                    className="btn btn-success btn-lg speedButton"
                > Low </button>
                <button
                    onClick={() => this.props.ChangeSpeed(1000) }
                    className="btn btn-warning btn-lg speedButton"
                > Medium </button>
                <button
                    onClick={() => this.props.ChangeSpeed(500) }
                    className="btn btn-danger btn-lg speedButton"
                > High </button>
            </RowComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countSpeed: state.CountSpeed.countSpeed
    }
}

export default connect(mapStateToProps,{ChangeSpeed})(SpeedComponent);