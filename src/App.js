
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement } from './action';


function App() {

  const dispatch = useDispatch();
  const myState = useSelector((state)=> state );
  console.log(myState);
  return (
    <div className="App">
      <h1>Increment/Decrement is {myState} </h1>
      <div>
        <button onClick={()=>dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={()=>dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
}

export default App;
