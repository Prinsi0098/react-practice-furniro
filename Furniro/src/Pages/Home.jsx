import React, { useEffect } from "react";
import Hero_Sect from "../components/Home_Comp/Hero_Sect";
import BrowseRange from "../components/Home_Comp/BrowseRange";
import OurProduct from "../components/Home_Comp/OurProduct";
import { useSelector, useDispatch } from "react-redux";
import RoomsSlider from "../components/Home_Comp/RoomsSlider";
import { Link } from "react-router-dom";
import FurniroFurniture from "../components/Home_Comp/FurniroFurniture";
// import { getProduct } from '../Store/AllProduct'

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <>
      {/* ============== Hero Section ============== */}
      <section>
        <Hero_Sect />
      </section>

      {/* ============== Browse Range ============== */}
      <section className="container my-5">
        <BrowseRange />
      </section>

      {/* ============== Our Products ============== */}
      <section className="my-5">
        <div className="container-md">
          <p className="text-3xl font-bold">Our Products</p>
          <div className="grid md:grid-cols-4 sm:grid-cols-3  gap-4 ">
            {
              products.slice(0, 8).map((item) => (
                <OurProduct key={item.id} item={item} />
              ))
            }
          </div>
          <Link to={"/shop"}
            className="border-furniro inline-block
 text-color-furniro px-7 py-2 text-base font-semibold scale-90 hover:scale-95 duration-300 my-5"
          >
            Show More
          </Link>
        </div>
      </section>

      {/* ============== Beautiful rooms inspiration ============== */}
      <section>
        <div className="bg-light-furniro my-5 grid grid-cols-3 py-5 text-start RoomSlider">
          <div className="lg:col-span-1 col-span-3 my-2 flex justify-center items-center ">
            <div className="lg:mx-10 mx-4">
              <p className="text-3xl font-bold">
                50+ Beautiful rooms inspiration
              </p>
              <p>
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <Link className="bg-dark-furniro px-7 py-2 text-white text-base mt-3 inline-block ">
                Explore More
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-3">
            <RoomsSlider />
          </div>
        </div>
      </section>

      {/* =============== FuniroFurniture =============== */}
      <section className=" container text-center">
        <FurniroFurniture />
      </section>
    </>
  );
};

export default Home;
