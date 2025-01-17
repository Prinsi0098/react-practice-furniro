import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainBreadCrumb = ({ path }) => {


  return (
    <>
      <div className="h-52 w-full relative flex justify-center items-center text-center">
        <div
          className="opacity-50 bg-white absolute top-0 bottom-0 right-0 left-0 -z-10"
          style={{
            backgroundImage: "url('assets/images/backImg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
          }}
        ></div>
        <div className="">
          <div className="mx-5">
            <img src="assets/images/Logo.svg" alt="" />
          </div>
          <p className="text-3xl font-bold">{path}</p>

          {/* Breadcrumb */}
          <nav className="flex my-4 justify-center" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to={"/"}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight />
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    {path}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

    </>
  );
};

export default MainBreadCrumb;
