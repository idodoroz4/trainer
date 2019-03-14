import { combineReducers } from 'redux';
import { RoundsCount } from '../components/RoundsInput/RoundsInputReducers'
import { ChangeIntervalTime, ChangeRestTime } from '../components/TimerInput/TimerInputReducers'
import { TimerStatus, WorkoutStatus, RemainingSeconds, CurrentRound } from '../components/TimerApp/TimerAppReducers'

export default combineReducers({
    ChangeIntervalTime,
    ChangeRestTime,
    TimerStatus,
    WorkoutStatus,
    RemainingSeconds,
    CurrentRound,
    RoundsCount
});