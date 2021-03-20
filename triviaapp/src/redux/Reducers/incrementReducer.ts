import { IACTION, INCREMENT } from "../actions/actionTypes";

export const defaultState = {
    count: 0,
  };
  
  export function incrementReducer(state = defaultState, action: IACTION) {
    switch (action.type) {
      case INCREMENT:
        return {
          count: state.count + action.payload.amount,
        };

      default:
        return state;
    }
  }