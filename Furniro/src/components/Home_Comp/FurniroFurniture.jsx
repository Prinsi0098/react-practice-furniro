import React from 'react'

const FurniroFurniture = () => {
  return (
    <>
      <p className='text-semibold'>Share your setup with</p>
      <p className='lg:text-3xl md:text-2xl text-xl font-bold'>#FuniroFurniture</p>
      <div className="flex justify-between">
        <div className="">
          <img src="assets/images/Product_Image/productimg1.png" alt="" className='w-1/3 h-64' />
        </div>
        <div className="w-1/3 h-64">
          <img src="assets/images/Product_Image/productimg1.png" alt="" className='object-cover object-center w-full h-full' />
        </div>
        <div className="w-1/3 h-64">
          <img src="assets/images/Product_Image/productimg1.png" alt="" className='object-cover object-center w-full h-full' />
        </div>
      </div>
    </>
  )
}

export default FurniroFurniture

