import { combineReducers } from 'redux';
import { RoundsCount } from '../components/RoundsInput/RoundsInputReducers';
import { ChangeRestTime } from '../components/RestTimer/RestTimerReducers';
import { ChangeIntervalTime } from '../components/IntervalTimer/IntervalTimerReducers';
import { TimerStatus, WorkoutStatus, RemainingSeconds, CurrentRound } from '../components/TimerApp/TimerAppReducers'
import { MainPageTitle } from '../components/TitleComponent/TitleComponentReducers';
import { CountTo } from '../components/CountToNumber/CountToNumberReducers';
import { CountSpeed } from '../components/CountSpeed/CountSpeedReducers';
import { CurrentApp } from '../components/SidebarComponent/SidebarComponentReducers';

export default combineReducers({
    ChangeIntervalTime,
    ChangeRestTime,
    TimerStatus,
    WorkoutStatus,
    RemainingSeconds,
    CurrentRound,
    RoundsCount,
    MainPageTitle,
    CountTo,
    CountSpeed,
    CurrentApp
});