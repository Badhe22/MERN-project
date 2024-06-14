import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex items-center gap-2 text-gray-600 text-lg font-semibold capitalize mx-8 my-4'>
      HOME
      <img src={arrow_icon} alt="Arrow icon" className="h-4" />
      {product.category}
      <img src={arrow_icon} alt="Arrow icon" className="h-4" />
      {product.name}
    </div>
  )
}

export default Breadcrum;
