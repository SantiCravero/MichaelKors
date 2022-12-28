import React from "react";
import "./Item.css";
import { Link } from "react-router-dom"

function Item({item}) {
  const urlDetalle = `/cat/${item.id}`

  return (
    // <div key={item.id} className="group relative">
    //           <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
    //             <img
    //               src={item.img}
    //               alt={item.title}
    //               className="h-full w-full object-cover object-center bg-gray-100"
    //             />
    //           </div>
    //           <h3 className="mt-4 text-sm text-gray-700">
    //             <Link to={urlDetalle}>
    //               <span className="absolute inset-0" />
    //               {item.title}
    //             </Link>
    //           </h3>
    //           <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
    //           <p className="mt-1 text-sm font-medium text-gray-900">$ {item.price}</p>
    //         </div>

<div key={item.id} className="group relative">
<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
  <img
    src={item.img}
    alt={item.title}
    className="h-full w-full object-cover object-center lg:h-full lg:w-full bg-gray-100"
  />
</div>
<div className="mt-4 flex justify-between">
  <div>
    <h3 className="text-sm text-gray-700">
      <Link to={urlDetalle}>
        <span aria-hidden="true" className="absolute inset-0" />
        <p className="oswald uppercase text-base">{item.title}</p>
      </Link>
    </h3>
    <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
  </div>
  <p className="text-sm font-medium text-gray-900">$ {item.price}</p>
</div>
</div>

    // <div className="card my-6 mx-10">
    //   <Link to={urlDetalle}>
    //     <img className="card-img" src={item.img} alt={item.title} />
    //   </Link>
    //   <div className="card-info">
    //     <p className="text-title uppercase">{item.title}</p>
    //     <p className="text-body">Product description and details</p>
    //   </div>
    //   <div className="card-footer">
    //     <span className="text-price">${(item.price).toFixed(2)}</span>
    //     <div className="flex justify-end">
    //       <Link to={urlDetalle}>
    //         <div className="card-button">
    //           <svg className="svg-icon" viewBox="0 0 20 20">
    //             <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
    //             <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
    //             <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    //           </svg>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    //     <small>Stock disponible: {item.stock}</small>
    // </div>
  );
}

export default Item;
