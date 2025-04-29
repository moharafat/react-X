import { useState } from "react";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState (0);


  return (
    <div>
      <div>Current count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
