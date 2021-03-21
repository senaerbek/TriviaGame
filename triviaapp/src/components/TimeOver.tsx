import React from "react";
import { AppState } from "../redux/rootStore";
import { useDispatch, useSelector } from "react-redux";
import { changeScreen, resetincrement, scoreResetAction } from "../redux/actions/questionsActions";

export default function TimeOver() {
    const dispatch = useDispatch();
    const scoreReducer = useSelector((state: AppState | any) => state.scoreReducer);
    
    const difficultyReducer = useSelector(
      (state: AppState | any) => state.difficultyandcategoryReducer
    );
    function onclick() {
      dispatch(changeScreen("choiseScreen"));
      dispatch(resetincrement(0));
      dispatch(scoreResetAction(0));
    }
  return (
    <div>
    <div className="container">
      <div className="col-md-12">
        <h1 className="display-2">Time's up</h1>
      </div>
      <div className="col-md-12"> 
      <h1 className="display-3">
          Score - {scoreReducer.score}
      </h1>
    
      </div>
      <div className="col-md-12">
      <h1 className="display-4">

               {difficultyReducer.difficulty !== 0 ? (
            <div> Any Difficulty</div>
          ) : (
            <div> {difficultyReducer.difficulty}</div>
          )}

        </h1>
   
      </div>
      <div className="col-md-12">
        <button className="btn btn-danger btn-block" style={{marginTop:"50px", marginBottom:"50px"}} onClick={onclick}>
          Menu
        </button>
      </div>
    </div>
  </div>
  );
}
