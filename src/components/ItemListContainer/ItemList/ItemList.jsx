import React from "react";
import Item from "../Item/Item";

function ItemList({products}) {

  const productNew = [...products]
  productNew.sort(() => Math.random() > 0.5 ? 1 : -1)
  productNew.splice(0, 4)

  return productNew.map((singleProduct) => {
    return <Item key={singleProduct.id} item={singleProduct} />;
  });
}

export default ItemList;
