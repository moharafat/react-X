import { FaCartArrowDown } from "react-icons/fa";
import { PiTextbox } from "react-icons/pi";
import React from "react";
import "./index.css";
import StyledCard from "./Components/StyledCard";
import ProfileCard from "./Components/ProfileCard";

const App = () => {
  return (
    <section>
      <StyledCard />
      <ProfileCard />
    </section>
  );
};

export default App;
