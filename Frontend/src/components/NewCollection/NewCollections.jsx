import React from 'react';
import Item from '../Item/Item';
import new_collections from '../Assets/new_collections';

const NewCollections = () => {
  return (
    <div className='new-collections  flex flex-col items-center gap-10 h-90vh'>
      <h1 className='text-4xl font-semibold text-gray-900 mt-8'>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections mt-10 grid grid-cols-3 gap-10'>
        {new_collections.map((item, i) => (
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

export default NewCollections;
