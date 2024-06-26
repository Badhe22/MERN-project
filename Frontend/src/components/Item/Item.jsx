import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item flex flex-col justify-between w-3/4 m-2 hover:scale-105 transition-transform duration-600'>
      <Link to={`/product/${props.id}`}>
        <img  onclick ={window.scrollTo(0,0)} src={props.image} alt="" className='w-full h-auto mb-2'/>
      </Link>
      <p className='mb-6'>{props.name}</p>
      <div className="item-prices flex gap-20">
        <div className='item-price-new text-gray-700 text-lg font-semibold'>
        Rs{props.new_price}
        </div>
        <div className='item-price-old text-gray-500 text-lg font-medium line-through'>
        Rs{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
