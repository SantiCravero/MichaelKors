import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBagShopping}  from "@fortawesome/free-solid-svg-icons";

function CartWidget(){
    return (
        <button type="button" className="p-1 px-3 text-xl text-gray-400 hover:text-black focus:outline-none">
          <FontAwesomeIcon icon={faBagShopping} />
        </button>
    )
}

export default CartWidget