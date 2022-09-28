import React from 'react'
import "./Links.css"
import { Link } from "react-router-dom"

function Links() {
  return (
    <div className="hidden sm:ml-6 sm:block">
    <div className="flex space-x-4 items-center" id="links">
      
      <Link to="/categoria/hombres" className='effect-cat' aria-current="page">Hombres</Link>
      <Link to="/categoria/mujeres" className='effect-cat' aria-current="page">Mujeres</Link>
      <Link to="/categoria/oro" className='effect-cat' aria-current="page">Oro</Link>

      <span className='text-yellow-600'>|</span>

      <Link to="#" className='effect'>Equipo</Link>

      <Link to="#" className='effect'>Sobre Nosotros</Link>

      <Link to="#" className='effect'>Contacto</Link>
    </div>
  </div>
  )
}

export default Links