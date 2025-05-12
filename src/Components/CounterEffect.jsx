import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(44);
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementor</button>
    </div>
  );
};
export default CounterEffect;
