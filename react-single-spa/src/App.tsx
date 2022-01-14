import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "./store/login";
import { add } from "./store/reducers";

function App() {
  const state: any = useSelector(state => state);
  const dispatch = useDispatch()

  console.log(state);
  useEffect(() => {
    dispatch(fetchToken({username: 'dog', password: 'dog'}));

  },[dispatch])

  return (
    <div className="App">
      Total: {state.reducer.total}
      
      <button onClick={() => dispatch(add())}>Add on Total</button>
    </div>
  );
}

export default App;
