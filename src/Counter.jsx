import { useState } from "react";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState (0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <div>Current count is {count}</div>
    </div>
  );
};

export default Counter;
