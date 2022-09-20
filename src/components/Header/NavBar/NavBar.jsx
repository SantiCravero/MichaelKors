import Logo from "../../Logo/Logo";
import BotonHamburguesa from "./BotonHamburguesa/BotonHamburguesa";
import CartWidget from "./CartWidget/CartWidget";
import Links from "./Links/Links";
import User from "./User/User";

function NavBar() {

  function handleScroll(){

    window.addEventListener("scroll", function(){
			const header = document.querySelector(".fixed");
			header.classList.toggle("abajo",window.scrollY>0);
		})}

  return (
    <>
      <nav onScroll={handleScroll} className="bg-slate-100 fixed w-full z-50">
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
