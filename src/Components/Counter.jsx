import { useState, useReducer } from "react";
import { counterReducer, initialState } from "../counterReducer";
import React from "react";
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: +inputValue });
    setInputValue(110);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: -inputValue });
    setInputValue(0);
  };
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>+ + +</button>
      <button onClick={handleDecrement}>- - -</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
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
