export const CountSpeed = (state = { countSpeed: 1000 } ,action) => {
    switch (action.type){
        case "CHANGE_SPEED":
            return { countSpeed: action.payload}
        default:
            return state
    }
}

export const IsRandomSpeed = ( state = { useRandomSpeed: false }, action ) => {
    switch (action.type) {
        case 'USE_RANDOM_SPEED':
            return { useRandomSpeed: !state.useRandomSpeed }
        default:
            return state
    }
}

export const ChangeRandomRange = (state = { countRandomRange: [1,10] }, action) => {
    switch (action.type) {
        case 'CHANGE_RANDOM_RANGE':
            return { countRandomRange: action.payload }
        default:
            return state
    }
}