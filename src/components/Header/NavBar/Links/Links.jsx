import React from 'react'
import "./Links.css"

function Links() {
  return (
    <div className="hidden sm:ml-6 sm:block">
    <div className="flex space-x-4" id="links">
      <a href="#" className='effect' aria-current="page">Productos</a>

      <a href="#" className='effect'>Equipo</a>

      <a href="#" className='effect'>Sobre Nosotros</a>

      <a href="#" className='effect'>Contacto</a>
    </div>
  </div>
  )
}

export default Links