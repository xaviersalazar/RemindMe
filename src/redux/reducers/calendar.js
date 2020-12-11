import { SET_SELECTED_DAY, SET_SELECTED_MONTHS } from "../actionTypes";

const initialState = {
  selectedDay: "",
  selectedMonths: {
    prev: "",
    curr: "",
    next: "",
  },
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DAY:
      return {
        ...state,
        selectedDay: action.payload,
      };

    case SET_SELECTED_MONTHS:
      return {
        ...state,
        selectedMonths: action.payload,
      };

    default:
      return state;
  }
};

export default calendar;
