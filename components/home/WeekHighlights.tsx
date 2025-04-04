"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
const TiShoppingCart = dynamic(() => import("react-icons/ti").then((mod) => mod.TiShoppingCart), {
  ssr: false,
});
export const WeekHighlights = ({ products }: any) => {
  console.log("slug", products?.data[1].slug)
  if (!products?.data || products.data.length === 0) return null;
  
  return (
    <div className="grid dark:text-black sm:grid-cols-1 lg:grid-cols-2 gap-8 md:px-6 px-2 py-6">
      {/* Main Product */}
      {products.data[0] && (
       <Link href={`/product/${products.data[0].slug}`} prefetch={false} className="flex flex-col md:flex-col items-center justify-center bg-gray-200 rounded-2xl p-4 md:p-6 shadow-lg group relative border border-gray-200 w-full">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1.2 }}
            className="relative w-full max-h-[30rem] flex flex-col sm:flex-row md:flex-col items-center justify-center"
            viewport={{ once: true }}
          >
            <Image
              src={
                products?.data[0]?.images[0]?.image?.includes("http")
                  ? products?.data[0]?.images[0]?.image
                  : process.env.NEXT_PUBLIC_S3_IMG_URL + products?.data[0]?.images[0]?.image
              }
              priority={true}
              width={500}
              height={500}
              alt="Product Image"
              className="object-cover mix-blend-darken w-full h-[14rem] md:h-[30rem] "
            />
          </motion.div>

          <div className="w-full text-center">
            <h1 className="text-xl md:text-2xl font-bold mt-4 text-gray-900 dark:text-gray-900">
              {products.data[0].name}
            </h1>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-4 bg-blue-900 text-white py-4 rounded-full w-[200px] mx-auto shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-700 opacity-0 group-hover:opacity-100"
            >
              <TiShoppingCart className="h-6 w-6" /> Buy Now
            </motion.button>
          </div>
        </Link>

      )}

      {/* Sub Products */}
      <div className="grid grid-cols-2 md:gap-6 gap-1">
        {Array.isArray(products?.data) &&
          products.data.slice(1).map((data, index) => (
            <Link href={`/product/${products.data[index+1].slug}`} prefetch={false}
              key={index}
              className="bg-gray-200 rounded-2xl p-2 sm:p-4 shadow-md group border border-gray-200 transition-transform duration-300 hover:scale-[1.03]"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }} // ✅ Lighter animation
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center justify-center"
              >
                <Image
                  src={
                    data?.images[0]?.image?.includes("http")
                      ? data?.images[0]?.image
                      : process.env.NEXT_PUBLIC_S3_IMG_URL + data?.images[0]?.image
                  }
                  alt={data.name}
                  width={200}
                  height={250}
                  loading="lazy"
                  className="object-contain mix-blend-darken h-[144px] sm:h-48 w-full "
                />
              </motion.div>
              <p className="mt-2 z-10 sm:mt-3 text-base line-clamp-2 font-semibold text-center text-gray-900 ">
                {data.name}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-3 bg-blue-900 text-white w-[170px] mx-auto rounded-full py-2 opacity-0 group-hover:opacity-100 shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-700"
              >
                <TiShoppingCart className="h-6 w-6" /> Buy Now
              </motion.button>
              </Link>
          ))}
      </div>
    </div>
  );
};