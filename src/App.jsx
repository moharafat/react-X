import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment =() => setCount(count + 1)
  const Decrement =() => setCount(count - 1)
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increment}>ADD</button>
      <button onClick={Decrement}>SUB</button>
    </section>
  );
};

export default App;
