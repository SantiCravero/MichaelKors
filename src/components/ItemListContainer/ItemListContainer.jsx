import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../services/firestore";
import Banner from "./Banner/Banner";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom"
import BannerCategory from "./BannerCategory/BannerCategory";
import { Ping } from '@uiball/loaders'
import "./ItemListContainer.css"

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const { cat } = useParams()

  useEffect(() => {
    setProducts([])
    setIsLoading(true)
    
    if(cat === undefined){
      window.scrollTo({top: 0, left: 0, behavior: "instant"})
      getProducts()
      .then((respuesta) => setProducts(respuesta))
      .finally(() => setIsLoading(false))
      setBanner(true)
    }
    else{
      window.scrollTo({top: 0, left: 0, behavior: "instant"})
      getProductsByCategory(cat)
      .then((respuesta) => setProducts(respuesta))
      .finally(() => setIsLoading(false))
      setBanner(cat)
    }
  }, [cat]);

  return (
    <>
    {banner === true ? <Banner /> : <BannerCategory cat={cat} />}
      {isLoading ? (
        <div className="loading flex items-center justify-center">
          <Ping size={150} lineWeight={3.5} speed={1.5} color="#CA8A04" />
        </div>
      ) : (
        <div>
          <h2 className="my-3 text-3xl uppercase text-center">
            {props.greeting}
          </h2>
          <div className="flex justify-around my-5">
            <div className="flex justify-center flex-wrap w-11/12 text-center">
              <ItemList products={products} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemListContainer;