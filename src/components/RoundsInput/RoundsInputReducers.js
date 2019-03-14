
export const RoundsCount = (state = { rounds: 1 } ,action) => {
    switch (action.type){
        case "PLUS_ROUND":
            return { rounds: state.rounds + 1}
        case "MINUS_ROUND":
            return { rounds: state.rounds - 1}
        default:
            return state
    }
}