import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { SiAfterpay, SiGooglepay } from "react-icons/si";
import { H1Icon } from "@heroicons/react/24/solid";
import { FaCcApplePay } from "react-icons/fa";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage =
    product.discount_price > 0
      ? Math.round(
        ((product.regular_price - product.discount_price) /
          product.regular_price) *
        100
      )
      : 0;
console.log(product)
  return (
    <div className="w-full rounded-none relative max-w-[450px] mx-auto border bg-white shado-lg min-h-[350px] flex flex-col rounded-l">
      {/* Discount Tag */}
      {/* {product.discount_price > 0 && (
        <div className="absolute top-0 right-0 z-20 bg-red-500 text-white text-xs font-semibold py-1 px-4 rounded-bl-lg">
          {discountPercentage}% OFF
        </div>
      )} */}

      {/* Image Container */}
      <Link href={`/product/${product.slug}`} passHref>
        <div className="relative w-full h-[260px] bg-gray-100 rounded-t-lg cursor-pointer">
          <Image
            src={
              product.images[0].image.includes("http")
                ? product.images[0].image
                : `${process.env.NEXT_PUBLIC_S3_IMG_URL}${product.images[0].image}`
            }
            alt={product.name || "Product Image"}
            width={300}
            height={300}
            className="rounded-t-lg"
            loading="lazy"
            style={{ mixBlendMode: "darken", backgroundColor: "#f3f4f6" }}
          />

          {/* Fire Icon (Left Side) */}


          {/* Wishlist Icon (Right Side) */}
          {/* <button className="absolute top-3 right-3 text-white hover:text-red-500 text-2xl transition-transform transform hover:scale-110">
            <FaHeart />
          </button> */}
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-2">
        <p className="font-extralight text-gray-400 text-xs line-clamp-1 ">
          {product.name}
        </p>
        <Link href={`/product/${product.slug}`} passHref className="font-bold text-black line-clamp-1 text-sm ">
          {/* <a className="text-md font-semibold text-gray-800 line-clamp-2 h-[52px] mb-2"> */}
          {product.name}
        </Link>
        <div className="flex text-black text-xl gap-2">
          <SiAfterpay />
          <SiGooglepay className="text-2xl" />
          <FaCcApplePay />
        </div>

        {product.in_stock > 0 ? (
          <p className="text-xs my-2 text-green-700 font-bold">
            In Stock
          </p>
        ) : (
          <H1Icon />
        )}

        {/* Price and Discount */}
        <div className="mb-2 flex gap-3 items-center">
          {/* <p className="text-sm font text-gray-900">
            <span className="font-semibold text-green-900 text-base">
              ${product.discount_price && product.discount_price > 0 ? product.discount_price : product.regular_price}
            </span>
          </p>

          {/* Show regular price with line-through only if there's a discount */}
          {/* {product.discount_price > 0 && (
            <p className="text-sm text-red-500 line-through">
              ${product.regular_price}
            </p>
          )}  */}
      <p className="text-black">
      {product.wholesale_price !== 0 ? product.wholesale_price : "--" }
      </p>

        </div>

        {/* Button */}
        <Link href={`/product/${product.slug}`} className="flex mx-1 justify-center gap-1 text-white bg-amazon_blue w-[150px] py-2 rounded-full">
          <span className="md:text-base text-sm">
            < FiShoppingBag />
          </span>
          <span className="text-sm">BUY NOW</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;