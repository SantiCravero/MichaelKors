import React from "react";
import { Link } from "react-router-dom"

function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Link to="/">
      <img
        className="hover:scale-105 ease-in-out duration-300 block h-8 w-64 lg:hidden"
        src="/assets/MichaelKors.png"
        alt="Your Company"
      />
      <img
        className="hover:scale-105 ease-in-out duration-300 hidden h-8 w-64 lg:block"
        src="/assets/MichaelKors.png"
        alt="Your Company"
      /></Link>
    </div>
  );
}

export default Logo;
