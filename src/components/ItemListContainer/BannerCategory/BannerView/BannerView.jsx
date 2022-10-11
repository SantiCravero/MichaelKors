import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function BannerView(props) {
    // console.log(props)
    const [bannerShow, setBannerShow] = useState({})

    useEffect(() => {
        
    }, [])

  return (
        <div className='pt-24'>
            {props.category}
        </div>

  )
}

export default BannerView