import React, { useState } from "react";

function ItemCount({stock, onAddToCart}) {
  const [count, setCount] = useState(1);

  function clickSuma(){
    if(count < stock){
      setCount(count + 1)
    }
  }

  function clickResta(){
    if(count > 1){
      setCount(count - 1)
    }
  }

  return (
    <>
    <button onClick={() => onAddToCart(count)} type="submit" className="mt-6 flex w-1/2 items-center justify-center bg-yellow-500 rounded-md border border-transparent py-3 px-8 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
      Agregar al carrito
    </button>
    <div className="flex items-center px-2">
      <button onClick={clickResta} className="h-8 w-8 mx-5 active:bg-gray-200 border border-black rounded-full">-</button>
      <span>{count}</span>
      <button onClick={clickSuma} className="h-8 w-8 mx-5 active:bg-gray-200 border border-black rounded-full">+</button>
    </div>
    </>
  );
}

export default ItemCount;
