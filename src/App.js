import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber,decNumber } from "./actions/index";

export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      
      <h2> React app with Redux state management</h2>
      <button type="button" title="Decrement" className="btn btn-primary mr-3" onClick={ () => dispatch(incNumber())}>+</button>
      <input name="quantity" type="text" className="clrs" value={myState} />
      <button type="button" title="Increment" className="btn btn-primary mr-3"   onClick={ () => dispatch(decNumber())}>-</button>
      
    
  
    </div>
  );
}

// npx create-react-app covid19tracker
// npm start
