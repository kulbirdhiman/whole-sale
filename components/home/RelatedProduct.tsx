"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SiAfterpay ,SiGooglepay  } from "react-icons/si";
import { FaCcApplePay,FaHeart } from "react-icons/fa";

import RecomendedSkeletonCard from "@/components/skeleton/RecommnededSkelton";
const FaChevronLeft = dynamic(() => import("react-icons/fa").then((mod) => mod.FaChevronLeft), {
  ssr: false,
});

const FaChevronRight = dynamic(() => import("react-icons/fa").then((mod) => mod.FaChevronRight), {
  ssr: false,
});

const TiShoppingCart = dynamic(() => import("react-icons/ti").then((mod) => mod.TiShoppingCart), {
  ssr: false,
});
interface RecommendedProductsProps {
  title?: string;
  data?: any;
}

const RelatedProduct: React.FC<RecommendedProductsProps> = ({
  title = "Recommended Product's",
  data = [],
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const { scrollWidth, clientWidth } = sliderRef.current;
        setShowRightButton(scrollWidth > clientWidth);
      }
      setIsMobile(window.innerWidth < 440); 
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollLeft = useCallback(() => {
    sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  }, []);
  
  const scrollRight = useCallback(() => {
    sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft + clientWidth < scrollWidth);
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      sliderRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[90rem] py-[2rem] mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">{title}</h2>
      <div className="relative flex items-center">
        {/* Left Scroll Button (Hidden on Mobile) */}
        {!isMobile && showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md z-10"
          >
            <FaChevronLeft className="text-xl" />
          </button>
        )}

        <div
          ref={sliderRef}
          className="flex gap-2 overflow-x-auto hide-scrollbar scrollbar-hide items-center lg:justify-center w-full scroll-smooth px-2"
        >
          {data.length === 0
            ? [...Array(5)].map((_, index) => (
                <div key={index} className="flex">
                  <RecomendedSkeletonCard />
                </div>
              ))
            : data.map((product: any, index: number) => (
                <Link key={index} href={`/product/${product.slug}`}>
                  <div className="w-[300px] lg:w-[270px] xl:[340px] md:w-[340px] bg-white h-[450px] p-2 flex flex-col justify-between rounded-xl shadow border border-gray-200 hover:shadow-xl transition-shadow duration-200 mx-auto">
                    <Image
                      src={
                        product.images[0].image.includes("http")
                          ? product.images[0].image
                          : process.env.NEXT_PUBLIC_S3_IMG_URL + product.images[0].image
                      }
                      alt={product.name}
                      width={500}
                      height={300}
                      priority={index < 2}
                      className="w-full h-[15rem] object-cover rounded-md"
                    />
                    <p className="font-serif  text-black font-semibold line-clamp-1">
                      {product.name}
                    </p>
                     <div className="flex text-black text-xl gap-2">
                               <SiAfterpay />
                               <SiGooglepay className="text-2xl" />
                               <FaCcApplePay />
                               </div>
                               {product.in_stock > 0 ? (
                      <p className="text-base my-2 text-green-700 font-bold">
                        In Stock
                      </p>
                    ) : (
                      <p className="text-base my-2 text-red-700 font-bold">
                      Out of stock
                    </p>
                    )}
                    <div className="text-center">
                      <div className="font-semibold flex gap-2 text-xl text-start mx-2 text-blue-900">
                  price     {product.wholesale_price !==0 ? product.wholesale_price : "--" }
                      </div>
                    </div>
                       
                    <Link
                      href={`/product/${product.slug}`}
                      className="text-center gap-1 flex justify-center mt-4 w-full bg-blue-900 p-2 rounded-lg text-white font-semibold transition-transform duration-200 hover:scale-105"
                    >
                      <TiShoppingCart className="text-xl" /> Buy Now
                    </Link>
                  </div>
                </Link>
              ))}
        </div>

        {/* Right Scroll Button (Hidden on Mobile) */}
        {!isMobile && showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 block lg:hidden text-white p-3 rounded-full shadow-md z-10"
          >
            <FaChevronRight className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
