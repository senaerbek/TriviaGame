import { IACTION, INCREMENT, RESETINCREMENT } from "../actions/actionTypes";

export const defaultState = {
  count: 0,
};

export function incrementReducer(state = defaultState, action: IACTION) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload.amount,
      };
    case RESETINCREMENT:
      return {
        count: 0,
      };

    default:
      return state;
  }
}
