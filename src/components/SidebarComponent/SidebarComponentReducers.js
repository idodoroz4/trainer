export const CurrentApp = (state = {currentApp: "Interval"}, action) => {
    if (action.type === "CHANGE_CURRENT_APP") {
        return { currentApp: action.payload }
    }
    return state

}