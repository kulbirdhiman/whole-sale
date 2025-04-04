"use client";

import Description from "@/components/product/Description";
import dynamic from "next/dynamic";
import { GiShoppingCart } from "react-icons/gi";
const TabComponent = dynamic(
  () => import("@/components/globals/TabComponent"),
  { ssr: false }
);
const Demmovideo = dynamic(() => import("@/components/product/DemmoVideo"), {
  ssr: false,
});
const RelatedProduct = dynamic(() => import("../home/RelatedProduct"), {
  ssr: false,
});
const ReviewForm = dynamic(() => import("@/components/product/ReviewForm"), {
  ssr: false,
});
const SpecificationsComponent = dynamic(
  () => import("@/components/product/Specifications"),
  { ssr: false }
);

import { useDebouncedCallback } from "use-debounce"; // Install: npm install use-debounce

import React, { useState, useRef, useEffect, useMemo, Suspense } from "react";
import { ChevronDownIcon, HeartIcon } from "@heroicons/react/24/outline";

const FacebookIcon = dynamic(() =>
  import("react-share").then((mod) => mod.FacebookIcon)
);
const TwitterIcon = dynamic(() =>
  import("react-share").then((mod) => mod.TwitterIcon)
);
const WhatsappIcon = dynamic(() =>
  import("react-share").then((mod) => mod.WhatsappIcon)
);

import { ClipboardIcon } from "@heroicons/react/24/outline";
import ImageGallery from "./ImageGallary";
import AddOn from "./AddOn";
import ImageGalleryMobile from "./ImageGallaryMobile";
import { ChevronUpIcon, Share2 } from "lucide-react";
import { useParams } from "next/navigation";
import { ProductForShop } from "@/store/actions/admin/product";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { ProductDetailSkeleton } from "./ProductDetailSkeleton";
import Variations from "./Variation";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { addToCart } from "@/store/actions/cart";
import { IN_STOCK } from "@/app/constants";
import { useRouter } from "next/navigation";

