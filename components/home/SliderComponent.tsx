"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const banner = "/banner.webp"; // Correct way to reference an image from public/

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div style={{ marginBottom: "30px" }}>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-lg bg-white m-0 p-0"></div>
    ),
  };

  // Use const instead of let
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="slider-container lg:mt-0 overflow-hidden px-0 w-full">
      <Slider {...settings} ref={sliderRef}>
        
        {/* Slide 1: Video Background */}
        <div className="bg-img w-full h-[70vh] overflow-hidden flex justify-center items-center">
          <div className="relative p-5 md:w-[55%] xl:w-[40%] z-10 text-gray-200 font-serif text-center mx-auto py-80">
            <h1 className="text-lg md:text-xl xl:text-4xl font-bold">Welcome to My Website</h1>
            <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti ad reprehenderit fugiat obcaecati ex placeat atque incidunt. Consequuntur, laborum!</p>
          </div>
        </div>

        {/* Slide 2: Image Content */}
        <div className="bg-img w-full h-[70vh] overflow-hidden flex justify-center items-center">
          <div className="relative p-5 md:w-[55%] xl:w-[40%] z-10 text-gray-200 font-serif text-center mx-auto py-80">
            <h1 className="text-lg md:text-xl xl:text-4xl font-bold">Welcome to My Website</h1>
            <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti ad reprehenderit fugiat obcaecati ex placeat atque incidunt. Consequuntur, laborum!</p>
          </div>
        </div>

        {/* Slide 3: Background Image Fix */}
        <div
          className="bg-img w-full h-[70vh] overflow-hidden flex justify-center items-center"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/30412427/pexels-photo-30412427/free-photo-of-dramatic-view-of-arctic-glacier-under-brooding-skies.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative p-5 md:w-[55%] xl:w-[40%] z-10 text-gray-200 font-serif text-center mx-auto py-80">
            <h1 className="text-lg md:text-xl xl:text-4xl font-bold">Welcome to My Website</h1>
            <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi corrupti ad reprehenderit fugiat obcaecati ex placeat atque incidunt. Consequuntur, laborum!</p>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default SliderComponent;
