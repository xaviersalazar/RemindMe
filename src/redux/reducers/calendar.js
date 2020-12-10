import { SET_SELECTED_DAY } from "../actionTypes";

const calendar = (state = { selectedDay: "" }, action) => {
  switch (action.type) {
    case SET_SELECTED_DAY:
      return {
        ...state,
        selectedDay: action.payload,
      };

    default:
      return state;
  }
};

export default calendar;
