import React from "react";
import Item from "../Item/Item";

function ItemCat({ products }) {
  return products.map((singleProduct) => {
    return (
        <div key={singleProduct.id} className="mx-6 my-6">
            <Item  item={singleProduct} />
        </div>
    )
  });
}

export default ItemCat;
