import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../../services/firestore'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error'
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
    const [products, setProducts] = useState({})
    const [error, setError] = useState(false)

    const { id } = useParams()

    useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: "instant"});
        getSingleProduct(id)
            .then((respuesta) => setProducts(respuesta))
            .catch( (errormsg) => setError(errormsg))
    }, [id])

    if (!products.title) {
      return <>
        {error ? ( <Error /> )
        : (
          <div className='loading flex items-center justify-center'>
            <div className='loader'></div>
          </div> 
        )}
      </>;
    }

    return (
    <>
      <ItemDetail item={products}/>
    </>     
  )
}

export default ItemDetailContainer