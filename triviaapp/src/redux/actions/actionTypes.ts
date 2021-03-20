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

export interface IACTION {
    type : typeof INCREMENT,
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
export const CHECKANSWER = "CHECKANSWER"

export interface ICHECK {
    type : typeof CHECKANSWER,
    payload : IChechAnswer
}

export interface IChechAnswer{
    check : boolean
}


export type ActionTypes  =  FetchRequest | FetchSuccess | FetchFail | IACTION | ISCREEN | ICHANGE | ICHECK