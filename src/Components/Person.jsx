import React from "react";

const Person = ({name, age}) => {
  return (
    <div>
      <h2>this person name is {name}</h2>
      <p>and age is {age}</p>
    </div>
  );
};

export default Person;
