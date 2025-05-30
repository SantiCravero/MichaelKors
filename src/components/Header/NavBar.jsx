import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo/Logo";
import User from "./User/User";
import "./NavBar.css"
import { Link } from "react-router-dom";

function NavBar() {

  function toggleMenu() {
    document.body.classList.toggle("open");
  }
  function closeMenu() {
    document.body.classList.remove("open");
  }

  // const [backgroundColor, setBackgroundColor] = useState();
  //   const colorRef = useRef();

  //   useEffect(() => {
  //     const handleScroll = () => {
  //         const color = colorRef.current;
  //         const { y } = color.getBoundingClientRect();
          
  //         const backgroundColor = y <= 0 ? 'orange' : 'pink';
  //         setBackgroundColor(backgroundColor);
  //     }

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     }

  // }, []);


  // window.onscroll = function() {scrollFunction()};

  // function scrollFunction() {
  //   if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
  //     document.getElementById('header').style.backgroundColor = "#f9f9f9";
  //   } else {
  //     document.getElementById('header').style.backgroundColor = "transparent";
  //   }
  // }  

  return (
    <>
      <div id="header" className="navbar z-50 mx-auto px-2 sm:px-6 lg:px-8 h-20 bg-slate-100 justify-center">
          <button onClick={toggleMenu} className="burger"></button>
          <Logo />
          <div className="dropdowns">
            <Link to="/" onClick={closeMenu} className='init'><p className="effect">Inicio</p></Link>
            
            <div className="dropdown h-52">
              <span className="cursor-pointer button effecto">
                Productos
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='fill-black' d="M12 15.375L6 9.375L7.075 8.3L12 13.25L16.925 8.325L18 9.4L12 15.375Z" fill="#F9F9F9"/></svg>
              </span>
              <div className="dropdown-menu text-center">
                <Link to="/categoria/hombres" onClick={closeMenu} className="linkCat">Relojes de Hombres</Link>
                <Link to="/categoria/mujeres" onClick={closeMenu} className="linkCat">Relojes de Mujeres</Link>
                <Link to="/categoria/oro" onClick={closeMenu} className="linkCat">Relojes de Oro</Link>
                <Link to="/categoria/colecciones" onClick={closeMenu} className="linkCat">Todas las colecciones</Link>
              </div>
            </div>

            <Link to="/oportunidades" onClick={closeMenu} className='effect'>Oportunidades</Link>
            <Link to="/contacto" onClick={closeMenu} className='effect'>Contacto</Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <CartWidget/>
              <User/>
          </div>
        </div>
    </>
  );
}

export default NavBar;