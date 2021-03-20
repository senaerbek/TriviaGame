import { DIFFICULTYANDCATEGORY, ICHANGE } from "../actions/actionTypes";

export const defaultState = {
  difficulty: "",
  category: 0
};

export function difficultyandcategoryReducer(state = defaultState, action: ICHANGE) {
  switch (action.type) {
    case DIFFICULTYANDCATEGORY:
      return {
        difficulty: action.payload.difficulty,
        category: action.payload.category,
      };

    default:
      return state;
  }
}
