import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className="border-t-2 mt-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="https://flowbite.com/" className="flex items-center">

                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Furniro</span>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols gap-8 sm:gap-6 md:grid-cols-4 w-4/5">
              <div className='sm:text-base text-sm'>
                <h2 className="md:mb-6 sm:mb-4 mb-3 text-sm font-semibold text-gray-900 uppercase text-black">Link</h2>
                <ul className="text-gray-500 text-gray-400 font-medium">
                  <li className="sm:mb-4 mb-2">
                    <Link to={"/"} className="hover:underline">Home</Link>
                  </li>
                  <li className="sm:mb-4 mb-2">
                    <Link to={"/about"} className="hover:underline">About</Link>
                  </li>
                  <li className="sm:mb-4 mb-2">
                    <Link to="/contact" className="hover:underline">Contact</Link>
                  </li>
                  <li className="sm:mb-4 mb-2">
                    <Link to={"/blog"} className="hover:underline">Blog</Link>
                  </li>

                </ul>
              </div>
              <div className='md:text-base text-sm'>
                <h2 className="md:mb-6 sm:mb-4 mb-3 text-sm font-semibold text-gray-900 uppercase text-black">Account</h2>
                <ul className="text-gray-500 text-gray-400 font-medium">
                  <li className="sm:mb-4 mb-2">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div className='sm:text-base text-sm'>
                <h2 className="md:mb-6 sm:mb-4 mb-3 text-sm font-semibold text-gray-900 uppercase text-black">Quick Link</h2>
                <ul className="text-gray-500 text-gray-400 font-medium">
                  <li className="sm:mb-4 mb-2">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
              <div className='sm:text-base text-sm'>
                <h2 className="md:mb-6 sm:mb-4 mb-3 text-sm font-semibold text-gray-900 uppercase text-black">Download App</h2>
                <ul className="text-gray-500 text-gray-400 font-medium">
                  <li className="sm:mb-4 mb-2">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 hover:text-black">
                <FaFacebookF />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 hover:text-black ms-5">
                <BsDiscord />
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 hover:text-black ms-5">
                <IoLogoTwitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 hover:text-black ms-5">
                <FaGithub />
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 hover:text-black ms-5">
                <FaDribbble />
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
