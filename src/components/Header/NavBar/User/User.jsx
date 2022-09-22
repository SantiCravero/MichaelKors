import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser}  from "@fortawesome/free-solid-svg-icons";

function User() {
  return (
    <div className="relative ml-3">
      <button type="button" className="hover:scale-100 ease-in-out duration-300 p-1 px-3 text-xl text-gray-500 hover:text-black focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        <FontAwesomeIcon icon={faUser} />
      </button>
    </div>
  );
}

export default User;
