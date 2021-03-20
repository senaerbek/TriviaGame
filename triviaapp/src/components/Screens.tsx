import { useEffect } from "react";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { boundQuestions } from "../redux/actions/questionsActions";
import { AppState } from "../redux/rootStore";
import { useState } from "react";
import Done from "./Done";

export default function Screens() {
  const [state, setstate] = useState([]);
  const [jokerCount, setjokerCount] = useState(1);
  const [button, setbutton] = useState(false)
  const dispatch = useDispatch();
  const qReducer = useSelector((state: AppState | any) => state.questionReducer);
  const iReducer = useSelector((state: AppState | any) => state.incrementReducer);
  const choiseReducer = useSelector((state: AppState | any) => state.difficultyandcategoryReducer);

  useEffect(() => {
    dispatch(boundQuestions(choiseReducer.category, choiseReducer.difficulty));
  }, [choiseReducer]);

  function joker() {
    qReducer.questions.results[iReducer.count].incorrect_answers.pop();
    qReducer.questions.results[iReducer.count].incorrect_answers.pop();
    setstate(qReducer.questions.results[iReducer.count].incorrect_answers);
    setjokerCount(0);
    setbutton(true)
  }

  return (
    <div>
      {iReducer.count !== 10 ? (
        <div>
          {qReducer.questions.length !== 0 ? (
            <div>

              <Questions
                questionIndex={iReducer.count}
                questions={qReducer.questions.results[iReducer.count]}
                answers={[
                  qReducer.questions.results[iReducer.count].correct_answer,
                  ...qReducer.questions.results[iReducer.count]
                    .incorrect_answers,
                ].sort(() => Math.random() - 0.5)}
                joker={joker}
                jokerCount={jokerCount}
                button = {button}
              />
              
            </div>
          ) : (
            <div>
              <div style={{marginTop:"250px"}} className="spinner-grow text-dark" role="status">
                  <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div> <Done/> </div>
      )}
    </div>
  );
}
