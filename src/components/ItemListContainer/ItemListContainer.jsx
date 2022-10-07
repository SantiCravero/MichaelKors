import React, { useEffect, useState } from "react";
import getProducts, { getProductsByCategory } from "../../services/MockAPI";
import Banner from "./Banner/Banner";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom"
import BannerCategory from "./BannerCategory/BannerCategory";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState(true)

  const { cat } = useParams()

  useEffect(() => {
    if(cat === undefined){
      getProducts().then((respuesta) => setProducts(respuesta));
      setBanner(true)
    }
    else{
      getProductsByCategory(cat).then((respuesta) => setProducts(respuesta));
      setBanner(false)
    }
  }, [cat]);

  return (
    <>
      {
        banner === true ? <Banner /> : <BannerCategory item={products}/>
      }
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
