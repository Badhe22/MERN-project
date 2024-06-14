import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='mx-16 my-24'>
            <div className="grid grid-cols-6 gap-8 py-4 text-gray-700 text-lg font-semibold">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="my-2" />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="grid grid-cols-6 gap-8 py-4 items-center">
                                <img src={e.image} alt="" className='h-16' />
                                <p>{e.name}</p>
                                <p>Rs{e.new_price}</p>
                                <button className='border border-gray-300 px-2 py-1'>{cartItems[e.id]}</button>
                                <p>Rs{e.new_price * cartItems[e.id]}</p>
                                <img className='h-6 cursor-pointer' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr className="my-2" />
                        </div>
                    )
                }
                return null;
            })}
            <div className="flex my-24">
                <div className="flex-1 mr-24">
                    <h1 className="text-xl font-semibold">Cart Totals</h1>
                    <div>
                        <div className="flex justify-between py-2">
                            <p>Subtotal</p>
                            <p>Rs{getTotalCartAmount()}</p>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between py-2">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between py-2">
                            <h3>Total</h3>
                            <h3>Rs{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="w-64 h-16 bg-red-500 text-white text-lg font-semibold mt-4">PROCEED TO CHECKOUT</button>
                </div>
                <div className="flex-1">
                    <p className="text-lg font-semibold">If you have a promo code, Enter it here</p>
                    <div className="flex items-center mt-2">
                        <input type="text" placeholder='Promo code' className="border border-gray-300 px-4 py-2 w-72" />
                        <button className="ml-4 bg-black text-white px-6 py-2 text-lg font-semibold">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
