import { ActionTypes, CATEGORIES } from "../actions/actionTypes";

interface CategoryState {
  categories: [];
}

const defaultState: CategoryState = {
  categories: [],
};

export const categoryReducer = (
  state = defaultState,
  action: ActionTypes | any /* kontrol et */
): CategoryState => {
  switch (action.type) {
    case CATEGORIES:
      return { categories: action.categories };

    default:
      return state;
  }
};
