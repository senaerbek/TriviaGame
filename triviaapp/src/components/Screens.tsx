import { useEffect } from "react";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { boundQuestions } from "../redux/actions/questionsActions";
import { AppState } from "../redux/rootStore";


export default function Screens() {
  const dispatch = useDispatch();
  const qReducer = useSelector((state: AppState | any) => state.questionReducer);
  const iReducer = useSelector((state: AppState | any) => state.incrementReducer);
  const choiseReducer = useSelector((state: AppState | any) => state.difficultyandcategoryReducer);

  useEffect(() => {
    dispatch(boundQuestions(choiseReducer.category, choiseReducer.difficulty));
  }, [choiseReducer]);

  console.log(iReducer);
  return (
    <div>
      {qReducer.questions.length !== 0 ? (
        <div className="App">
          {" "}
          <Questions
            questionIndex={iReducer.count}
            questions={qReducer.questions.results[iReducer.count]}
          />
        
        </div>
      ) : (
        <div>Yükleniyor</div>
      )}
    </div>
  );
}
