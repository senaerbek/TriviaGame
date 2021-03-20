import  { ChangeEvent } from "react";
import { AppState } from "../redux/rootStore";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { difficultyandCategory } from "../redux/actions/questionsActions";
import { changeScreen } from "../redux/actions/questionsActions";

export default function Choise() {
  const dispatch = useDispatch();
  const choiseReducer = useSelector((state: AppState | any) => state.difficultyandcategoryReducer);

  
  const [difficulty, setdifficulty] = useState("0");
  const [category, setcategory] = useState(0);

  function changeDifficulty(e: ChangeEvent<HTMLSelectElement>): any {
    setdifficulty(e.target.value);
  }
  function changeCategory(e: ChangeEvent<HTMLSelectElement> | number | any): any {
    setcategory(e.target.value);
  }

  useEffect(() => {
    dispatch(difficultyandCategory(difficulty, Number(category)));
  }, [difficulty, category]);

function handleClick (){
  dispatch(changeScreen("questions"));
}


  console.log(choiseReducer);
  return (
    <div>
      <select onChange={changeDifficulty}>
        <option> easy </option>
        <option> medium </option>
        <option> hard </option>
      </select>

      <select onChange={changeCategory}>
        <option value={20}>20</option>
        <option value={21}>21</option>
        <option value={22}>22</option>
        <option value={23}>23</option>
      </select>
      <button onClick={handleClick}>başla</button>
    </div>
  );
}
