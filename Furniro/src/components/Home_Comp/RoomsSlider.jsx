import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/RoomsSlider.css";

const CustomSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Track the first visible slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next), // Update active slide index
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    { id: 1, title: "Slide 1", image: "/assets/images/RoomsSliderImage/roomsliderimg1.png" },
    { id: 2, title: "Slide 2", image: "/assets/images/RoomsSliderImage/roomsliderimg2.png" },
    { id: 3, title: "Slide 3", image: "/assets/images/RoomsSliderImage/roomsliderimg3.png" },
    { id: 4, title: "Slide 4", image: "/assets/images/RoomsSliderImage/roomsliderimg2.png" },
  ];

  return (
    <div className="custom-slider-container ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === activeSlide ? "large-slide" : "small-slide"} px-3  relative`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {/* <h3>{slide.title}</h3> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
