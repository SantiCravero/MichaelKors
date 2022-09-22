import React from 'react'
import "./ItemDetail.css"

function ItemDetail({item}) {
  return (
    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">

            <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <img src={item.img} alt={item.title} className="imagen object-cover object-center"/>
                </div>
                <div className="div sm:col-span-8 lg:col-span-7">
                  <h5 className='text-gray-400 uppercase text-sm'>{item.category}</h5>
                  <h2 className="text-3xl font-bold uppercase text-gray-900 sm:pr-12">{item.title}</h2>

                <section aria-labelledby="information-heading" className="mt-2">
                    <h3 id="information-heading" className="sr-only">Product information</h3>

                    <p className="text-4xl text-yellow-600">${item.price}</p>
                    <div class="mt-6">

                  <h4 class="sr-only">Reviews</h4>
                  <div class="flex items-center">
                    <div class="flex items-center">
                      <svg class="text-yellow-800 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>

                      <svg class="text-yellow-800 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>

                      <svg class="text-yellow-800 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>

                      <svg class="text-yellow-800 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>

                      <svg class="text-yellow-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="sr-only">3.9 out of 5 stars</p>
                    <a href="#" class="ml-3 text-sm font-medium text-yellow-600 hover:text-yellow-500">117 reviews</a>
                  </div>
                </div>
                    <hr className='my-4'></hr>
                <div>
                  <h4 className='text-lg my-2'>Descripción</h4>
                  <p className='text-gray-700 text-base'>{item.detail}</p>
                </div>
                </section>

                <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">Product options</h3>
                    {/* COLOR */}
                    <form>
                        <div className='flex items-center'>
                            <div className='mr-14'>
                                <h4 className="text-sm font-medium text-gray-900">Talle</h4>

                                <fieldset className="mt-4">
                                <span className="flex items-center space-x-3">

                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                    <span id="size-choice-0-label">S</span>
                                    </label>

                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                    <span id="size-choice-0-label">M</span>
                                    </label>

                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                    <span id="size-choice-0-label">L</span>
                                    </label>
                                </span>
                                </fieldset>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-gray-900">Color</h4>

                                <fieldset className="mt-4">
                                <legend className="sr-only">Elije un color</legend>
                                <span className="flex items-center space-x-3">

                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                    <span aria-hidden="true" className="h-8 w-8 bg-yellow-400 hover:opacity-60 border border-black border-opacity-10 rounded-full"></span>
                                    </label>

                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                    <span aria-hidden="true" className="h-8 w-8 bg-gray-400 hover:opacity-60 border border-black border-opacity-10 rounded-full"></span>
                                    </label>

                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                    <span aria-hidden="true" className="h-8 w-8 bg-gray-900 hover:opacity-60 border border-black border-opacity-10 rounded-full"></span>
                                    </label>
                                </span>
                                </fieldset>
                            </div>
                        </div>
{/* #F4E0AD */}
                    <button type="submit" className="mt-6 flex w-full items-center justify-center bg-yellow-500 rounded-md border border-transparent py-3 px-8 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Agregar al carrito</button>
                    </form>
                </section>
                </div>
            </div>
            </div>
  )
}

export default ItemDetail