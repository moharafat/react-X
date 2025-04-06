import React from "react";

const Products = ({name , price}) => {
  return (
    <div>
      <h2>product's name is {name}</h2>
      <p>product's price is {price}</p>
    </div>
  );
};

export default Products;