const Detail = () => {
  const { slug } = useParams();
  const { cartCount } = useSelector((state: any) => state.cart);


  const router = useRouter()
  const { loading, user } = useSelector((state: RootState) => state.auth);

  const [extras, setExtras] = useState([]);
  const [errors, setErrors] = useState({});
  const [variationData, setVariationData] = useState([]);
  const [relatedProduct , setRelatedProduct] = useState([])
  const [product, setProduct] = useState({
    // id: 1,
    // name: "Headunit with CarPlay for Universal 2DIN | 7″ inch pro",
    // price: 49.99,
    // discount_price: 45,
    // description: "This is a sample product description.",
    // specification :"",
    // images: [],
    // imagesb: [
    //   "/images/MK-2.jpg",
    //   "/images/Ba-BF.jpg",
    //   "/images/Ford-edge.jpg",
    //   "/images/MK-2.jpg",
    //   "/images/Ba-BF.jpg",
    //   "/images/Ford-edge.jpg",
    // ],
    addOns: {
      battery: [
        { id: 1, name: "Extra Battery", price: 10 },
        { id: 2, name: "Battery Pack", price: 20 },
      ],
      accessories: [
        { id: 3, name: "Screen Protector", price: 5 },
        { id: 4, name: "Phone Case", price: 8 },
      ],
      warranty: [{ id: 5, name: "Warranty Extension", price: 15 }],
    },
  });
  const [apiHit, setApiHit] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);

  const [addOns, setAddOns] = useState<any[]>([]);
  const [variation, setVariation] = useState([]);
  const [addToData, setAddToData] = useState({
    product_id: (product as any).id,
    quantity: 1,
  });

  const dispatch = useDispatch<AppDispatch>();

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setIsLinkCopied(true);
      setTimeout(() => setIsLinkCopied(false), 2000);
    });
  };

  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  console.log(product)
  const list = useDebouncedCallback(async () => {
    try {
      const res = await dispatch(ProductForShop({ slug })).unwrap();
      if (res.success) {
        setProduct((res.data as any).result);
        setApiHit(true);
        setExtras((res.data as any).extras);
        setVariationData((res.data as any).variation);
        setRelatedProduct((res.data as any).relatedProduct)
      }
    } catch (error) {
      console.error(error);
    }
  }, 200); // 200ms debounce

  const increaseQuantity = () => {
    setAddToData((prevData) => {
      return {
        ...prevData,
        product_id: (product as any).id,
        quantity: prevData.quantity + 1,
      };
    });
  };
  const decreaseQuantity = () => {
    if (addToData.quantity > 1) {
      setAddToData((prevData) => {
        return {
          ...prevData,
          product_id: (product as any).id,
          quantity: prevData.quantity - 1,
        };
      });
    }
  };
  function findMissingRequiredVariations() {
    const variationIds = new Set(variation.map((v) => (v as any).id));

    return variationData
      .filter(
        (v) => (v as any).is_required === 1 && !variationIds.has((v as any).id)
      )
      .reduce((acc, v) => {
        acc[(v as any).id] = (v as any).name + " is required";
        return acc;
      }, {} as Record<string, string>);
  }

  const handleCart = async (buyNow:boolean) => {
    

    if (variationData.length > 0) {
      console.log("variationData", variationData);
      console.log("variation", variation);
      const error = findMissingRequiredVariations();
      if (error && Object.keys(error).length > 0) {
        setErrors(error);
        toast.error("Please select required variations");
        return;
      }
    }

    const apiResponse = await dispatch(
      addToCart({
        user_id: user?.id,
        cartCount: cartCount,
        stock_quantity: (product as any).quantity,
        ...product,
        ...addToData,
        addOns: addOns,
        variations: variation,
      })
    );
 

if(buyNow && apiResponse.payload.success){
  router.push(`/checkout`)
}

  };
  const tabDataa = tableData(product);
  // console.log(product.name)
  useEffect(() => {
    if (slug) list();
  }, [slug, dispatch]);
 
  
  return apiHit ? (
    <div>
      <div className="grid container mx-auto md:grid-cols-7 grid-cols-1 lg:gap-3  ">
        <div className="md:col-span-3">
          <ImageGallery product={product}  handleCart={handleCart}     images={(product as any).images} />
        </div>

        {(product as any).images.length > 0 && (
          <ImageGalleryMobile images={(product as any).images} />
        )}

        <div className="md:col-span-4 lg:ps-6 lg:ms-2 pt-6 space-y-4 lg:mt-0 w-full px-5">
          <h1 className="text-xl sm:text-3xl lg:w-10/1 font-bold font-serif text-gray-800">
            {(product as any).name}
          </h1>
        <p className="text-2xl text-black"> {(product as any).wholesale_price !==0 ? (product as any).wholesale_price : "--"}</p>
          <div className="flex flex-row gap-2 dark:text-black">
            <p className="flex items-center gap-2 cursor-pointer  ">
              <HeartIcon className="h-5" /> Add to wishlist
            </p>

            <button
              onClick={() => setIsSharePopupOpen(true)}
              className="flex items-center gap-2      bg-gry-400 my-3 transition"
            >
              <Share2 size={20} />
              <span>Share</span>
            </button>
          </div>
          {variationData.length > 0 && (
            <div>
              <Variations
                errors={errors}
                setVariation={setVariation}
                variation={variation}
                variationData={variationData}
              />
            </div>
          )}
          {extras?.length > 0 && (
            <div className="mt-1 border-y-">
              <AddOn setAddOns={setAddOns} addOns={addOns} extras={extras} />
            </div>
          )}{" "}
          <div className="mt-6 flex   items-center  lg:gap-4 gap-2">
            {/* Add to Cart Button */}
            {(product as any).in_stock == IN_STOCK ? (
              <>
                <div className="flex w-fit items-center border rounded-lg  ">
                  <button
                    onClick={decreaseQuantity}
                    className=" md:h-12 h-9  w-9 text-black text-2xl font-bold flex items-center justify-center "
                  >
                    &#8722;
                  </button>

                  <span className="md:w-12 w-9 md:h-12 h-9 bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-900 tracking-wide shadow-inner">
                    {addToData?.quantity}
                  </span>

                  <button
                    onClick={increaseQuantity}
                    className=" md:h-12 h-9 w-9 text-gray-900 "
                  >
                    &#43;
                  </button>
                </div>
                <button
                  onClick={()=>handleCart(false)}
                  className="items-center flex gap-2 px-5 md:mt-o md:h-12 h-9  md:text-md text-sm  bg-amazon_blue text-white  rounded-md shadow-lg hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105 focus:outline-none"
                >
                  <GiShoppingCart className="text-lg" />
                  Add to Cart
                </button>
                <button
                  onClick={()=>handleCart(true)}
                  className="items-center flex gap-2 px-5 md:mt-o md:h-12 h-9  md:text-md text-sm md:hidden   bg-amazon_light text-white  rounded-md shadow-lg hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105 focus:outline-none"
                >
                  <GiShoppingCart className="text-lg" />
               Buy  Now
                </button>
              </>
            ) : (
              <button className="items-center flex gap-2 px-5 md:mt-o md:h-12 h-9  md:text-md text-sm  bg-red-400 text-white  rounded-md shadow-lg hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105 focus:outline-none">
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>

      <div>
        {isSharePopupOpen && (
          <div className="fixed inset-0 bg-black z-[900] bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <button
                onClick={() => setIsSharePopupOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                ✖
              </button>
              <h3 className="text-lg font-bold mb-4">Share this Product</h3>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white p-2 rounded-full">
                  <FacebookIcon size={32} round />
                </button>
                <button className="bg-blue-400 text-white p-2 rounded-full">
                  <TwitterIcon size={32} round />
                </button>
                <button className="bg-green-500 text-white p-2 rounded-full">
                  <WhatsappIcon size={32} round />
                </button>
                <button
                  onClick={copyLinkToClipboard}
                  className="flex items-center gap-3 py-2 px-6 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                >
                  <ClipboardIcon className="h-5" />
                  {isLinkCopied ? "Link Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative w-full    mt-10">
          <TabComponent no_title={true} tabs={tabDataa} />
        </div>
        <div>
          <p className="text-black my-3"><span className="font-bold">SKU:</span> {(product as any)?.sku} </p>
        </div>
        <RelatedProduct title="Related Products" data={relatedProduct} />
      </Suspense>
    </div>
  ) : (
    <ProductDetailSkeleton />
  );
};

export default Detail;

const tableData = (product) => {
  return [
    {
      id: 5,
      label: "Descriptions",
      content: <Description description={product.description} />,
    },
    {
      id: 4,
      label: "Specifications",
      content: (
        <SpecificationsComponent Specification={product?.specification} />
      ),
    },

    {
      id: 3,
      label: "Demo video",
      content: <Demmovideo demovideo={product?.demo_video} installationVideo={product?.installation_video} />,
    },
    {
      id: 2,
      label: "Review",
      content: <ReviewForm />,
    },
  ];
};
