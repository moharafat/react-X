import { createContext } from "react";
import ComponentA from "./Components/ComponentA";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "7amo";
  const age = 33;

  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default App;
