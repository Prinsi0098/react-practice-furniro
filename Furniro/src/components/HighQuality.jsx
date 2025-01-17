import React from 'react'
import { GiTrophyCup } from "react-icons/gi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";

const HighQuality = () => {
  return (
    <>
      <section className=" bg-light-furniro md:p-14 p-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex items-center ">
          <GiTrophyCup size={40} />
          <div className="mx-3">
            <p className="text-xl font-bold">High Quality</p>
            <p>crafted from top materials</p>
          </div>
        </div>{" "}
        <div className="flex items-center ">
          <HiOutlineBadgeCheck size={40} />
          <div className="mx-3">
            <p className="text-xl font-bold">Warranty Protection</p>
            <p>Over 2 years</p>
          </div>
        </div>{" "}
        <div className="flex items-center ">
          <BsFillBoxSeamFill size={40} />
          <div className="mx-3">
            <p className="text-xl font-bold">Free Shipping</p>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="flex items-center ">
          <RiCustomerService2Fill size={40} />
          <div className="mx-3">
            <p className="text-xl font-bold">24 / 7 Support</p>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HighQuality

