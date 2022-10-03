import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../../services/MockAPI'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    let [products, setProducts] = useState({})

    const { id } = useParams()

    useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: "instant"});
        getSingleProduct(id)
            .then((respuesta) => setProducts(respuesta))
    }, [id])

    return (
    <>
      <ItemDetail item={products}/>
    </>     
  )
}

export default ItemDetailContainer