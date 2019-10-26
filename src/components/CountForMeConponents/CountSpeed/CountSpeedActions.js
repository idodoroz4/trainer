export const ChangeSpeed = (speed) => {
    return {
        type: 'CHANGE_SPEED',
        payload: speed
    }
}

export const UseRandomSpeed = () => {
    return {
        type: 'USE_RANDOM_SPEED'
    }
}

export const ChangeRandomRange = (randomRange) =>{
    return {
        type: "CHANGE_RANDOM_RANGE",
        payload: randomRange
    }
}
