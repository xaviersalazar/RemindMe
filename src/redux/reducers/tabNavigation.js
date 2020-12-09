import { SET_SELECTED_TAB } from "../actionTypes";

const tabNavigation = (state = { selectedTab: 0 }, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };

    default:
      return state;
  }
};

export default tabNavigation;
