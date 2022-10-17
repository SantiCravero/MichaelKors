import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"

function Error() {
  window.scrollTo({top: 0, left: 0, behavior: "instant"})
  return (
    <div className="fondo flex justify-center items-center">
        <div className='text-center'>
            <img src="/assets/MichaelKors.png" alt="Michael Kors" className='w-72 mx-auto my-10'/>
            <p className='text-yellow-500 text-basel'>404</p>
            <h2 className='font-bold text-4xl my-2'>Pagina no encontrada.</h2>
            <p className='text-gray-600 text-sm'>Lo siento, no pudimos encontrar la página que estas buscando.</p>
            <Link to="/">
                <button className='py-4 text-yellow-500 font-medium hover:text-yellow-600 transition-all'>Volver al inicio ➞</button>
            </Link>
        </div>
    </div>
  )
}

export default Error