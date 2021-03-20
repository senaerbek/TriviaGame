import Screens from "./Screens";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/rootStore";
import Choise from "./Choise";
import "../App.css";
import { changeScreen } from "../redux/actions/questionsActions";


function App() {
  const dispatch = useDispatch();

  const sReducer = useSelector(
    (state: AppState | any) => state.changeScreenReducer
  );

  return (
    <div>
      {sReducer.screen === "choiseScreen" ? (
        <div>
          <Choise />
        </div>
      ) : sReducer.screen === "questions" ? (
        <div>
          <Screens />
        </div>
      ) : sReducer.screen === "incorrectAnswer" ? (
        <div>
          <div>
            <button onClick={() => dispatch(changeScreen("choiseScreen"))}>
              ana sayfaya git
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
