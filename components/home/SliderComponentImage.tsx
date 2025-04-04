"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
}) as React.ComponentType<
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
  afterChange?: (current: number) => void;
}

const SliderComponentImages: React.FC = () => {
  const [showSlider, setShowSlider] = useState<any>(false);

  const sliderRef = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = useMemo(
    () => [
      {
        image: "/v6Banner.png",
        title: "Kayhan Version 6 Head Unit",
        description: "Power, Performance & Perfection!",
        slug: "product/list?category=satnav-stereo",
      },
      {
        image: "/images/Amp-banner.png",
        title: "Boost Your Sound with Our Amplifiers!",
        description: "Experience powerful, clear, and immersive audio!",
        slug: "product/list?company=amplifier",
      },
      {
        image: "/images/Speaker-Banner.png",
        title: "Crystal-Clear Sound, Every Beat!",
        description: "Upgrade your audio with our premium speakers.",
        slug: "product/list?company=subwoofer",
      },
    ],
    []
  );


  const settings: SliderSettings = useMemo(()=>({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    afterChange: (current) => setActiveSlide(current),
    appendDots: (dots) => (
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white opacity-75 rounded-full"></div>
    ),
  }),[])

 
  useEffect(() => {
 setTimeout(()=>{
  setShowSlider(!showSlider);
 },500)

 
  }, []);

  return  (
    <div className={`relative w-full overflow-hidden h-[320px] sm:h-[585px] md:h-[750px] lg:h-[810px]`}>
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[320px] sm:h-[585px] md:h-[750px] lg:h-[810px] ">
          <Image
          priority={index === 0}
            quality={100}
            width={1000}
            height={600}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="relative w-full h-[320px] sm:h-[585px] md:h-[750px] lg:h-[810px]"

          />
          {index === activeSlide && (
            <motion.div
              key={index}
              className="absolute inset-0 flex flex-col items-start justify-center text-left font-serif text-white p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[11px] sm:text-2xl lg:text-4xl font-extrabold mb-2">
                {slide.title}
              </h1>
              <p className="text-[9px] sm:text-lg lg:text-xl max-w-lg opacity-90">
                {slide.description}
              </p>
              <Link
                href={slide.slug}
                className="text-xs sm:text-lg border p-1 rounded border-white text-white mt-3"
              >
                Shop Now
              </Link>
            </motion.div>
          )}
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponentImages;

// function SliderSkeleton() {
//   return (
//     <div className="relative w-full overflow-hidden">
//       <div className="flex gap-4 animate-pulse">
//         {/* {[...Array(3)].map((_, index) => ( */}
//         <div className="relative w-full">
//           <div className="w-full h-[30rem] bg-gray-300 rounded-lg"></div>
//           <motion.div
//             className="absolute inset-0 flex flex-col items-start justify-center text-left p-8"
//             initial={{ opacity: 0.5 }}
//             animate={{ opacity: 1 }}
//             transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
//           ></motion.div>
//         </div>
//         {/* ))} */}
//       </div>
//     </div>
//   );
// }
