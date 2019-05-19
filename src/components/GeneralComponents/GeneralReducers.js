export const MainPageTitle = (state = { mainPageTitle: "Interval Workout" } ,action) => {
    if (action.type === "ChangeMainPageTitle") {
        return { mainPageTitle: action.payload }
    }

    return state
}