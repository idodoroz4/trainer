export const ChangeMainPageTitle = (newTitle) => {
    console.log("!!!")
    return {
        type: 'CHANGE_MAIN_PAGE_TITLE',
        payload: newTitle
    };
};