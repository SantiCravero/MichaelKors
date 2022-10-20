import React from "react";
import { Link } from "react-router-dom";
import "./NoProducts.css";

function NoProducts() {
  return (
    <div className="noProducts mb-32">
        <div className="bg-white min-h-full px-4 py-16 pb-0 sm:pb-0 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="max-w-max mx-auto">
                <main className="sm:flex">
                <div className="sm:ml-6 text-center">
                    <div className="sm:pl-6">
                        <h1 className="text-4xl uppercase font-extrabold text-gray-900 tracking-tight sm:text-5xl">¡Lo sentimos!</h1>
                        <p className="mt-1 text-base text-gray-500">No tienes ningún artículo en tu carrito de compras.</p>
                    </div>
                    <div className="hover:scale-105 transition-all mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6 flex justify-center">
                        <Link to="/" className="justify-between text-base font-semibold w-4/5 inline-flex items-center px-5 py-4 border border-transparent rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600">Ver todos los relojes <span>→</span></Link>
                    </div>
                </div>
                </main>
            </div>
        </div>
    </div>
  );
}

export default NoProducts;
