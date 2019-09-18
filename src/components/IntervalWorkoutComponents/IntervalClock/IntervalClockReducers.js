export const IntervalTimerStatus = (state = {timerStatus: "ACTIVE"}, action) => {
    // return timerStatus as followes :
    // STOPPED : stop button was pushed
    // ACTIVE : workout is active - timer is on countdown
    if (action.type !== "STOPPED" && action.type !== "ACTIVE"){
        return state
    }

    return {timerStatus: action.type }
}

export const IntervalWorkoutStatus = (state = {workoutStatus: "NONE"}, action) => {
    // return workoutStatus as followes :
    // NONE : no workout taking place - start button wasn't pressed, or workout ended
    // INTERVAL : stopped button was pushed
    // REST : workout is active - timer is on countdown
    if (action.type !== "NONE" && action.type !== "INTERVAL" && action.type !== "REST"){
        return state
    }

    return { workoutStatus: action.type }
}

export const IntervalRemainingSeconds = ( state = { remainingSeconds: 0 }, action) => {
    if (action.type === 'REMAINING_SECONDS'){
        return { remainingSeconds: action.payload }
    }

    return state
}

export const IntervalCurrentRound = (state = { currentRound: 1}, action) => {
    switch (action.type){
        case "INTERVAL_CLEAR_ROUNDS":
            return { currentRound: 1 }
        case "INTERVAL_NEXT_ROUND":
            return { currentRound: state.currentRound + 1}
        default:
            return state
    }
}