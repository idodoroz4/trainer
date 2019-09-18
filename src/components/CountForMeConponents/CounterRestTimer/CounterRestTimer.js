import React from 'react';
import { connect } from 'react-redux';
import TimerInput from '../../GeneralComponents/TimerInput';

import {
    CounterRestMinPlus,
    CounterRestMinMinus,
    CounterRestSecPlus,
    CounterRestSecMinus,
} from './CounterRestTimerActions';

const CounterRestInput = (props) => {
    return(
        <TimerInput
            minusSecond={props.CounterRestSecMinus}
            plusSecond={props.CounterRestSecPlus}
            minusMinute={props.CounterRestMinMinus}
            plusMinute={props.CounterRestMinPlus}
            seconds={props.counterRestTime}
            title="Rest Time"
        />
    )
}

const mapStateToProps = (state) => {
    return {
        counterRestTime: state.ChangeCounterRestTime.counterRestSeconds
    };
}

const actions = {
    CounterRestMinPlus,
    CounterRestMinMinus,
    CounterRestSecPlus,
    CounterRestSecMinus,
}

export default connect(mapStateToProps,actions)(CounterRestInput);