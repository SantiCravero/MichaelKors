import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./CheckOut.css"

function CheckOut() {
  
  // const { cart, emptyCart } = useContext(CartContext)
  
  // if(cart){
  //   emptyCart()
  // }

  return (
    <div className='pt-20 checkout'>
      <p>Gracias por tu compra!</p>
    </div>
  )
}

export default CheckOut