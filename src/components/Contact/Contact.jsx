import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {

  const navigate = useNavigate()

  // useEffect(()=>{
  //   window.scrollTo({top: 0, left: 0, behavior: "instant"})
  // },[])

  function handleSubmit(e){
      e.preventDefault()
      navigate('/')
    }

  return (
    <main className="overflow-hidden bg-gray-50">
        {/* Header */}
        <div className="bg-gray-50">
          <div className="pt-24 pb-16 lg:pt-32 lg:pb-16">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Ponerse en contacto
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna
                ut volutpat. Sagittis et vel et fermentum amet consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section className="relative bg-gray-50" aria-labelledby="contact-heading">
          <div className="absolute w-full h-1/2 bg-gray-50" aria-hidden="true" />
          {/* Decorative dot pattern */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contactanos
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-yellow-500 to-yellow-600 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">Información de Contacto</h3>
                  <p className="mt-6 text-base text-yellow-50 max-w-3xl">
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                    lacus arcu.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Número de Teléfono</span>
                    </dt>
                    <dd className="flex text-base text-yellow-50">
                      <svg className="flex-shrink-0 w-6 h-6 text-yellow-200" x-description="Heroicon name: outline/phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="ml-3">+1 (555) 123-4567</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-yellow-50">
                      <svg className="flex-shrink-0 w-6 h-6 text-yellow-200" x-description="Heroicon name: outline/mail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="ml-3">soporte@michaelkors.com</span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                      <a className="text-yellow-200 hover:text-yellow-100" href="#">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="text-yellow-200 hover:text-yellow-100" href="#">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="text-yellow-200 hover:text-yellow-100" href="#">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900">Mandanos un mensaje</h3>
                  <form onSubmit={handleSubmit} action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                        Nombre
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="appearance-none border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-2 sm:text-sm py-3 px-4 block w-full shadow-sm text-gray-900 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                        Apellido
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="appearance-none border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-2 sm:text-sm py-3 px-4 block w-full shadow-sm text-gray-900 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="appearance-none border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-2 sm:text-sm py-3 px-4 block w-full shadow-sm text-gray-900 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                          Teléfono
                        </label>
                        <span id="phone-optional" className="text-sm text-gray-500">
                          Opcional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          required
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="appearance-none border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-2 sm:text-sm py-3 px-4 block w-full shadow-sm text-gray-900 rounded-md"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                        Asunto
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          type="text"
                          name="subject"
                          id="subject"
                          className="appearance-none border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-2 sm:text-sm py-3 px-4 block w-full shadow-sm text-gray-900 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                          Mensaje
                        </label>
                        <span id="message-max" className="text-sm text-gray-500">
                          Max. 500 caracteres
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="appearance-none border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:border-2 sm:text-sm py-3 px-4 block w-full shadow-sm text-gray-900 rounded-md"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:w-auto"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto pb-16 pt-4 px-4 sm:pb-16 sm:pt-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Nuestras oficinas</h2>
        <p className="mt-6 text-lg text-gray-500 max-w-3xl">
          Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
          laoreet diam sed lacus, fames.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Los Angeles</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">4556 Brendan Ferry</span>
              <span className="block">Los Angeles, CA 90210</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">New York</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">886 Walter Streets</span>
              <span className="block">New York, NY 12345</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Toronto</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">7363 Cynthia Pass</span>
              <span className="block">Toronto, ON N3Y 4H8</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Londres</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">114 Cobble Lane</span>
              <span className="block">London N1 2EF</span>
            </p>
          </div>
        </div>
      </div>
    </div>


        <div className="relative pb-14">
          <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
          <div className="relative max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-10 px-6 bg-gradient-to-l from-yellow-700 to-yellow-600 rounded-3xl sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Suscribíte a nuestro newsletter</h2>
                <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                  amet fugiat.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form onSubmit={handleSubmit} action="#" method="POST" className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-600 focus:ring-white rounded-md"
                    placeholder="Ingresa tu email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-700 focus:ring-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notificarme
                  </button>
                </form>
                <p className="mt-3 text-sm text-cyan-100">
                  Nos preocupamos por la protección de tus datos. Lea nuestra{' '}
                  <a href="#" className="text-white font-medium underline">
                    Política de Privacidad.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
  )
}

export default Contact