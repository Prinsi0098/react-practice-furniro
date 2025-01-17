import React from "react";
import WishListitem from "../components/wishListItem";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../Store/WishlistSlice";
import { addToCart } from "../Store/CratItemSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const WishlistItem = useSelector((state) => state.Wishlist.Wishlistitems);


  const products = useSelector((state) => state.products.products);

  const FinalItems = products.filter((item) => {
    const itemIndex = WishlistItem.indexOf(item.id);
    return itemIndex >= 0;
  });

  const addalltocart = () => {
    WishlistItem.forEach((item) => {
      dispatch(addToCart(item));
      dispatch(removeFromWishlist(item));
    });

  };

  return (
    <div className="container-md">
      {FinalItems.length > 0 ? (
        <div>
          <p className="my-10 text-2xl font-semibold text-left">
            WishList ({FinalItems.length})
          </p>
          <div className="grid lg:grid-cols-4 gap-4 ">
            {FinalItems.map((item) => (
              <WishListitem key={item.id} item={item} />
            ))}
          </div>
          <button className="border rounded-xl border-black px-7 py-2 text-black text-base mt-3 inline-block hover:scale-105 duration-300" onClick={addalltocart}>
            Add All To Cart
          </button>
        </div>
      ) : (
        <div className="my-10 text-2xl font-semibold txet-center">
          No Item Found
        </div>
      )}
    </div>
  );
};

export default WishList;


