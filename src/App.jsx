import Person from "./Components/Person";
import Products from "./Components/Products";

const App = () => {
  return (
    <div>
      <Person name="7amo" age={23} />
      <Products name="iphone" price={33} />
    </div>
  );
};

export default App;
