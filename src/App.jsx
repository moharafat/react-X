import { FaCartArrowDown } from "react-icons/fa";
import { PiTextbox } from "react-icons/pi";
import React from "react";
// import "./index.css";
import StyledCard from "./Components/StyledCard";
import ProfileCard from "./Components/ProfileCard";
import IconComponent from "./Components/IconComponent";
function App() {
  return (
    <div>
      <StyledCard />
      <ProfileCard />
      <IconComponent />
    </div>
  );
}

export default App;
