import { ChangeEvent, useEffect, useState } from "react";
import { Question } from "../redux/Question";
import { useDispatch, useSelector } from "react-redux";
import {changeScreen, increment,scoreAction} from "../redux/actions/questionsActions";
import { AppState } from "../redux/rootStore";
import Counter from "./Counter";

interface Props {
  questions: Question[] | any;
  questionIndex: number;
  answers: [] | any;
  joker: () => void;
  jokerCount: number;
  button : boolean
}

export default function Questions(props: Props) {
  const dispatch = useDispatch();
  const [check, setcheck] = useState(false);
  const scoreReducer = useSelector((state: AppState | any) => state.scoreReducer);

  function checkCorrectAnswer(e: ChangeEvent<HTMLSelectElement> | number | any): any {
    if (e.target.innerHTML === props.questions.correct_answer) {
      setcheck(true);
      dispatch(scoreAction(10));
      dispatch(increment(1));
    } else {
      dispatch(changeScreen("incorrectAnswer"));
    }
  }
  
  useEffect(() => {
    setcheck(false);
  }, [props.questionIndex]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div>
                <button
                  disabled= {props.button}
                  style={{
                    fontSize: "40px",
                    color: "#474744",
                    fontWeight: "bold",
                  }}
                  onClick={props.joker}
                >
                  50
                </button>
          </div>
        </div>
        <div className="col-md-4">
          <div
            style={{
              fontSize: "40px",
              color: "#474744",
              fontWeight: "bold",
            }}
          >
            {scoreReducer.score}
          </div>
        </div>
        <div className="col-md-4">
          <div
            style={{
              fontSize: "40px",
              color: "#474744",
              fontWeight: "bold",
            }}
          >
            {props.questionIndex + 1} /10
          </div>
        </div>
      </div>
      <div className="row">
        <Counter index={props.questionIndex} check={check} />
        <div className="container">
        <div>
          {
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: props.questions.question }}
              ></div>
            </div>
          }
          <div>
            {props.answers.map((m: any) => (
              <ul
                style={{
                  listStyleType: "none",
                  marginRight:"40px",
                  marginTop: "20px",
                }}
              >
                <li>
                  <button
                    style={{ width: "50%" }}
                    onClick={checkCorrectAnswer}
                    dangerouslySetInnerHTML={{ __html: m }}
                  ></button>
                </li>
              </ul>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
