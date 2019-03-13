import { combineReducers } from 'redux';

const ChangeIntervalTime = (state = {intervalSeconds: 0}, action) => {
    switch (action.type) {
        case 'INTERVAL_MIN_PLUS':
            return {intervalSeconds: state.intervalSeconds + 60}
        case 'INTERVAL_MIN_MINUS':
            return {intervalSeconds: state.intervalSeconds - 60}
        case 'INTERVAL_SEC_PLUS':
            return {intervalSeconds: state.intervalSeconds + 1}
        case 'INTERVAL_SEC_MINUS':
            return {intervalSeconds: state.intervalSeconds - 1}
        case 'INTERVAL_SEC_CLEAR':
            return {intervalSeconds: Math.floor(state.intervalSeconds / 60)}
        case 'INTERVAL_MIN_CLEAR':
            return {intervalSeconds: state.intervalSeconds % 60}
        case 'INTERVAL_CLEAR':
            return {intervalSeconds: 0}
        default:
            return state;
    }
};

const ChangeRestTime = (state = {restSeconds: 0}, action) => {

    switch (action.type) {
        case 'REST_MIN_PLUS':
            return {restSeconds: state.restSeconds + 60}
        case 'REST_MIN_MINUS':
            return {restSeconds: state.restSeconds - 60}
        case 'REST_SEC_PLUS':
            return {restSeconds: state.restSeconds + 1}
        case 'REST_SEC_MINUS':
            return {restSeconds: state.restSeconds - 1}
        case 'REST_SEC_CLEAR':
            return {restSeconds: Math.floor(state.restSeconds / 60)}
        case 'REST_MIN_CLEAR':
            return {restSeconds: state.restSeconds % 60}
        case 'REST_CLEAR':
            return {restSeconds: 0}
        default:
            return state;
    }
};

const TimerStatus = (state = {timerStatus: "CLEAR"}, action) => {
    // return timerStatus as followes :
    // CLEAR : no workout taking place - start button wasn't pressed, or workout ended
    // STOPPED : stopped button was pushed
    // ACTIVE : workout is active - timer is on countdown
    if (action.type !== "CLEAR" && action.type !== "STOPPED" && action.type !== "ACTIVE"){
        return state
    }

    return {timerStatus: action.type }
}

const WorkoutStatus = (state = {workoutStatus: "NONE"}, action) => {
    // return workoutStatus as followes :
    // NONE : no workout taking place - start button wasn't pressed, or workout ended
    // INTERVAL : stopped button was pushed
    // REST : workout is active - timer is on countdown
    if (action.type !== "NONE" && action.type !== "INTERVAL" && action.type !== "REST"){
        return state
    }

    return { workoutStatus: action.type }
}

const RemainingSeconds = ( state = { remainingSeconds: 0 }, action) => {
    if (action.type === 'REMAINING_SECONDS'){
        return { remainingSeconds: action.payload }
    }

    return state
}

const CurrentRound = (state = { currentRound: 1}, action) => {
    switch (action.type){
        case "CLEAR_ROUNDS":
            return { currentRound: 1 }
        case "NEXT_ROUND":
            return { currentRound: state.currentRound + 1}
        default:
            return state
    }
}

const RoundsCount = (state = { rounds: 1 } ,action) => {
    switch (action.type){
        case "PLUS_ROUND":
            return { rounds: state.rounds + 1}
        case "MINUS_ROUND":
            return { rounds: state.rounds - 1}
        default:
            return state
    }
}

export default combineReducers({
    ChangeIntervalTime,
    ChangeRestTime,
    TimerStatus,
    WorkoutStatus,
    RemainingSeconds,
    RoundsCount,
    CurrentRound
});