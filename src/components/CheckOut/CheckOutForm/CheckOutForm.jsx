import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { createBuyOrder } from '../../../services/firestore'
import NoProducts from '../../CartView/NoProducts/NoProducts'

function CheckOutForm() {

  const navigate = useNavigate()

  const { cart, getItemPrice, deleteItem } = useContext(CartContext)

  const [dataForm, setDataForm] = useState({
    email: "",
    nombre: "",
    apellido: "",
    city: "", 
    calle: "",
    postalcode: "",
    phone: "",
  })

  function handleChekout(e){
    e.preventDefault()

    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: totalConIva,
    }
    if(dataForm && cart !== 0){
      createBuyOrder(orderData)
        .then((orderid) => {
          navigate(`/checkout/${orderid.id}`)
        })
      }
  }

  function inputChangeHandler(event){
    let inputName = event.target.name
    let value = event.target.value

    const newDataForm = {...dataForm}
    newDataForm[inputName] = value
    setDataForm(newDataForm)
  }

  
  let precioIVA = (getItemPrice() * 0.21)
  let totalConIva = (precioIVA + getItemPrice())

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: "instant"})
  },[])

  if (cart.length === 0) {
    return (
      <div className='pt-20'>
        <NoProducts />
      </div>
    ) 
  }

  return (
    <div className='pt-16'>
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <form onSubmit={handleChekout} className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>

              <div>
                <h2 className="text-lg font-medium text-gray-900">Informacion de Contacto</h2>

                <div className="mt-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input required onChange={inputChangeHandler} type="email" id="email-address" name="email" autoComplete="email" className="h-10 py-2 px-3 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">Información de envío</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <div className="mt-1">
                      <input required onChange={inputChangeHandler} type="text" id="first-name" name="nombre" autoComplete="given-name" className="h-10 py-2 px-3 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm"/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Apellido</label>
                    <div className="mt-1">
                      <input required onChange={inputChangeHandler} type="text" id="last-name" name="apellido" autoComplete="family-name" className="h-10 py-2 px-3 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm"/>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Ciudad</label>
                    <div className="mt-1">
                      <input required onChange={inputChangeHandler} type="text" name="city" id="city" autoComplete="street-address" className="h-10 py-2 px-3 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm"/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">Calle</label>
                    <div className="mt-1">
                      <input required onChange={inputChangeHandler} type="text" name="calle" id="calle" autoComplete="address-level1" className="h-10 py-2 px-3 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm"/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Código postal</label>
                    <div className="mt-1">
                      <input required onChange={inputChangeHandler} type="tel" name="postalcode" id="postal-code" autoComplete="postal-code" className="h-10 py-2 px-3 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm"/>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono de contacto</label>
                    <div className="mt-1">
                      <input required onChange={inputChangeHandler} type="tel" name="phone" id="phone" autoComplete="tel" className="h-10 py-2 px-3 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-gray-900">Resumen del pedido</h2>

              <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                  {cart.map((item)=>(
                  <li key={item.id} className="flex py-6 px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img src={item.img} alt={item.title} className="w-20 rounded-md object-cover h-28"/>
                    </div>

                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <p href="#" className="font-medium text-gray-700 hover:text-gray-800">{item.title}</p>
                          </h4>
                          <small className="mt-1 text-sm text-gray-500">{item.subtitle}</small>
                        </div>

                        <div className="ml-4 flex-shrink-0 flow-root">
                          <button onClick={() => deleteItem(item.id)} type="button" className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="flex-1 pt-2 flex items-end justify-between">
                        <small>Cantidad: {item.count}</small>
                        <p className="mt-1 text-sm font-medium text-gray-900">$ {(item.price * item.count).toFixed(2)}</p>
                      </div>
                    </div>
                  </li>
                  ))}
                </ul>
                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">$ {getItemPrice().toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">I.V.A</dt>
                    <dd className="text-sm font-medium text-gray-900">$ {precioIVA.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">$ {totalConIva.toFixed(2)}</dd>
                  </div>
                </dl>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <button type="submit" className="w-full bg-yellow-500 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-500">Finalizar Compra </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default CheckOutForm