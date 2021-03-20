import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";


import {questionReducer} from "./Reducers/questionReducer";
import {AppActions} from "./actions";
import {incrementReducer} from "./Reducers/incrementReducer";
import {changeScreenReducer} from "./Reducers/screenReducer";
import {difficultyandcategoryReducer} from "./Reducers/difficultyReducer";
import {checkReducer} from "./Reducers/checkReduser";

export const rootReducer
 = combineReducers({questionReducer, incrementReducer, changeScreenReducer, difficultyandcategoryReducer, checkReducer})

 export type AppState = ReturnType<typeof rootReducer>;

 export const store = createStore<AppState, AppActions,{}, {}>(
     rootReducer,
     applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
 )