import React from 'react'
import { Link } from 'react-router-dom'

import '../../css/Hero_Sect.css'

const Hero_Sect = () => {
  return (

    <div className="HeroBack relative h-100  ">
      <div className="absolute md:left-auto left-2 right-2 md:ight-10  top-10 bg-light-furniro md:p-10 p-5 lg:w-2/5">
        <span className='font-bold tracking-widest'>New Arrival</span>
        <p className='text-color-furniro text-4xl font-bold'>Discover Our <br /> New Collection</p>
        <p className='text-sm my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <Link className='bg-dark-furniro px-7 py-2 text-white text-base mt-3 inline-block'>Buy Now</Link>
      </div>
    </div>
  )
}
/******  d4509f96-a738-4e8b-80f7-3e6dac987042  *******/

export default Hero_Sect
