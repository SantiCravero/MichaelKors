import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../../services/MockAPI'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error'

function ItemDetailContainer() {
    const [products, setProducts] = useState({})
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()

    useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: "instant"});
        getSingleProduct(id)
            .then((respuesta) => setProducts(respuesta))
            .catch( (errormsg) => setError(errormsg))
            .finally(() => setIsLoading(false))
    }, [id])

    if (isLoading) {
      return <>
        {error ? <Error /> : <p className="pt-24">CARGANDO PAA</p>}
      </>;
    }

    return (
    <>
      <ItemDetail item={products}/>
    </>     
  )
}

export default ItemDetailContainer