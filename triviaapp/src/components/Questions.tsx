import { ChangeEvent, useEffect, useState } from "react";
import { Question } from "../redux/Question";
import { useDispatch } from "react-redux";
import { changeScreen } from "../redux/actions/questionsActions";
import Button from "./Button";

interface Props {
  questions: Question[] | any;
  questionIndex: number;
}

function shuffle(array: number[]): number | any {
  return array.sort(() => Math.random() - 0.5);
}

export default function Questions(props: Props) {
  const dispatch = useDispatch();
const [check, setcheck] = useState(false)
  var array = [props.questions.correct_answer, ...props.questions.incorrect_answers]

  function checkCorrectAnswer(e: ChangeEvent<HTMLSelectElement> | number | any): any {
    console.log(e.target.innerHTML)
    console.log(props.questions.correct_answer)
    if(e.target.innerHTML === props.questions.correct_answer){
      setcheck(true);
    }
    else{
      dispatch(changeScreen("incorrectAnswer"))
    }
  }
  
  useEffect(() => {
   setcheck(false)
  }, [props.questionIndex])

  return (
    <div>
      {
        <div>
          {props.questionIndex + 1} - {props.questions.question}
        </div>
      }
      <div>
        {(array).map((m: any) => (
          <ul>
            <li>
              <button
                onClick={checkCorrectAnswer}
              >
                {m}
              </button>
            </li>
          </ul>
         
        ))} 
      
        {check === true && <div><Button/></div>}
          
      </div>
    </div>
  );
}
