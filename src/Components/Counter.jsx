import { useState, useReducer } from "react";
import { counterReducer, initialState } from "../counterReducer";
import React from "react";
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement"});
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>+ + +</button>
      <button onClick={handleDecrement}>- - -</button>
    </div>
  );
};
export default Counter;

// const Counter = () => {
//   const [count, setCount] = useState (0);

//   return (
//     <div>
//       <div>Current count is {count}</div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default Counter;
