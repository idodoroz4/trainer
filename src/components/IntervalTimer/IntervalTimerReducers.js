export const ChangeIntervalTime = (state = {intervalSeconds: 0}, action) => {
    switch (action.type) {
        case 'INTERVAL_MIN_PLUS':
            return {intervalSeconds: state.intervalSeconds + 60}
        case 'INTERVAL_MIN_MINUS':
            return {intervalSeconds: state.intervalSeconds - 60}
        case 'INTERVAL_SEC_PLUS':
            return {intervalSeconds: state.intervalSeconds + 1}
        case 'INTERVAL_SEC_MINUS':
            return {intervalSeconds: state.intervalSeconds - 1}
        case 'INTERVAL_SEC_CLEAR':
            return {intervalSeconds: Math.floor(state.intervalSeconds / 60)}
        case 'INTERVAL_MIN_CLEAR':
            return {intervalSeconds: state.intervalSeconds % 60}
        case 'INTERVAL_CLEAR':
            return {intervalSeconds: 0}
        default:
            return state;
    }
};