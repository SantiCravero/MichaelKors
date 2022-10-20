import React from 'react'
import "./BannerCategory.css"

function BannerCategory({cat}) {
  return (
    <>
      <div className='fondo border-y border-y-black'>
          <video src="/assets/video.mp4" className='fondo absolute w-full object-cover' autoPlay={true} muted={true} loop={true}></video>
          <p className='text-center textoBanner text-7xl text-white pt-6 uppercase  h-80 flex justify-center items-center'>
            Relojes de {cat}
          </p>
      </div>
      <div className='w-2/4 divVendidos'>
      <h3 className='text-center text-4xl my-5 -mb-4 vendidos'>Los más vendidos</h3>
      </div>
    </>

)
}

export default BannerCategory