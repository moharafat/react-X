import Greet from "./Components/Greeting";
import ProductInfo from "./Components/ProductInfo";

const App = () => {
  return (
    <div>
      {/* <label htmlFor="acoount_number">account number</label>
        <input type="text" placeholder="CX Account #" /> */}
      <Greet />
      <ProductInfo />
    </div>
  );
};
export default App;
