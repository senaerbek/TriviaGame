import { Dispatch } from "react";
import {
  DIFFICULTYANDCATEGORY,
  IACTION,
  ICHANGE,
  INCREMENT,
  ISCORE,
  ISCREEN,
  REQUEST_FAIL,
  REQUEST_QUESTION,
  REQUEST_SUCCESS,
  RESETINCREMENT,
  RESETSCORE,
  SCORE,
  SCREEN,
} from "../actions/actionTypes";
import { Question } from "../Question";
import { AppActions } from "../actions";

const requestQuestions = (): AppActions => ({
  type: REQUEST_QUESTION,
  loading: true,
  questions: [],
  error: false,
});

const requestQuestionsSuccess = (questions: Question[]): AppActions => ({
  type: REQUEST_SUCCESS,
  loading: false,
  questions: questions,
  error: false,
});

const requestQuestionsFail = (): AppActions => ({
  type: REQUEST_FAIL,
  loading: false,
  questions: [],
  error: true,
});

export const boundQuestions = (category: number, questionType: string) => {
  return (dispatch: Dispatch<AppActions> | any) => {
    dispatch(requestQuestions());
    return fetch(
      "https://opentdb.com/api.php?amount=10&category=" +
        category +
        "&difficulty=" +
        questionType +
        "&type=multiple"
    )
      .then((response) => response.json())
      .then((json) => dispatch(requestQuestionsSuccess(json)))

      .catch((error) => dispatch(requestQuestionsFail()));
  };
};

export function increment(amount: number): IACTION {
  return {
    type: INCREMENT,
    payload: {
      amount,
    },
  };
}

export function resetincrement(amount: number): IACTION {
  return {
    type: RESETINCREMENT,
    payload: {
      amount,
    },
  };
}

export function changeScreen(screen: string): ISCREEN {
  return {
    type: SCREEN,
    payload: {
      screen,
    },
  };
}

export function difficultyandCategory(
  difficulty: string,
  category: number
): ICHANGE {
  return {
    type: DIFFICULTYANDCATEGORY,
    payload: {
      difficulty,
      category,
    },
  };
}

export function scoreAction(score: number): ISCORE {
  return {
    type: SCORE,
    payload: {
      score,
    },
  };
}
export function scoreResetAction(score: number): ISCORE {
  return {
    type: RESETSCORE,
    payload: {
      score,
    },
  };
}
