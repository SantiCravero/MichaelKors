import React from "react";

function ItemCount({amount, stock}) {
  const [count, setCount] = React.useState(amount);

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
    <div className="flex items-center px-2">
      <button onClick={clickResta} className="px-2">-</button>
      <p>{count}</p>
      <button onClick={clickSuma} className="pl-2">+</button>
    </div>
  );
}

export default ItemCount;
