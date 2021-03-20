import { ChangeEvent } from "react";
import { AppState } from "../redux/rootStore";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { difficultyandCategory } from "../redux/actions/questionsActions";
import { changeScreen } from "../redux/actions/questionsActions";
import { gCategories } from "../redux/actions/categoryActions";
import "../App.css";
import logo from "../logo.svg";

export default function Choise() {
  const dispatch = useDispatch();
  const categoryReducer = useSelector((state: AppState | any) => state.categoryReducer);
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

  function handleClick() {
    dispatch(changeScreen("questions"));
  }

  useEffect(() => {
    dispatch(gCategories());
  }, []);

  return (
    <div className="container">
      <h1 style={{ marginTop: "10%", color:"#111d5e", fontSize:"100px" }}>
       <img src={logo} style={{height:"200px"}} />
      </h1>
      {!categoryReducer.categories.trivia_categories ? (
        <div style={{ marginTop: "5%" }}>
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div style={{ marginTop: "7%" }}>
            <div>
              <select className="start" onChange={changeDifficulty}>
              <option> Any Difficulty </option>
                <option> easy </option>
                <option> medium </option>
                <option> hard </option>
              </select>
              <div>
                <select className="start" onChange={changeCategory}>
                <option>Any Category</option>
                  {categoryReducer.categories.trivia_categories.map(
                    (c: any) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    )
                  )}
                </select>
              </div>
              <button className="start" onClick={handleClick}>
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
