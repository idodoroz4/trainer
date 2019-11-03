import { combineReducers } from 'redux';
import { IntervalRoundsCount } from '../components/IntervalWorkoutComponents/IntervalRoundsInput/IntervalRoundsInputReducers';
import { ChangeIntervalRestTime } from '../components/IntervalWorkoutComponents/IntervalRestTimer/IntervalRestTimerReducers'
import { ChangeIntervalTime } from '../components/IntervalWorkoutComponents/IntervalTimer/IntervalTimerReducers';
import { IntervalTimerStatus, IntervalWorkoutStatus, IntervalRemainingSeconds, IntervalCurrentRound } from '../components/IntervalWorkoutComponents/IntervalClock/IntervalClockReducers';
import { CounterTimerStatus, CounterWorkoutStatus, CounterCurrentCount, CounterCurrentRound } from '../components/CountForMeConponents/CountToClock/CountToClockReducers';
import { MainPageTitle } from '../components/TitleComponent/TitleComponentReducers';
import { CountTo } from '../components/CountForMeConponents/CountToNumber/CountToNumberReducers';
import { CountSpeed, IsRandomSpeed, ChangeRandomRange } from '../components/CountForMeConponents/CountSpeed/CountSpeedReducers';
import { CounterRounds } from '../components/CountForMeConponents/CounterRoundsInput/CounterRoundsInputReducers';
import { ChangeCounterRestTime } from '../components/CountForMeConponents/CounterRestTimer/CounterRestTimerReducers';

export default combineReducers({
    ChangeIntervalTime,
    ChangeIntervalRestTime,
    IntervalTimerStatus,
    IntervalWorkoutStatus,
    IntervalRemainingSeconds,
    IntervalCurrentRound,
    CounterTimerStatus,
    CounterWorkoutStatus,
    CounterCurrentCount,
    CounterCurrentRound,
    IntervalRoundsCount,
    MainPageTitle,
    CountTo,
    CountSpeed,
    CounterRounds,
    ChangeCounterRestTime,
    IsRandomSpeed,
    ChangeRandomRange

});