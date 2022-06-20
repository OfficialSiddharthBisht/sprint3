import React from "react";

const ProductItem = () => {
  let url = "http://localhost:8080/products";
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
  return <div>
    
  </div>;
};

export default ProductItem;
