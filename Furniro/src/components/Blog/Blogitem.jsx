
import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToRecent, addToView } from '../../Store/BlogSlice';



const Blogitem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToRecent = () => {
    dispatch(addToRecent(item));
    dispatch(addToView(item));
  }

  return (
    <div className='p-5 text-left'>
      <div className='h-80'>
        <img src={item.image} alt="" className='object-cover object-center w-full h-full' /></div>
      <div className="flex items-center my-2">
        <FaUser color='#9F9F9F' />
        <p className='mx-2 text-gray-500'>Admin</p>
        <FaCalendar color='#9F9F9F' />
        <p className='mx-2 text-gray-500'>{item.date}</p>
        <FaTag color='#9F9F9F' />
        <p className='mx-2 text-gray-500'>{item.type}</p>
      </div>
      <p className='text-2xl font-bold'>{item.name}</p>
      <p className='text-gray-500 my-2'>{item.description}</p>
      <Link to={"/blogdetail"} className="underline" onClick={handleAddToRecent}>Read More</Link>
    </div>
  )
}

export default Blogitem
