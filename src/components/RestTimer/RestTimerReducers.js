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