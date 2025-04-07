import React from "react";

const Greeting = (timeOfDay) => {
  return timeOfDay === "s" ? (
    <h1>Good morning!</h1>
  ) : (
    <h1>Good afternoon!</h1>
  );
};

export default Greeting;
