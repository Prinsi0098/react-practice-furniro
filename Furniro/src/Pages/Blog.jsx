import React from "react";
import MainBreadCrumb from "../components/MainBreadCrumb";
import Blogitem from "../components/Blog/Blogitem";


import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Blog = () => {
  const products = useSelector((state) => state.products.products);



  const BlogData = useSelector((state) => state.BlogItem.BlogData);
  const recentData = useSelector((state) => state.BlogItem.recentData);
  console.log("recentData", recentData);

  return (
    <div>
      <MainBreadCrumb path={"Blog"} />
      <div className="container-md">
        <div className="grid grid-cols-3">
          <div className="lg:col-span-2">
            {BlogData.map((item) => (
              <Blogitem key={item.name} item={item} />
            ))}
          </div>

          <div className="flex p-5 flex-col gap-5">
            <p className="text-2xl font-bold">All Product Categories</p>


            {[...new Set(products.map((product) => product.Category))].map((category) => (
              <div key={category} className="flex text-left items-center">
                <div className="ml-4 ">
                  <p className="font-semibold">{category} ({products.filter((product) => product.Category === category).length})</p>
                </div>
              </div>

            ))}

          </div>


          <div>
            <div className="flex p-5 flex-col gap-5">
              <p className="text-2xl font-bold">Recent Post</p>
              {recentData.map((item) => (
                <div className="flex text-left items-center ">
                  <div className="w-2/5 h-24 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-base leading-5">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
