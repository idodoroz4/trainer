export const CounterTimerStatus = (state = {timerStatus: "ACTIVE"}, action) => {
    // return timerStatus as followes :
    // STOPPED : stop button was pushed
    // ACTIVE : workout is active - timer is on countdown
    if (action.type === "TIMER_STATUS"){
        return {timerStatus: action.payload}
    }

    return state
}

export const CounterWorkoutStatus = (state = {countToWorkoutStatus: "NONE"}, action) => {
    // return workoutStatus as followes :
    // NONE : no workout taking place - start button wasn't pressed, or workout ended
    // WORKOUT : In Workout state
    // REST : In Rest state
    if (action.type === "COUNT_TO_WORKOUT_STATUS"){
        return { countToWorkoutStatus: action.payload }
    }

    return state
}

export const CounterCurrentCount = ( state = { currentCount: 0 }, action) => {
    if (action.type === 'CURRENT_COUNT'){
        return { currentCount: action.payload }
    }

    return state
}

export const CounterCurrentRound = (state = { currentRound: 1}, action) => {
    switch (action.type){
        case "COUNTER_CLEAR_ROUNDS":
            return { currentRound: 1 }
        case "COUNTER_NEXT_ROUND":
            return { currentRound: state.currentRound + 1}
        default:
            return state
    }
}