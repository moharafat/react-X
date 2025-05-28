import { useRef } from "react";
const App = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focusInput();
    inputElement.current.value="7amo"

  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus</button>
    </div>
  );
};

export default App;
