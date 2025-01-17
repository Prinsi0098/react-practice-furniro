import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { HiBars4 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";
import { MdPersonOutline } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

// import WishListitem from "./WishListitem";

const navigation = [
  { name: "Home", href: "" },
  { name: "shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Log in", href: "/login" },
];

const Header = () => {
  const cart = useSelector((state) => state.CartItems.Cartitems);
  // console.log("cart", cart.length);

  const wishlist = useSelector((state) => state.Wishlist.Wishlistitems);
  // console.log("cart", cart);

  const isLoginval = localStorage.getItem("isLogin");
  const path = useLocation();
  const isLogin = () => {
    localStorage.setItem("isLogin", false);
  };

  const Logout = () => {
    isLogin();
    window.location.href = "/login";
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-5 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5 font-bold text-2xl">
              <span className="sr-only">Your Company</span>
              Exclusive
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <HiBars4 aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 flex-1 justify-center">
            {navigation.map((item) =>
              isLoginval === "true" && item.name === "Log in" ? (
                ""
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {isLoginval === "true" && (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <span className="text-sm/6 font-semibold text-gray-900 relative group mx-2">
                <IoPersonCircleOutline size={24} />
                <div className=" absolute invisible group-hover:visible transition-all opacity-0 top-10 group-hover:top-8 group-hover:opacity-100 right-0 duration-300 p-2 backdrop-blur-3xl bg-black/40 rounded-md ">

                  {path.pathname !== "/login" &&
                    path.pathname !== "/signup" && (
                      <Link
                        href="#"
                        className="text-sm/6 font-semibold text-gray-900 text-white flex items-center "
                        onClick={Logout}
                      >
                        <LuLogOut size={24} /> Logout
                      </Link>
                    )}
                </div>
              </span>
              <Link
                to="/wishlist"
                className="text-sm/6 font-semibold text-gray-900 relative mx-2"
              >
                <IoIosHeartEmpty size={24} />
                <span className="bag-item-count absolute -top-1 bg-red-500 rounded-full text-white px-1 -right-1 text-xs">
                  {wishlist.length}
                </span>
              </Link>
              <Link
                to="/cart"
                className="text-sm/6 font-semibold text-gray-900 relative mx-2"
              >
                <GrCart size={24} />
                <span className="bag-item-count absolute -top-1 bg-red-500 rounded-full text-white px-1 -right-1 text-xs">
                  {cart.length}
                </span>
              </Link>
            </div>
          )}
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <FaXmark aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    isLoginval === "true" && item.name === "Log in" ? (
                      ""
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>

                <div className="py-6">
                  <Link
                    to="/cart"
                    className="text-sm/6 inline-block font-semibold text-gray-900 relative mx-2"
                  >
                    <GrCart size={24} />
                    <span className="bag-item-count absolute -top-1 bg-red-500 rounded-full text-white px-1 -right-1 text-xs">
                      {0}
                    </span>
                  </Link>
                  <Link
                    to="/profile"
                    className="text-sm/6 font-semibold inline-block text-gray-900 relative group mx-2"
                  >
                    <IoPersonCircleOutline size={24} />
                  </Link>
                  {path.pathname !== "/login" &&
                    path.pathname !== "/signup" && (
                      <Link
                        href="#"
                        className="text-sm/6 font-semibold inline-block text-gray-900 "
                        onClick={Logout}
                      >
                        <LuLogOut size={24} /> Logout
                      </Link>
                    )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
