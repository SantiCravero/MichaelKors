import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
      <div className='texto flex flex-col justify-center items-center'>
        <h1 className='my-3'>New Collection</h1>
        <p className='uppercase'>Reeditado para el otoño de 2022, nuestro reloj Cellini Moonphase está de vuelta y mejor que nunca en un siempre elegante carey.</p>
        <button className="cta my-5 mt-14">
          <Link to="/cat/WWAwBcXC4FG8YIuDC6Me" className="hover-underline-animation"> Shop now </Link>
          <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Banner