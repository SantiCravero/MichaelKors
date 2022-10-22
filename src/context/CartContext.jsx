import { useState, createContext } from "react";

export const CartContext = createContext()
const { Provider } = CartContext

function MyProvider({children}){
    const [cart, setCart] = useState([])
    const [checkout, setChekout] = useState({})


    function isInCart(id){
        return cart.some(item => item.id === id)
    }

    function addItem(item, count){
        const newItem = {...item, count}
        
        if(isInCart(newItem.id)){
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const arrayAux = [...cart]
            arrayAux[productIndex].count += count
            setCart(arrayAux)
        }
        else{
            setCart([...cart, newItem])
        }
    }

    function emptyCart(){
        return setCart([])
    }

    function deleteItem(id){
        return setCart(cart.filter(x => x.id !== id))
    }

    function getTotalItemInCart(){
        return cart.reduce((acc, x) => acc += x.count, 0)
    }

    function getItemPrice(){
        return cart.reduce((acc, x ) => acc += x.price * x.count, 0)
    }

    function addInput(form){
        setChekout(form)
        // console.log(form)    
        return checkout
    }
    
    return (
      <Provider
        value={{
          cart,
          isInCart,
          addItem,
          emptyCart,
          deleteItem,
          getTotalItemInCart,
          getItemPrice,
          addInput,
        }}
      >
        {children}
      </Provider>
    );
}

export default MyProvider