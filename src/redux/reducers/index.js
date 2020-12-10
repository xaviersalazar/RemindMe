import { combineReducers } from "redux";
import tabNavigation from "./tabNavigation";
import calendar from "./calendar";

const rootReducer = combineReducers({
  tabNavigation,
  calendar,
});

export default rootReducer;
