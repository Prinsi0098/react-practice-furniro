import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'

const CartSummery = () => {
  const cartItems = useSelector((state) => state.CartItems.Cartitems);
  const product = useSelector((state) => state.products.products);
  const finalcart = cartItems.map((item) => {
    const productItem = product.find((product) => product.id === item);
    return productItem
  })
  const total = finalcart.reduce(
    (acc, item) => acc + item.current_price * item.quantity,
    0
  );



  const handlePayment = async () => {

    const stript = await loadStripe("pk_test_51QcJ7OKPsUTb2ZNVOA5mt2DEUE6CosDVL7xy9m39Mv3KaAyuNNCOVjPkFpimeNbpHOWmI4Le09EgVlMnHuhRa72e00FEDrjbG8")

    const body = {
      products: finalcart,
    }

    const headers = {
      "Content-Type": "application/json",
    }

    const response = await fetch("http://localhost:7000/api/create-checkout-session", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })

    const session = await response.json()

    const result = await stript.redirectToCheckout({
      sessionId: session.id,
    })
    if (result.error) {
      console.log("asdssf", result.error);
    }
  }
  return (
    <>
      <div className="my-5 bg-light-furniro p-5 rounded-md">
        <p className='text-2xl font-bold'>Cart Totals</p>
        <p className='flex justify-between my-3'><span>subTotal  </span>Rs.{total}</p>
        <p className='flex justify-between'><span>Total  </span><span className='text-color-furniro text-lg font-semibold'>Rs.{total}</span></p>
        <Link className='border rounded-xl border-black px-7 py-2 text-black text-base mt-3 inline-block hover:scale-105 duration-300' onClick={handlePayment}>Check Out</Link>
      </div>
    </>
  )
}

export default CartSummery
