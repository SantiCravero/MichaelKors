import Logo from "../../Logo/Logo";
import BotonHamburguesa from "./BotonHamburguesa/BotonHamburguesa";
import CartWidget from "./CartWidget/CartWidget";
import Links from "./Links/Links";

function NavBar() {
  return (
    <>
      <nav className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <BotonHamburguesa/>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Logo/> 
              <Links/>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <CartWidget/>
              <div className="relative ml-3">
                <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User icon"/>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-1 px-2 pt-2 pb-3" id="mobile-menu">
            <a href="#" className="effect block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Productos</a>

            <a href="#" className="effect block px-3 py-2 rounded-md text-base font-medium">Equipo</a>

            <a href="#" className="effect block px-3 py-2 rounded-md text-base font-medium">Sobre Nosotros</a>

            <a href="#" className="effect block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
