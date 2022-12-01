import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import "./User.css"

function User() {
  return (
    <div className="relative ml-3">
      <Link to="/singin" type="button" className="user pb-0 hover:scale-110 ease-in-out duration-300 p-1 px-3 text-xl text-gray-500 hover:text-black" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        <PersonIcon sx={{ fontSize: 26 }}/>
      </Link>
    </div>
  );
}

export default User;
