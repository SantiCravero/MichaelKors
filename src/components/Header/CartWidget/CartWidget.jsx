import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBagShopping}  from "@fortawesome/free-solid-svg-icons";

function CartWidget(){
    return (
        <button type="button" className="hover:scale-110 ease-in-out duration-300 p-1 px-3 text-xl text-gray-500 hover:text-black focus:outline-none">
          <FontAwesomeIcon icon={faBagShopping} />
        </button>
    )
}

export default CartWidget