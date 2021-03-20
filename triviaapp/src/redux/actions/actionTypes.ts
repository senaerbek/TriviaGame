import { Category } from "../Category";
import {Question} from "../Question";

export const REQUEST_QUESTION = "REQUEST_QUESTION"
export const REQUEST_SUCCESS = "REQUEST_SUCCESS"
export const REQUEST_FAIL = "REQUEST_FAIL"

interface QuestionState {
    loading : boolean;
    questions : Question[];
    error : boolean;
}

interface FetchRequest extends QuestionState { 
    type : typeof REQUEST_QUESTION; 
}

interface FetchSuccess extends QuestionState { 
    type : typeof REQUEST_SUCCESS; 
}

interface FetchFail extends QuestionState { 
    type : typeof REQUEST_FAIL; 
}



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
export const INCREMENT = "INCREMENT"
export const RESETINCREMENT = "RESETINCREMENT"

export interface IACTION {
    type : typeof INCREMENT | typeof RESETINCREMENT,
    payload : IPayload
}

export interface IPayload {
    amount: number;
  }

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const SCREEN ="SCREEN"

export interface ISCREEN{
    type :typeof SCREEN,
    payload : IScreenPayload
}
export interface IScreenPayload{
    screen: string
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const DIFFICULTYANDCATEGORY = "DIFFICULTYANDCATEGORY"

export interface ICHANGE {
    type : typeof DIFFICULTYANDCATEGORY,
    payload : IChangePayload
}

export interface IChangePayload{
    difficulty : string, 
    category : number
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
export const SCORE = "SCORE"
export const RESETSCORE = "RESETSCORE"

export interface ISCORE{
    type: typeof SCORE | typeof RESETSCORE
    payload : IScorePayload
}

export interface IScorePayload{
    score : number
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


export const CATEGORIES = "CATEGORIES"

interface CategoryState {
   categories : Category[];
}

interface GetCategory extends CategoryState { 
    type : typeof CATEGORIES; 
}


export type ActionTypes  =   FetchRequest | FetchSuccess | FetchFail | IACTION | ISCREEN | ICHANGE  | ISCORE | GetCategory