import React from "react";

const Greeting = (props) => {
  return props.timeOfDay === "morning" ? (
    <h1>Good morning!</h1>
  ) : (
    <h1>Good afternoon!</h1>
  );
};

export default Greeting;
