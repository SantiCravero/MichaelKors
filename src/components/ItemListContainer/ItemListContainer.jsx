import React, { useEffect, useState } from "react";
import getProducts from "../../services/data";
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
        <div className="grid gap-4 grid-cols-3 justify-items-center w-4/5 text-center">
          <ItemList products={products} />
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
