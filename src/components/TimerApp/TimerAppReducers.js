export const TimerStatus = (state = {timerStatus: "CLEAR"}, action) => {
    // return timerStatus as followes :
    // CLEAR : no workout taking place - start button wasn't pressed, or workout ended
    // STOPPED : stopped button was pushed
    // ACTIVE : workout is active - timer is on countdown
    if (action.type !== "CLEAR" && action.type !== "STOPPED" && action.type !== "ACTIVE"){
        return state
    }

    return {timerStatus: action.type }
}

export const WorkoutStatus = (state = {workoutStatus: "NONE"}, action) => {
    // return workoutStatus as followes :
    // NONE : no workout taking place - start button wasn't pressed, or workout ended
    // INTERVAL : stopped button was pushed
    // REST : workout is active - timer is on countdown
    if (action.type !== "NONE" && action.type !== "INTERVAL" && action.type !== "REST"){
        return state
    }

    return { workoutStatus: action.type }
}

export const RemainingSeconds = ( state = { remainingSeconds: 0 }, action) => {
    if (action.type === 'REMAINING_SECONDS'){
        return { remainingSeconds: action.payload }
    }

    return state
}

export const CurrentRound = (state = { currentRound: 1}, action) => {
    switch (action.type){
        case "CLEAR_ROUNDS":
            return { currentRound: 1 }
        case "NEXT_ROUND":
            return { currentRound: state.currentRound + 1}
        default:
            return state
    }
}