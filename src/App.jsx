// import { useReducer } from "react";

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };
//     case "decrement":
//       return { ...state, count: state.count - 1 };
//       break;
//     case "reset":
//       return { ...state, count: 0 };

//     default:
//       break;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>RESET</button>

//       <h1>count is {state.count}</h1>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Counter from "./Components/Counter";

function App() {
  return (
    <div>
      <h1>React</h1>
      <Counter />
    </div>
  );
}

export default App;
