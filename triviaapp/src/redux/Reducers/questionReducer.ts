import {
  ActionTypes,
  REQUEST_FAIL,
  REQUEST_QUESTION,
  REQUEST_SUCCESS,
} from "../actions/actionTypes";

interface QuestionState {
  loading: boolean;
  questions: [];
  error: boolean;
}

const defaultState: QuestionState = {
  loading: false,
  questions: [],
  error: true,
};

export const questionReducer = (
  state = defaultState,
  action: ActionTypes | any /* kontrol et */
): QuestionState => {

  switch (action.type) {
    case REQUEST_QUESTION:
      return { loading: true, questions: [], error: false };
    case REQUEST_SUCCESS:
     
      return { loading: false, questions: action.questions, error: false };
    case REQUEST_FAIL:
      return { loading: false, questions: [], error: true };

    default:
      return state;
  }
};
