import { Data, Data1 } from "../App";

const ComponentC = () => {
  return (
    <Data.Consumer>
      {(name) => {
        // return <h1>{name}</h1>;
        return (
            <Data1.Consumer>
                {(age) => {
                    return <h1>my name is {name}, age is {age}</h1>
                }}
            </Data1.Consumer>
        )
      }}
    </Data.Consumer>
  );
};
export default ComponentC;
