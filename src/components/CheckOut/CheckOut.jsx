import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CheckOut.css";
import { Link } from "react-router-dom";

function CheckOut({ item }) {
  // const { cart, emptyCart } = useContext(CartContext)

  // if(cart){
  //   emptyCart()
  // }

  return (
    <div className="pt-20 checkout">
      <div class="min-h-full pt-12 pb-12 flex flex-col bg-white">
        <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 lg:mt-0">
            <div className="text-center pb-8">
              <Link to="/" class="inline-flex">
                <img class="h-20 w-auto" src="/assets/MK.png" alt="Michael Kors" />
              </Link>
              <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight ">Gracias por tu compra!</h1>
              <small>Nos contactaremos con vos en la brevedad.</small>
            </div>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm cuadro">
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <dt className="text-sm">N° de pedido</dt>
                    <small className="advertencia">No lo pierdas, en caso de algun inconveniente se lo solicitará</small>
                  </div>
                  <dd className="text-sm font-medium text-gray-900">ERIU4RU3EQWODJ</dd>
                </div>
              </dl>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Total</dt>
                  <dd className="text-sm font-medium text-gray-900">$ </dd>
                </div>
              </dl>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Enviado a:</dt>
                  <dd className="text-sm font-medium text-gray-900"> Direccion de la casa </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CheckOut;
