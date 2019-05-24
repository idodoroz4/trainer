export const MainPageTitle = (state = { mainPageTitle: "Interval Workout" } ,action) => {
    if (action.type === "CHANGE_MAIN_PAGE_TITLE") {
        return { mainPageTitle: action.payload }
    }

    return state
}