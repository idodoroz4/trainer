
export const CounterRoundsCount = (state = { CounterRounds: 1 } ,action) => {
    switch (action.type){
        case "COUNTER_PLUS_ROUND":
            return { CounterRounds: state.CounterRounds + 1}
        case "COUNTER_MINUS_ROUND":
            return { CounterRounds: state.CounterRounds - 1}
        default:
            return state
    }
}