import React from 'react';
import Item from '../Item/Item';
import data_product from '../Assets/data';

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-10 h-90vh'>
      <h1 className='text-4xl font-semibold text-gray-900 mt-8'>POPULAR IN WOMEN</h1>
      <hr className='w-52 h-2 bg-gray-700 rounded-full' />
      <div className='popular-item mt-10 flex gap-10'>
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
