export const TimerStatus = (timerStatus) => {
    // STOPPED or ACTIVE
    return {
        type: 'TIMER_STATUS',
        payload: timerStatus
    };
};

export const CountToWorkoutStatus = (workoutStatus) => {
    // NONE or WORKOUT or REST
    return {
        type: 'COUNT_TO_WORKOUT_STATUS',
        payload: workoutStatus
    };
}


export const CurrentCount = (count) => {
    return {
        type: 'CURRENT_COUNT',
        payload: count
    }
}

export const NextRound = () => {
    return {
        type: 'COUNTER_NEXT_ROUND'
    }
}

export const ClearRounds = () => {
    return {
        type: 'COUNTER_CLEAR_ROUNDS'
    }
}