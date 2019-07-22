
export const IntervalRoundsCount = (state = { intervalRounds: 1 } ,action) => {
    switch (action.type){
        case "INTERVAL_PLUS_ROUND":
            return { intervalRounds: state.intervalRounds + 1}
        case "INTERVAL_MINUS_ROUND":
            return { intervalRounds: state.intervalRounds - 1}
        default:
            return state
    }
}