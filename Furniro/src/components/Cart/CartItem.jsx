import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeFromCart } from "../../Store/CratItemSlice";
import { Link } from "react-router-dom";

const CartItem = ({ items }) => {
  const subTotal = items.current_price * items.quantity;
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(items.id));
  };

  return (
    <>
      <tr>
        <td className="flex items-center py-5">
          <div className="w-28 h-20 rounded-lg overflow-hidden mr-5">
            <img src={items.image} alt="" className="w-full h-full" />
          </div>
          <div className="">{items.name}</div>
        </td>
        <td>Rs.{items.current_price}</td>
        <td>{items.quantity}</td>
        <td>Rs.{subTotal}</td>
        <td>
          <Link onClick={handleRemoveFromCart}>
            <FaTrash size={20} color="#b88e2f" className="m-auto" />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
