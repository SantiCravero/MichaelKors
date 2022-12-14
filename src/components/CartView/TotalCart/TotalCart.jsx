import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useNavigate } from "react-router-dom";
import "./TotalCart.css"

function TotalCart() {

  const navigate = useNavigate()

  const { getTotalItemInCart, getItemPrice, emptyCart } = useContext(CartContext);

  let precioIVA = (getItemPrice() * 0.21)
  let totalConIva = (precioIVA + getItemPrice())

  function goToPay(){
    navigate(`/checkout/pay`)
  }

  return (
    <div className="container resumen w-3/12 bg-gray-100 rounded-sm m-6 p-6 h-full">
      <div>
        <h2 className="text-xl">Resumen del pedido</h2>
        <div className="flex my-2">
          <ShoppingBagOutlinedIcon sx={{ fontSize: 18 }} />
          <small className="mx-1">{getTotalItemInCart()} artículos</small>
        </div>
      </div>

      <div className="mt-4 ">
        <div className="flex justify-between mt-2">
          <p>Subtotal</p>
          <span>$ {getItemPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <p>I.V.A</p>
          <span>$ {precioIVA.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between my-5 items-center font-semibold">
        <strong className="flex text-xl">Tu Total</strong>
        <span>$ {totalConIva.toFixed(2)}</span>
      </div>
      <button onClick={goToPay} className="bg-black text-white hover:scale-105 transition-all text-center py-4 px-5 w-full flex justify-between rounded-md ">
        Pagar
        <LocalMallOutlinedIcon />
      </button>
      <div className="flex flex-col text-center mt-3">
        <small>o</small>
        <button onClick={emptyCart} className="mt-1 text-sm text-yellow-600 hover:underline">Vaciar carrito</button>
      </div>
    </div>
  );
}

export default TotalCart;
