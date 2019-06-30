import React from 'react';
import { connect } from 'react-redux';
import TimerInput from '../../GeneralComponents/TimerInput';

import {
    IntervalRestMinPlus,
    IntervalRestMinMinus,
    IntervalRestSecPlus,
    IntervalRestSecMinus,
} from './IntervalRestTimerActions';

const IntervalInput = (props) => {
    return(
        <TimerInput
            minusSecond={props.IntervalRestSecMinus}
            plusSecond={props.IntervalRestSecPlus}
            minusMinute={props.IntervalRestMinMinus}
            plusMinute={props.IntervalRestMinPlus}
            seconds={props.intervalRestTime}
            title="Rest Time"
        />
    )
}

const mapStateToProps = (state) => {
    return {
        intervalRestTime: state.ChangeIntervalRestTime.intervalRestSeconds
    };
}

const actions = {
    IntervalRestMinPlus,
    IntervalRestMinMinus,
    IntervalRestSecPlus,
    IntervalRestSecMinus,
}

export default connect(mapStateToProps,actions)(IntervalInput);