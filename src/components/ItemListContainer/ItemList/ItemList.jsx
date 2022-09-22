import React from "react";
import Card from "../Item/Item";

function ItemList({products}) {
  return products.map((singleProduct) => {
    return <Card key={singleProduct.id} item={singleProduct} />;
  });
}

export default ItemList;
