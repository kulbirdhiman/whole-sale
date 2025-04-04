import React, { useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const ProductSection = ({ img, data }) => {
  const FaWhatsapp = dynamic(() => import("react-icons/fa").then((mod) => mod.FaWhatsapp), { ssr: false });
const FaFacebook = dynamic(() => import("react-icons/fa").then((mod) => mod.FaFacebook), { ssr: false });
const FaTwitter = dynamic(() => import("react-icons/fa").then((mod) => mod.FaTwitter), { ssr: false });
const FaInstagramSquare = dynamic(() => import("react-icons/fa").then((mod) => mod.FaInstagramSquare), { ssr: false });

  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/product/${data?.data?.slug}`;

  return (
    data?.data?.images[0] && (
      <Link href={`/product/${data?.data?.slug}`} prefetch={true}
        className="flex w-[80%]  mx-auto justify-center font-serif items-center px-4">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Product Image */}
          <div className="w-full md:w-1/2 p-5">
            <Image
           priority
              alt="Kayhan Amplifier 4000 Watt Mono Block"
              className="w-full -mx-3 min-w-[10rem] max-w-[35rem] h-[20rem] md:h-[30rem] object-contain"
              height="300"
              width="500"
              src={
                data?.data?.images[0]?.image?.includes("http")
                  ? data?.data?.images[0]?.image
                  : process.env.NEXT_PUBLIC_S3_IMG_URL + data?.data?.images[0]?.image
              }
            />

          </div>

          {/* Product Details */}
          <div className="font-light text-center md:text-left w-full md:w-1/2 px-4">
            <h1 className="text-lg sm:text-3xl w-[87%] font-semibold">{data?.data?.name}</h1>
            <p className="text-lg mt-2 text-gray-600">
              Price: <span className="text-green-600 font-bold">${data?.data?.wholesale_price !==0 ? data?.data?.wholesale_price : "--" }</span>
            </p>

            {/* Social Share */}
            <div className="flex items-center justify-center md:justify-start space-x-3 mt-4 text-gray-700">
              <span>Share On:</span>

              <a
                href={`https://api.whatsapp.com/send?text=Check%20out%20this%20product:%20${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl hover:text-green-500 cursor-pointer" />
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check%20out%20this%20product!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="text-2xl hover:text-pink-500 cursor-pointer" />
              </a>
            </div>


            {/* Buy Now Button */}
            <div className="flex md:flex-row flex-col justify-center md:justify-start gap-4 mt-4">
              <button
                className="bg-blue-900 shadow-md hover:bg-green-700 transition text-white text-center flex justify-center px-6 md:py-2 rounded-lg p-2 items-center"
              >
                <BsCart4 className="text-lg mr-2" /> Buy Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    )
  );
};

export default ProductSection;
