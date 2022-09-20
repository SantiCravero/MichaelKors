import React from "react";

function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <a href="#" className="">
      <img
        className="hover:scale-105 ease-in-out duration-300 block h-8 w-64 lg:hidden"
        src="/assets/Michael_Kors.png"
        alt="Your Company"
      />
      <img
        className="hover:scale-105 ease-in-out duration-300 hidden h-8 w-64 lg:block"
        src="/assets/Michael_Kors.png"
        alt="Your Company"
      /></a>
    </div>
  );
}

export default Logo;
