import Screens from "./Screens";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/rootStore";
import Choise from "./Choise";
import "../App.css";
import IncorrectAnswer from "./IncorrectAnswer";
import TimeOver from "./TimeOver";

function App() {
  const sReducer = useSelector((state: AppState | any) => state.changeScreenReducer);

  return (
    <div className="App">
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
            <IncorrectAnswer />
           
          </div>
        </div>
      ) : sReducer.screen === "timeOver" && (
        <div>
          <TimeOver/>
        </div>
      )}
    </div>
  );
}

export default App;
