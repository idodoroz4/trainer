
export const IntervalMinPlus = () => {
    return {
        type: 'INTERVAL_MIN_PLUS'
    };
};

export const IntervalMinMinus = () => {
    return {
        type: 'INTERVAL_MIN_MINUS'
    };
};

export const IntervalSecPlus = () => {
    return {
        type: 'INTERVAL_SEC_PLUS'
    };
};

export const IntervalSecMinus = () => {
    return {
        type: 'INTERVAL_SEC_MINUS'
    };
};

export const IntervalSecClear = () => {
    return {
        type: 'INTERVAL_SEC_CLEAR'
    };
};

export const IntervalMinClear = () => {
    return {
        type: 'INTERVAL_MIN_MINUS'
    };
};

export const  IntervalClear = () => {
    return {
        type: 'INERVAL_CLEAR'
    };
};

export const RestMinPlus = () => {
    return {
        type: 'REST_MIN_PLUS'
    };
};

export const RestMinMinus = () => {
    return {
        type: 'REST_MIN_MINUS'
    };
};

export const RestSecPlus = () => {
    return {
        type: 'REST_SEC_PLUS'
    };
};

export const RestSecMinus = () => {
    return {
        type: 'REST_SEC_MINUS'
    };
};

export const RestSecClear = () => {
    return {
        type: 'REST_SEC_CLEAR'
    };
};

export const RestMinClear = () => {
    return {
        type: 'REST_MIN_CLEAR'
    };
};

export const RestClear = () => {
    return {
        type: 'REST_CLEAR'
    };
};

export const TimerClear = () => {
    return {
        type: 'CLEAR'
    };
};

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

export const ClearRounds = () => {
    return {
        type: 'CLEAR_ROUNDS'
    }
}

export const PlusRound = () => {
    return {
        type: 'PLUS_ROUND'
    }
}

export const MinusRound = () => {
    return {
        type: 'MINUS_ROUND'
    }
}