export const ChangeCounterRestTime = (state = {CounterRestSeconds: 0}, action) => {

    switch (action.type) {
        case 'COUNTER_REST_MIN_PLUS':
            return {CounterRestSeconds: state.CounterRestSeconds + 60}
        case 'COUNTER_REST_MIN_MINUS':
            return {CounterRestSeconds: state.CounterRestSeconds - 60}
        case 'COUNTER_REST_SEC_PLUS':
            return {CounterRestSeconds: state.CounterRestSeconds + 1}
        case 'COUNTER_REST_SEC_MINUS':
            return {CounterRestSeconds: state.CounterRestSeconds - 1}
        case 'COUNTER_REST_SEC_CLEAR':
            return {CounterRestSeconds: Math.floor(state.CounterRestSeconds / 60)}
        case 'COUNTER_REST_MIN_CLEAR':
            return {CounterRestSeconds: state.CounterRestSeconds % 60}
        case 'COUNTER_REST_CLEAR':
            return {CounterRestSeconds: 0}
        default:
            return state;
    }
};