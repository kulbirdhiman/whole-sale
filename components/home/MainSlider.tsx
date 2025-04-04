"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const MainSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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

  return (
    <div className="relative w-full rounded-lg mt-10 overflow-hidden h-[250px] sm:h-[400px] lg:h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        navigation={false}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-3 h-3 rounded-full bg-white opacity-75"></span>`,
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        speed={2000}
        observer={true} // Observe changes to Swiper container
        observeParents={true} // Observe parent containers (for hidden tabs)
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-md w-full h-[250px] sm:h-[400px] lg:h-[500px]">
              {/* Responsive Image */}
              <Image
                priority={index === 0}
                quality={100}
                width={1920}
                height={1080}
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Animated Content (Only visible on active slide) */}
              {index === activeSlide && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-start justify-center p-4 sm:p-8 text-left font-serif text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-xs sm:text-2xl lg:text-4xl font-extrabold mb-2">
                    {slide.title}
                  </h1>
                  <p className="text-[10px] sm:text-lg lg:text-xl max-w-lg opacity-90">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.slug}
                    className="text-xs sm:text-lg border p-1 rounded border-white text-white mt-3 hover:bg-white hover:text-black transition"
                  >
                    Shop Now
                  </Link>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
