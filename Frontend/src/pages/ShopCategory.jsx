import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Item/Item';
import all_product from '../components/Assets/all_product';
import dropdown_icon from '../components/Assets/dropdown_icon.png'


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort flex justify-between items-center">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopcategory-sort px-4 py-2 rounded border border-gray-300">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products grid gap-4 grid-cols-4">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex items-center justify-center mt-6 mx-auto w-60 h-16 rounded-full bg-gray-300 text-gray-700 text-lg font-semibold">
      Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
