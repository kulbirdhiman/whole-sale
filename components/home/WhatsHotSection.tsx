"use client";
import React, { useEffect, useState, useMemo, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { getHotdeals } from "@/store/actions/home";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import Link from "next/link";
import HotDealsSkeleton from "../skeleton/WhatsHotSkelton";
import Image from "next/image";
// Lazy load react-slick to improve performance
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import { Settings } from "react-slick";

const WhatsHotSection = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const list = async () => {
    try {
      const res = await dispatch(getHotdeals({})).unwrap();
      if (res.success) {
        setData(res.data.result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    list();
  }, []);

  const sliderSettings:Settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      lazyLoad: "ondemand",
    }),
    []
  );
  return (
    <section className="py-16 px-6 lg:px-20">
      <Suspense fallback={<HotDealsSkeleton />}>
        {loading ? (
          <HotDealsSkeleton />
        ) : (
          <>
            <h2 className="text-5xl font-bold font-serif text-gray-900 mb-10 text-center">
              Hot Deal's
            </h2>
            {/* Mobile Slider */}
            <div className="md:hidden">
              <Slider {...sliderSettings}>
                {data?.map((product, index) => (
                  <Link
                    href={`product/${product.slug}`}
                    key={index}
                    className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="w-full relative h-[20rem] shadow-lg overflow-hidden">
                      <Image
                        height={1000}
                        width={1000}
                        src={
                          product.images?.[0]?.image?.includes("http")
                            ? product.images[0].image
                            : process.env.NEXT_PUBLIC_S3_IMG_URL +
                              product.images?.[0]?.image
                        }
                        alt={product.name || `Product ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {product.discount_price > 0 && (
                        <span className="absolute top-3 left-3 bg-red-600 text-lg font-bold text-white px-4 py-2 rounded-full shadow-md">
                          Save ${product.regular_price - product.discount_price}
                        </span>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 p-6 sm:p-0 md:p-6 flex flex-col justify-center">
                      <h1 className="text-lg sm:text-xs lg:text-2xl font-bold font-serif text-gray-900">
                        {product.name || "Unknown Product"}
                      </h1>
                      <div className="flex items-center gap-3 mt-4">
                        {product.discount_price > 0 && (
                          <span className="text-lg text-red-600 line-through">
                            ${product.regular_price}
                          </span>
                        )}
                        <span className="text-3xl sm:text-lg md:text-3xl font-bold text-green-600">
                          ${
                            product.discount_price > 0
                              ? product.discount_price
                              : product.regular_price
                          }
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10">
              {data?.map((product, index) => (
                <Link
                  href={`product/${product.slug}`}
                  key={index}
                  className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="w-full md:w-1/2 relative h-[20rem] shadow-lg overflow-hidden">
                    <Image
                      height={800}
                      width={700}
                      src={
                        product.images?.[0]?.image?.includes("http")
                          ? product.images[0].image
                          : process.env.NEXT_PUBLIC_S3_IMG_URL +
                            product.images?.[0]?.image
                      }
                      alt={product.name || `Product ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      priority={index < 2}
                    />
                    {product.discount_price > 0 && (
                      <span className="absolute top-3 left-3 bg-red-600 text-lg font-bold text-white px-4 py-2 rounded-full shadow-md">
                        Save ${product.regular_price - product.discount_price}
                      </span>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 p-6 sm:p-0 md:p-6 flex flex-col justify-center">
                    <h1 className="text-lg sm:text-xs lg:text-2xl font-bold font-serif text-gray-900">
                      {product.name || "Unknown Product"}
                    </h1>
                    <div className="flex items-center gap-3 mt-4">
                      {product.discount_price > 0 && (
                        <span className="text-lg text-red-600 line-through">
                          ${product.regular_price}
                        </span>
                      )}
                      <span className="text-3xl sm:text-lg md:text-3xl font-bold text-green-600">
                        ${
                          product.discount_price > 0
                            ? product.discount_price
                            : product.regular_price
                        }
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </Suspense>
    </section>
  );
};

export default WhatsHotSection;