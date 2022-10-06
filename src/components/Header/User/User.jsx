import PersonIcon from '@mui/icons-material/Person';

function User() {
  return (
    <div className="relative ml-3">
      <button type="button" className="pb-0 hover:scale-110 ease-in-out duration-300 p-1 px-3 text-xl text-gray-500 hover:text-black" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        <PersonIcon sx={{ fontSize: 26 }}/>
      </button>
    </div>
  );
}

export default User;
