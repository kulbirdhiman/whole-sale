"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = dynamic(() => import("react-slick"), { ssr: false }) as React.ComponentType<
  React.PropsWithChildren<SliderSettings> & { ref?: React.Ref<any> }
>;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  speed: number;
  autoplaySpeed: number;
  cssEase: string;
  arrows: boolean;
  appendDots: (dots: React.ReactNode) => React.ReactNode;
  customPaging: () => React.ReactNode;
}

const SliderComponentVideo: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    appendDots: (dots) => (
      <div className="mb-3 md:mb-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="w-3 h-3 bg-white opacity-75 rounded-full"></div>,
  };

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  return (
    <div className="relative w-full overflow-hidden h-[40vh] md:h-[70vh] lg:h-[80vh]">
      <Slider {...settings} ref={sliderRef}>
        {[1, 2, 3].map((index) => (
          <div key={index} className="relative w-full h-[40vh] md:h-[70vh] lg:h-[80vh]">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-32 text-white">
              <motion.h1
                className="text-xl md:text-3xl lg:text-5xl font-extrabold mb-2 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Premium Experience {index}
              </motion.h1>
              <motion.p
                className="text-sm md:text-lg lg:text-xl max-w-lg opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Elevate your journey with cutting-edge technology and unparalleled comfort.
              </motion.p>
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-3 rounded-full hover:bg-opacity-50 shadow-lg"
      >
        <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-3 rounded-full hover:bg-opacity-50 shadow-lg"
      >
        <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default SliderComponentVideo;
