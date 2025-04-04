"use client";

import React from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const ProductSkeleton = () => {
  return (
    <div className="flex justify-center items-center px-4 animate-pulse">
      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Skeleton for Product Image */}
        <div className="w-full -mx-3 md:w-1/2 p-5">
          <div className="w-full h-[17rem] bg-gray-300 rounded-lg"></div>
        </div>

        {/* Skeleton for Product Details */}
        <div className="font-light text-center md:text-left w-full md:w-1/2 p-2">
          <div className="h-8 w-3/4 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-6 w-1/2 bg-gray-300 rounded-md mb-4"></div>

          {/* Skeleton for Social Share */}
          <div className="flex items-center justify- md:justify-start space-x-3 mt-4">
            <div className="h-6 w-16 bg-gray-300 rounded-md"></div>
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
          </div>

          {/* Skeleton for Buy Now Button */}
          <div className="flex md:flex-row flex-col justify-center md:justify-start gap-4 mt-4">
            <div className="h-10 w-36 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
