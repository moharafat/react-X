import { useContext, useState } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  const username = useContext(Data);
  const Age = useContext(Data1);
  return <h1>My name is{username} my age is {Age}</h1>;
};
export default ComponentC;
