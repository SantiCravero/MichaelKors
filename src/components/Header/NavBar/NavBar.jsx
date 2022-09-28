import Logo from "../../Logo/Logo";
import BotonHamburguesa from "./BotonHamburguesa/BotonHamburguesa";
import CartWidget from "./CartWidget/CartWidget";
import Links from "./Links/Links";
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

        {/* <div className="md:hidden space-y-1 px-2 pt-2 pb-3" id="mobile-menu">
            <Link to="#" className="effect block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Productos</Link>

            <Link to="#" className="effect block px-3 py-2 rounded-md text-base font-medium">Equipo</Link>

            <Link to="#" className="effect block px-3 py-2 rounded-md text-base font-medium">Sobre Nosotros</Link>

            <Link to="#" className="effect block px-3 py-2 rounded-md text-base font-medium">Contacto</Link>
        </div> */}
      </nav>
    </>
  );
}

export default NavBar;
