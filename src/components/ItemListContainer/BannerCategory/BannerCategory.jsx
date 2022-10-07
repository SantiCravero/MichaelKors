import React from 'react'
import BannerView from './BannerView/BannerView';

function BannerCategory({item}) {
  return item.map((singleCategory) => {
    return <BannerView key={singleCategory.id} category={singleCategory.category}/>
  });
}

export default BannerCategory