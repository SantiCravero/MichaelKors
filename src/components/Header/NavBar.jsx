import BotonHamburguesa from "./BotonHamburguesa/BotonHamburguesa";
import CartWidget from "./CartWidget/CartWidget";
import Links from "./Links/Links";
import Logo from "./Logo/Logo";
import User from "./User/User";

function NavBar() {
  return (
    <>  
      <nav className="bg-slate-100 fixed w-full z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <BotonHamburguesa/>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Logo/>
              <Links/>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <CartWidget/>
              <User/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
