import React from "react";
import Item from "../Item/Item";

function ItemList({products}) {
  return products.map((singleProduct) => {
    return <Item key={singleProduct.id} item={singleProduct} />;
  });
}

export default ItemList;
