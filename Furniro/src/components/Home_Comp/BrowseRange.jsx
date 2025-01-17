import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {
  const products = [
    {
      id: "01",
      name: "Dining",
      image: "assets/images/BrowsetheRange/BrowsImg1.png",
    },
    {
      id: "02",
      name: "Leviosa",
      image: "assets/images//BrowsetheRange/BrowsImg2.png",
    },
    {
      id: "03",
      name: "Lolito",
      image: "assets/images//BrowsetheRange/BrowsImg3.png",
    },

  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Scroll 1 slide at a time
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For screens <= 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="sm:w-4/5 mx-auto overflow-hidden">
      <p className=" text-3xl font-bold">Browse The Range</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className=" sm:p-5 p-2">
            <div className=" md:h-80 sm:h-56 h-40 rounded-2xl hover:scale-105 duration-500 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover h-full w-full"
              />
            </div>
            <p className="md:text-2xl sm:text-xl font-semibold my-2">{product.name}</p>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
