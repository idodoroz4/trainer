export const ChangeIntervalRestTime = (state = {intervalRestSeconds: 0}, action) => {

    switch (action.type) {
        case 'INTERVAL_REST_MIN_PLUS':
            return {intervalRestSeconds: state.intervalRestSeconds + 60}
        case 'INTERVAL_REST_MIN_MINUS':
            return {intervalRestSeconds: state.intervalRestSeconds - 60}
        case 'INTERVAL_REST_SEC_PLUS':
            return {intervalRestSeconds: state.intervalRestSeconds + 1}
        case 'INTERVAL_REST_SEC_MINUS':
            return {intervalRestSeconds: state.intervalRestSeconds - 1}
        case 'INTERVAL_REST_SEC_CLEAR':
            return {intervalRestSeconds: Math.floor(state.intervalRestSeconds / 60)}
        case 'INTERVAL_REST_MIN_CLEAR':
            return {intervalRestSeconds: state.intervalRestSeconds % 60}
        case 'INTERVAL_REST_CLEAR':
            return {intervalRestSeconds: 0}
        default:
            return state;
    }
};