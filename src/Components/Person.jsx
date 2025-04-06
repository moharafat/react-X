import React from "react";

const Person = (props) => {
  return (
    <div>
      <h2>this person name is {props.name}</h2>
      <p>and age is {props.age}</p>
    </div>
  );
};

export default Person;
