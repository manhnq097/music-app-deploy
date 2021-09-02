import language from "./language";
import toggleDarkMode from "./darkMode";
import toggleSidebar from "./sidebar";
import { combineReducers } from 'redux';

const myReducer = combineReducers({
  language,
  toggleDarkMode,
  toggleSidebar
})

export default myReducer;