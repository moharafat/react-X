import React from "react";
const Weather = ({ temperature }) => {
  const Below15 = () => <h4>It's cold outside!</h4>;
  const Between = () => <h4>It's nice outside!</h4>;
  const Above25 = () => <h4>It's hot outside!</h4>;
  if (temperature < 15) {
    return <Below15 />;
  } else if (temperature > 25) {
    return <Above25 />;
  } else {
    return <Between />;
  }
};

export default Weather;
