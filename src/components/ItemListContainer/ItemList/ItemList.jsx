import React from "react";
import Card from "../Card/Card";

function ItemList({products}) {
  return products.map((singleProduct) => {
    return <Card key={singleProduct.id} item={singleProduct} />;
  });
}

export default ItemList;
