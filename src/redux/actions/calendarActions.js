import { SET_SELECTED_DAY } from "../actionTypes";

const setSelectedDay = (day) => ({
  type: SET_SELECTED_DAY,
  payload: day,
});

export default {
  setSelectedDay,
};
