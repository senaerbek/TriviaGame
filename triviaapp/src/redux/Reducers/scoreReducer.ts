import { ISCORE, RESETSCORE, SCORE } from "../actions/actionTypes";

export const defaultStateChange = {
  score: 0,
};

export function scoreReducer(state = defaultStateChange, action: ISCORE) {
  switch (action.type) {
    case SCORE:
      return {
        score: action.payload.score + state.score,
      };
    case RESETSCORE:
      return {
        score: 0,
      };

    default:
      return state;
  }
}
