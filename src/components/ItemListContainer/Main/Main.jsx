import React from 'react'
import { Link } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

function Main({products}) {
  return (
    <div className="bg-white">
                
          <div className="mx-auto max-w-2xl py-14 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos Destacados</h2>
              <Link to="/" className="hidden text-sm font-medium text-yellow-600 hover:text-yellow-500 md:block">
                Ver toda la colección
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              <ItemList products={products} />
            </div>
            <div className="mt-8 text-sm md:hidden">
              <Link to="/" className="font-medium text-yellow-600 hover:text-yellow-500">
                Ver toda la colección
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>

        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">Sube de nivel </span>
                  <span className="block sm:inline">tu estilo</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                Haz que tu estilo sea hermoso y organizado. Publique una imagen en las redes sociales y vea cómo obtiene más Me gusta que anuncios que cambian la vida. Reflexiona sobre la naturaleza superficial de la existencia. Al menos tienes un reloj realmente agradable.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-300 sm:w-auto"
                >
                  Mas información
                </a>
              </div>
            </div>
          </div>
        </section>

        
          <section aria-labelledby="collections-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-14">
          <h2 id="collections-heading" className="text-2xl font-bold text-gray-900">Colecciones</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="/assets/colec1.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center"/>
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link to="/categoria/hombres">
                  <span className="absolute inset-0"></span>
                  El reloj clásico
                </Link>
              </h3>
              <p className="relojes uppercase text-xl font-medium leading-loose text-gray-900">Relojes para Hombres</p>
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="/assets/colec2.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center"/>
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link to="/categoria/mujeres">
                  <span className="absolute inset-0"></span>
                  Elegancia en femenino
                </Link>
              </h3>
              <p className="relojes uppercase text-xl font-medium leading-loose text-gray-900">Relojes para Mujer</p>
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="/assets/colec3.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center"/>
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link to="/categoria/oro">
                  <span className="absolute inset-0"></span>
                  La materialización de un ideal
                </Link>
              </h3>
              <p className="relojes uppercase text-xl font-medium leading-loose text-gray-900">Relojes de Oro</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
        </div>
  )
}

export default Main