import Add from "./Components/Add";
import Greet from "./Components/Greet";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import WelcomeMessage from "./Components/WelcomeMessage";
import JSXRules from "./Components/JSXRules";

const App = () => {
  return (
    <section id="section">
      <form>
        <label htmlFor="acoount_number">account number</label>
        <input type="text" placeholder="CX Account #" />
        <JSXRules></JSXRules>
      </form>
    </section>
  );
};
export default App;
