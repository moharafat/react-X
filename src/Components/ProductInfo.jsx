import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availabilty: "In Stock",
  };
  return (
    <div>
      <h1>Name: {product.name}</h1>
      <h1>price: {product.price}</h1>
      <h1>availabilty: {product.availabilty}</h1>
    </div>
  );
};

export default ProductInfo;
