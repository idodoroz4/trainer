export const ChangeCounterRestTime = (state = {counterRestSeconds: 0}, action) => {

    switch (action.type) {
        case 'COUNTER_REST_MIN_PLUS':
            return {counterRestSeconds: state.counterRestSeconds + 60}
        case 'COUNTER_REST_MIN_MINUS':
            return {counterRestSeconds: state.counterRestSeconds - 60}
        case 'COUNTER_REST_SEC_PLUS':
            return {counterRestSeconds: state.counterRestSeconds + 1}
        case 'COUNTER_REST_SEC_MINUS':
            return {counterRestSeconds: state.counterRestSeconds - 1}
        case 'COUNTER_REST_SEC_CLEAR':
            return {counterRestSeconds: Math.floor(state.counterRestSeconds / 60)}
        case 'COUNTER_REST_MIN_CLEAR':
            return {counterRestSeconds: state.counterRestSeconds % 60}
        case 'COUNTER_REST_CLEAR':
            return {counterRestSeconds: 0}
        default:
            return state;
    }
};