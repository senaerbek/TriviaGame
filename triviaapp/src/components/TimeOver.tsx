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
        <div className="row">
          <div
            className="col-md-12"
            style={{ marginTop: "2%", fontSize: "100px" }}
          >
              <h1 style={{ fontSize: "100px" }}>Time's up</h1>
            Score - {scoreReducer.score}
          </div>
          <div className="col-md-12" style={{ fontSize: "80px" }}>
            {difficultyReducer.difficulty !== 0 ? (
              <div>Difficulty - Any Difficulty</div>
            ) : 
            (
                <div>Difficulty - {difficultyReducer.difficulty}</div>
            )}
          </div>
        </div>
      </div>
      <button className="btn btn-danger"  style={{width:"700px", height:"70px" , marginTop:"50px"}} onClick={onclick}>Menu</button>
    </div>
  );
}
