import { Dispatch } from "react";
import { AppActions } from "../actions";
import { Category } from "../Category";
import { CATEGORIES } from "./actionTypes";

const requestCategories = (categories : Category[]): AppActions=> ({
  type: CATEGORIES,
  categories: categories,
});

export const gCategories = () => {
    return (dispatch: Dispatch<AppActions> | any) => {
      return fetch("https://opentdb.com/api_category.php")
        .then((response) => response.json())
        .then((json) => dispatch(requestCategories(json)))
        
    };
  };
  