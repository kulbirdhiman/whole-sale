"use client";

import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const SteeringWheelSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "https://kayhanaudio.com.au/wp-content/uploads/2023/02/1-10-1.jpg",
    "https://kayhanaudio.com.au/wp-content/uploads/2023/02/6-9.jpg",
    "https://kayhanaudio.com.au/wp-content/uploads/2023/02/5-9-1.jpg",
  ];

  const settings =useMemo(
    ()=>( {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      afterChange: (current) => setActiveSlide(current),
      customPaging: () => (
        <div className="w-3 h-3 bg-white opacity-75 rounded-full transition-all duration-300 hover:opacity-100"></div>
      ),
    }), [])

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            <Image 
            height={500}
            width={600}
              src={img}
              alt={`Steering Wheel ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>

      {/* Custom Dots Positioned on Image */}
      <style jsx global>{`
        .slick-dots {
          position: absolute;
          bottom: 20px; /* Adjust dot position */
          left: 50%;
          transform: translateX(-50%);
          display: flex !important;
          justify-content: center;
          gap: 8px;
        }
        .slick-dots li button:before {
          font-size: 10px !important;
          color: white !important; /* Change dot color */
          opacity: 0.75;
        }
        .slick-dots li.slick-active button:before {
          color: #fff !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default SteeringWheelSlider;
