import React from 'react'
import MainBreadCrumb from '../components/MainBreadCrumb'
import { useLocation } from 'react-router-dom';
import capitalText from '../utils/capitalText';
import CartItem from '../components/Cart/CartItem';
import { useSelector } from 'react-redux';
import CartSummery from '../components/Cart/CartSummery';
import HighQuality from '../components/HighQuality';

const Cart = () => {
  const cartItems = useSelector((state) => state.CartItems.Cartitems);
  const product = useSelector((state) => state.products.products);
  const finalcart = cartItems.map((item) => {
    const productItem = product.find((product) => product.id === item);
    return productItem
  })



  const path = useLocation();
  return (
    <>
      <MainBreadCrumb
        path={capitalText(path.pathname)}
      />
      <div className="container-md grid md:grid-cols-3 gap-4">
        <div className='col-span-2'>
          <table className='w-full my-5'>
            <thead className='bg-light-furniro '>
              <tr>
                <td className='p-2'>Product</td>
                <td className='p-2'>Price</td>
                <td className='p-2'>Quantity</td>
                <td className='p-2'>Subtotal</td>
                <td className='p-2'>Remove</td>
              </tr>
            </thead>
            <tbody>{finalcart.length > 0 ? finalcart.map((item) => (<CartItem key={item.id} items={item} />)) : <tr><td colSpan={5} className='p-5'>No items in cart</td></tr>}</tbody>
          </table>

        </div>
        <div className="col-span-1">
          <CartSummery />
        </div>
      </div>
      <HighQuality />
    </ >
  )
}

export default Cart

