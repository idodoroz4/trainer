export const CountSpeed = (state = { countSpeed: 1000 } ,action) => {
    switch (action.type){
        case "CHANGE_SPEED":
            return { countSpeed: action.payload}
        default:
            return state
    }
}