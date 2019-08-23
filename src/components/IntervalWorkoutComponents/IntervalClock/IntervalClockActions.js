export const TimerStopped = () => {
    return {
        type: 'STOPPED'
    };
};

export const TimerActive = () => {
    return {
        type: 'ACTIVE'
    }
}

export const WorkoutNone = () => {
    return {
        type: 'NONE'
    };
};

export const WorkoutInterval = () => {
    return {
        type: 'INTERVAL'
    };
};

export const WorkoutRest = () => {
    return {
        type: 'REST'
    }
}

export const CurrentTime = (remainingSeconds) => {
    return {
        type: 'REMAINING_SECONDS',
        payload: remainingSeconds
    }
}

export const NextRound = () => {
    return {
        type: 'NEXT_ROUND'
    }
}

export const ClearRounds = () => {
    return {
        type: 'CLEAR_ROUNDS'
    }
}