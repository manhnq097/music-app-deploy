import * as types from '../constants/actionTypes';

export const changeLanguage = (language) => {
    return {
        type: types.CHANGE_LANGUAGE,
        language: language
    }
}

export const toggleDarkMode = (toggleDarkMode) => {
    return {
        type: types.TOGGLE_DARKMODE,
        darkMode: toggleDarkMode
    }
}

export const toggleSidebarAction = (toggleSidebar) => {
    return {
        type: types.TOGGLE_SIDEBAR,
        toggleSidebar: toggleSidebar
    }
}