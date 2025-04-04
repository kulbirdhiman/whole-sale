"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { ChevronDownIcon, HeartIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import toast from "react-hot-toast";

const ImageGallery = ({ images, handleCart,product }: { images: any[], handleCart: any ,product:any}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showUpButton, setShowUpButton] = useState(false);
  const [showDownButton, setShowDownButton] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Optimized scroll function
  const scrollVertically = useCallback((direction: "up" | "down") => {
    if (scrollContainerRef.current) {
      requestAnimationFrame(() => {
        scrollContainerRef.current?.scrollBy({
          top: direction === "down" ? 380 : -380,
          behavior: "smooth",
        });
      });
    }
  }, []);

  // Check scroll buttons visibility
  const checkScrollButtonsVisibility = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      setShowUpButton(scrollTop > 0);
      setShowDownButton(scrollTop + clientHeight < scrollHeight);
    }
  }, []);

  useEffect(() => {
    checkScrollButtonsVisibility();
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScrollButtonsVisibility);
    }
    return () => {
      currentRef?.removeEventListener("scroll", checkScrollButtonsVisibility);
    };
  }, [checkScrollButtonsVisibility]);

  const downloadUserManual = () => {
    if (!product?.user_manual) {
      toast.error("User manual not available.");
      return;
    }
  
    const userManualUrl = `${process.env.NEXT_PUBLIC_S3_IMG_URL}${product.user_manual}`;
  
    console.log("Downloading user manual from:", userManualUrl);
  
    // Open in a new tab to avoid overriding the current page
    const newTab = window.open(userManualUrl, "_blank");
  
    if (!newTab) {
      // If popup blocking prevents new tab, fallback to direct download
      const link = document.createElement("a");
      link.href = userManualUrl;
      link.setAttribute("download", product.user_manual);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  
  

  return (
    <div className="md:flex hidden lg:h- lg:col-span-2 lg:sticky top-10 bg-white">
      <div className="flex flex-col items-center space-y-4">
        {showUpButton && (
          <button
            onClick={() => scrollVertically("up")}
            className="bg-white text-black flex justify-center border w-[100px] h-12 items-center  top-0 z-40"
          >
            <ChevronUpIcon className="h-6 text-black" />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="w-full hide-scrollbar relative disable-scroll block space-y-1"
          style={{ height: "400px" }}
        >

          {images.map((image, index) => (
            <Image
              key={index}
              height={100}
              width={100}
              loading="lazy"
              src={
                image.image.includes("http")
                  ? image.image
                  : process.env.NEXT_PUBLIC_S3_IMG_URL + image.image
              }
              alt={`Thumbnail ${index + 1}`}
              className={`cursor-pointer w-22 h-20 transition-all duration-300 rounded-md border-2 ${selectedImage === index ? "border-blue-500" : "border-gray-300"
                }`}
              onMouseEnter={() => setSelectedImage(index)}
            />
          ))}


          {showDownButton && (
            <button
              onClick={() => scrollVertically("down")}
              className="bg-white mx-auto text-black flex justify-center border w-[100px] h-12 items-center sticky bottom-0 z-10"
            >
              <ChevronDownIcon className="h-6 text-black" />
            </button>
          )}
        </div>
        <button className="lg:flex hidden mt-6 w-16 py-2 px-4 bg-white items-center justify-center text-black border-2 rounded-full hover:bg-gray-200">
          <HeartIcon className="h-5" />
        </button>
      </div>
      <div className="w-full flex flex-col items-center mx-2">
        <Image
          height={1000}
          width={1000}
          priority
          objectFit="c"
          src={
            images[selectedImage]?.image.includes("http")
              ? images[selectedImage]?.image
              : process.env.NEXT_PUBLIC_S3_IMG_URL +
              images[selectedImage]?.image
          }
          alt="Main Product"
          className="w-[90%] h-[270px] lg:h-[400px] object-contain rounded-lg transition-transform duration-300"
        />
        <div className="flex space-x-4 mt-6 w-full px-4">
     
            <button onClick={downloadUserManual} className="flex-1 line-clamp-3 py-2 px-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
              User manual
            </button>
    

          <button onClick={() => handleCart(true)} className="flex-1 py-2 px-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
