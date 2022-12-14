import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CheckOut.css";
import { Link, useParams } from "react-router-dom";
import { getSingleOrder } from "../../services/firestore";

function CheckOut() {
  
  const { emptyCart } = useContext(CartContext)
  const { orderid } = useParams()

  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    emptyCart();

    getSingleOrder(orderid).then((respuestaDatos) =>
      setOrderData(respuestaDatos)
    );
  }, [orderid]);

  return (
    <div className="pt-20 checkout">
      <div className="min-h-full pt-12 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 lg:mt-0">
            <div className="text-center pb-8">
              <Link to="/" className="inline-flex">
                <img
                  className="h-20 w-auto"
                  src="/assets/MK.png"
                  alt="Michael Kors"
                />
              </Link>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight ">
                Gracias por tu compra!
              </h1>
              <small>Nos contactaremos con vos en la brevedad.</small>
            </div>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm cuadro">
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <dt className="text-sm">N° de pedido</dt>
                    <small className="advertencia">
                      No lo pierdas, en caso de algun inconveniente se lo
                      solicitará
                    </small>
                  </div>
                  <dd className="text-sm font-medium text-gray-900">
                    {orderid}
                  </dd>
                </div>
              </dl>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Compraste:</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {orderData.items && orderData.items.map((item) => (
                      <span key={item.id}>{item.title} </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Total</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    $ {orderData.total}
                  </dd>
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
