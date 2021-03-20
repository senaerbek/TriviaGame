import { CHECKANSWER, ICHECK } from "../actions/actionTypes";

export const defaultState = {
 check : false
};

export function checkReducer(state = defaultState, action: ICHECK) {
  switch (action.type) {
    case CHECKANSWER:
      return {
       check : action.payload.check
      };

    default:
      return state;
  }
}