import {  ISCREEN, SCREEN } from "../actions/actionTypes";

export const defaultStateChange = {
  screen: "choiseScreen",
};

export function changeScreenReducer(state = defaultStateChange, action: ISCREEN) {
  switch (action.type) {
    case SCREEN:
      return {
        screen: action.payload.screen,
      };

    default:
      return state;
  }
}
