import React, { Component } from 'react';
import { connect } from 'react-redux';
import RowComponent from '../../GeneralComponents/RowComponent';
import { ChangeSpeed } from './CountSpeedActions';

class SpeedComponent extends Component {
    render(){
        return(
            <RowComponent title="Speed">
                <button
                    onClick={() => this.props.ChangeSpeed(10 * 1000)}
                    className="btn btn-success btn-lg speedButton"
                > 10 Sec </button>
                <button
                    onClick={() => this.props.ChangeSpeed(5 * 1000) }
                    className="btn btn-warning btn-lg speedButton"
                > 5 Sec </button>
                <button
                    onClick={() => this.props.ChangeSpeed(1000) }
                    className="btn btn-danger btn-lg speedButton"
                > 1 Sec </button>
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