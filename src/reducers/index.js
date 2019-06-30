import { combineReducers } from 'redux';
import { IntervalRoundsCount } from '../components/IntervalWorkoutComponents/IntervalRoundsInput/IntervalRoundsInputReducers';
import { ChangeIntervalRestTime } from '../components/IntervalWorkoutComponents/IntervalRestTimer/IntervalRestTimerReducers'
import { ChangeIntervalTime } from '../components/IntervalWorkoutComponents/IntervalTimer/IntervalTimerReducers';
import { TimerStatus, WorkoutStatus, RemainingSeconds, CurrentRound } from '../components/IntervalWorkoutComponents/TimerApp/TimerAppReducers';
import { MainPageTitle } from '../components/TitleComponent/TitleComponentReducers';
import { CountTo } from '../components/CountForMeConponents/CountToNumber/CountToNumberReducers';
import { CountSpeed } from '../components/CountForMeConponents/CountSpeed/CountSpeedReducers';
import { CounterRoundsCount } from '../components/CountForMeConponents/CounterRoundsInput/CounterRoundsInputReducers';
import { ChangeCounterRestTime } from '../components/CountForMeConponents/CounterRestTimer/CounterRestTimerReducers';

export default combineReducers({
    ChangeIntervalTime,
    ChangeIntervalRestTime,
    TimerStatus,
    WorkoutStatus,
    RemainingSeconds,
    CurrentRound,
    IntervalRoundsCount,
    MainPageTitle,
    CountTo,
    CountSpeed,
    CounterRoundsCount,
    ChangeCounterRestTime

});