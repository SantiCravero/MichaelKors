import React, { useEffect, useState } from "react";
import getProducts from "../../services/MockAPI";
import ItemList from "./ItemList/ItemList";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((respuesta) => setProducts(respuesta));
  }, []);

  return (
    <>
      <h2 className="my-3 text-3xl uppercase text-center">{props.greeting}</h2>
      <div className="flex justify-around my-5">
        <div className="flex justify-center flex-wrap w-11/12 text-center">
          <ItemList products={products} />
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
