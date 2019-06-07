import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimerInput from '../GeneralComponents/TimerInput';

import {
    RestMinPlus,
    RestMinMinus,
    RestSecPlus,
    RestSecMinus,
} from './RestTimerActions';

class IntervalInput extends Component {
    render() {
        return(
            <TimerInput
                minusSecond={this.props.RestSecMinus}
                plusSecond={this.props.RestSecPlus}
                minusMinute={this.props.RestMinMinus}
                plusMinute={this.props.RestMinPlus}
                seconds={this.props.restTime}
                title="Rest Time:"
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restTime: state.ChangeRestTime.restSeconds
    };
}

const actions = {
    RestMinPlus,
    RestMinMinus,
    RestSecPlus,
    RestSecMinus,
}

export default connect(mapStateToProps,actions)(IntervalInput);