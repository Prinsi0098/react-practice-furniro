import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../Store/CratItemSlice'
import { addToWishlist, removeFromWishlist } from '../Store/WishlistSlice'
import { Link } from 'react-router-dom'
import { IoShareSocial } from "react-icons/io5";
import { DiGitCompare } from "react-icons/di";
import { MdDelete } from "react-icons/md";



const wishListItem = ({ item }) => {


  const dispatch = useDispatch();
  const CartItem = useSelector((state) => state.CartItems.Cartitems);
  const elementFound = CartItem?.find((cartItem) => cartItem === item.id);



  const handleAddToCart = () => {
    if (!elementFound) {
      dispatch(addToCart(item.id));
    }
  };

  const handleRemoveFromCart = () => {
    if (elementFound) {
      dispatch(removeFromCart(item.id));
    }
  };
  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(item.id));
    setaddwishlist(false)
  }
  return (
    <div>
      <div className='bg-gray-furniro text-left relative group'>
        <div className='w-full h-64'>
          <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
        </div>
        <div className='px-3 pt-2 pb-5'>
          <p className='text-lg font-semibold'>{item.name}</p>
          <p className='text-sm text-gray-400'>{item.product_type}</p>
          <span className='text-base font-semibold'>Rs.{item.current_price}</span>
          <span className='text-xs mx-2 line-through text-zinc-400'>Rs.{item.original_price}</span>
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/50 opacity-0 group-hover:opacity-100 duration-500 scale-0 group-hover:scale-100 flex justify-center flex-col p-3">
          {elementFound ? (
            <button
              className='text-color-furniro px-7 py-2 bg-white text-base font-semibold scale-90 hover:scale-95 duration-300'
              onClick={handleRemoveFromCart}
            >
              Remove from cart
            </button>
          ) : (
            <button
              className='text-color-furniro px-7 py-2 bg-white text-base font-semibold scale-90 hover:scale-95 duration-300'
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
          <div className="flex justify-between items-center text-white my-2">
            <Link className='flex items-center'><IoShareSocial /> Share</Link>
            <Link className='flex items-center'><DiGitCompare className='rotate-90' /> Compare</Link>
            <Link className='flex items-center' onClick={handleRemoveFromWishlist}><MdDelete size={20} /> Remove</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default wishListItem




