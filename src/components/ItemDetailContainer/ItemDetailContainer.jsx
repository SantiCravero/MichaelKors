import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../../services/MockAPI'
import ItemDetail from './ItemDetail/ItemDetail'

function ItemDetailContainer() {
    let [products, setProducts] = useState({})

    useEffect(()=>{
        getSingleProduct()
            .then((respuesta) => setProducts(respuesta))
    }, [])

  return (
    <>
      <ItemDetail item={products}/>
    </>     
  )
}

export default ItemDetailContainer