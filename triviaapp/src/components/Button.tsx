import { increment } from "../redux/actions/questionsActions";
import { useDispatch } from "react-redux";



export default function Button() {
  const dispatch = useDispatch();
  function click() {
    dispatch(increment(1));
  }

  return (
    <div>
      <button onClick={click}>Sıradaki Soru</button>
    </div>
  );
}
