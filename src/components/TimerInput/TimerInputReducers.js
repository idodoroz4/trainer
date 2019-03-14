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

export const ChangeRestTime = (state = {restSeconds: 0}, action) => {

    switch (action.type) {
        case 'REST_MIN_PLUS':
            return {restSeconds: state.restSeconds + 60}
        case 'REST_MIN_MINUS':
            return {restSeconds: state.restSeconds - 60}
        case 'REST_SEC_PLUS':
            return {restSeconds: state.restSeconds + 1}
        case 'REST_SEC_MINUS':
            return {restSeconds: state.restSeconds - 1}
        case 'REST_SEC_CLEAR':
            return {restSeconds: Math.floor(state.restSeconds / 60)}
        case 'REST_MIN_CLEAR':
            return {restSeconds: state.restSeconds % 60}
        case 'REST_CLEAR':
            return {restSeconds: 0}
        default:
            return state;
    }
};