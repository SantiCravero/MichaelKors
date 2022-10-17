import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import "./CartView.css"
import TotalCart from './TotalCart/TotalCart'

function CartView() {

  const { cart, deleteItem } = useContext(CartContext)

  window.scrollTo({top: 0, left: 0, behavior: "instant"})

  if (cart.length === 0) {
    return (
      <div className='pt-20'>
        <p>Tu carrito esta vacio...</p>
      </div>
    ) 
  }

  return (
    <div className='cart pt-20 flex flex-wrap'>
      <div className='centrar'>
        {cart.map((item) => (
          <div key={item.id} className='cardCart flex flex-wrap my-3'> 
            <div className="mt-8 w-full">
                <div className="">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    <li className="flex my-6"> 
                      <div className="w-52 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.img} alt={item.title} className="h-full w-full object-cover object-center"/>
                      </div>

                      <div className="m-4 flex flex-1 flex-col h-36 self-center">
                        <div className='my-2'>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3 className='card-title uppercase'>
                              <Link to="#">{item.title}</Link>
                            </h3>
                            <button onClick={() => deleteItem(item.id)}>
                              <svg className='w-12 h-8 hover:scale-110 transition-all' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false">
                                <path fill="currentColor" fillRule="evenodd" d="M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 .6C3.913.6.6 3.913.6 8s3.313 7.4 7.4 7.4 7.4-3.313 7.4-7.4S12.087.6 8 .6zm1.167 3.267c.337 0 .613.264.632.597L9.8 4.5v.7h2.033c.166 0 .3.224.3.5 0 .26-.119.473-.27.498l-.03.002h-.605l-.534 5.068c-.05.477-.441.842-.916.864l-.045.001H6.267c-.48 0-.885-.351-.956-.82l-.006-.045L4.771 6.2h-.604c-.166 0-.3-.224-.3-.5 0-.26.119-.473.27-.498l.03-.002H6.2v-.7c0-.338.264-.614.597-.632l.036-.001h2.334zM10.624 6.2h-5.25l.528 5.005c.019.176.16.312.334.327l.03.001h3.467c.177 0 .327-.126.36-.297l.005-.031.526-5.005zM9.167 4.467H6.833c-.014 0-.027.01-.031.022L6.8 4.5v.7h2.4v-.7c0-.015-.01-.027-.023-.032l-.01-.001z"></path>
                              </svg>
                            </button>
                            {/* <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button> */}
                          </div>
                          <p className="card-subtitle -mt-2 text-sm text-gray-500">{item.subtitle}</p>
                        </div>
                        <div className="items-card flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Cantidad: {item.count}</p>

                          <div className="flex">
                            <div className='mr-4'>
                              <p className='mb-2 text-xs font-semibold'>Cada uno : </p>
                              <span className='text-lg'>$ {item.price.toFixed(2)}</span>
                            </div>
                            <div className='ml-4 font-semibold'>
                              <p className='mb-2 text-xs'>Total:</p>
                              <span className='text-lg'>$ {(item.price * item.count).toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        ))}
      </div>
        <TotalCart />
    </div>
  )
}

export default CartView