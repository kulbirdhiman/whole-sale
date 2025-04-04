"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
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
];

const AUTO_PLAY_INTERVAL = 5000; // Auto-slide every 5 seconds

const CustomSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = previous
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play logic using setInterval
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);
  
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null; // Ensure the ref is cleared properly
      }
    };
  }, []);
  
  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden h-[26vh] sm:h-[40vh] md:h-[65vh] lg:h-[75vh]">
      <div className="relative flex w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ x: direction === 1 ? "100%" : "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: direction === 1 ? "-100%" : "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              priority
              quality={100}
              width={2000}
              height={600}
              src={slides[activeIndex].image}
              alt={`Slide ${activeIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-start justify-center text-left font-serif text-white p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[11px] sm:text-2xl lg:text-4xl font-extrabold mb-2">
                {slides[activeIndex].title}
              </h1>
              <p className="text-[9px] sm:text-lg lg:text-xl max-w-lg opacity-90">
                {slides[activeIndex].description}
              </p>
              <Link
                href={slides[activeIndex].slug}
                className="text-xs sm:text-lg border p-1 rounded border-white text-white mt-3"
              >
                Shop Now
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left & Right Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-25 p-2 rounded-full hover:bg-opacity-50 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-25 p-2 rounded-full hover:bg-opacity-50 transition"
      >
        ❯
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
