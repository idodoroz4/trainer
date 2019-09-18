
export const CounterRounds = (state = { counterRounds: 1 } ,action) => {
    switch (action.type){
        case "COUNTER_PLUS_ROUND":
            return { counterRounds: state.counterRounds + 1}
        case "COUNTER_MINUS_ROUND":
            return { counterRounds: state.counterRounds - 1}
        default:
            return state
    }
}