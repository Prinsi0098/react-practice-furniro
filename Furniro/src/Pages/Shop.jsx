import React, { useState } from "react";
import MainBreadCrumb from "../components/MainBreadCrumb";
import OurProduct from "../components/Home_Comp/OurProduct";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// ============== react icons ===============

import capitalText from "../utils/capitalText";
import HighQuality from "../components/HighQuality";

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const product = useSelector((state) => state.products.products);
  const path = useLocation();

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory && selectedCategory !== "Default"
      ? products.filter((product) => product.Category === selectedCategory)
      : products;

  return (
    <div>
      <MainBreadCrumb
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        path={capitalText(path.pathname)}
      />{" "}
      <div className="bg-light-furniro p-5">
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="categories"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sort By
          </label>
          <select
            id="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Default</option>
            {[...new Set(product.map((item) => item.Category))].map(
              (category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </form>
      </div>
      <section className="my-5">
        <div className="container-md">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-4">
            {filteredProducts.map((item) => (
              <OurProduct key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <HighQuality />
    </div>
  );
};

export default Shop;
