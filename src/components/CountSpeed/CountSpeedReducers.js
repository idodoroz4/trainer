export const CountSpeed = (state = { countSpeed: 1 } ,action) => {
    switch (action.type){
        case "CHANGE_SPEED":
            return { countSpeed: action.payload}
        default:
            return state
    }
}