import { SET_SELECTED_DAY, SET_SELECTED_MONTHS } from "../actionTypes";

const setSelectedDay = (day) => ({
  type: SET_SELECTED_DAY,
  payload: day,
});

const setSelectedMonths = (months) => ({
  type: SET_SELECTED_MONTHS,
  payload: months,
});

export default {
  setSelectedDay,
  setSelectedMonths,
};
