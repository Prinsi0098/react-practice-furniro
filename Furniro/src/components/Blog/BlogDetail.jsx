import React from 'react'
import { useSelector } from 'react-redux'

const BlogDetail = () => {
  const viewBlog = useSelector((state) => state.BlogItem.viewBlog);
  return (
    <div className='container-md'>
      {viewBlog.map((item) => (
        <div className='grid md:grid-cols-2 gap-5 text-left'>
          <div className='h-80'>
            <img src={item.image} alt="" className='object-cover object-center w-full h-full' />
          </div>
          <div>
            <p className='text-2xl font-bold'>{item.name}</p>
            <p className='text-gray-500 text-base font-semibold my-4'>{item.date}</p>
            <p className='text-gray-500 text-sm '>{item.description}</p>
          </div>
        </div>))}
    </div>
  )
}

export default BlogDetail
