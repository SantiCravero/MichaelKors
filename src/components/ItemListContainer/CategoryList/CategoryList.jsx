import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../../services/firestore";
import ItemCat from "../ItemCat/ItemCat";

function CategoryList({ products }) {
  const { cat } = useParams();

  const [productos, setProducts] = useState([]);

  useEffect(() => {
    setProducts([])
    
    // if(cat === undefined){
    //   getProducts()
    //   .then((respuesta) => setProducts(respuesta))
    // }
    {
      getProductsByCategory(cat)
      .then((respuesta) => setProducts(respuesta))
    }
  }, [cat]);

  return (
    <>
      {cat === undefined ? (
        <ItemCat products={productos} />
      ) : (
        <ItemCat products={productos} />
      )}
    </>
  );
}

export default CategoryList;
