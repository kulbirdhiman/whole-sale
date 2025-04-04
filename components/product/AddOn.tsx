import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { AppDirModules } from "next/dist/build/webpack/loaders/next-app-loader";
import { AppDispatch } from "@/store/store";
import { checkVariations } from "@/store/actions/admin/variation";
import VariationsForAddOn from "./VariationsForAddOn";
import { IN_STOCK } from "@/app/constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const AddOn = ({ extras = [], setAddOns, addOns }) => {
  const [errors, setErrors] = useState({});
  const [variationData, setVariationData] = useState([]);
  const [variation, setVariation] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentData,setCurrentData] = useState({})

  const dispatch = useDispatch<AppDispatch>();

  

  const handleCheckboxChange = async (data) => {
    console.log(data);
    setCurrentData(data)
    if (!addOns.some((r) => r.id == data.id)) {
      const checkData = await checkVariationData(data);
      if (checkData && (checkData as any).length > 0) {
        return;
      }
    }
 
 

    // if (option.in_stock !== IN_STOCK) return;
    setAddOns((prev) => {
      if (prev.some((r) => r.id == data.id)) {
        return prev.filter((item) => item.id !== data.id);
      } else {
        return [...prev, { ...data, quantity: 1,variations:variation, product_id: data.id }];
      }
    });
    setVariation([])
  };

  const checkVariationData = async (data) => {
    console.log(data);
    
    const variations = await dispatch(
      checkVariations({
        product_id: data.id,
        department_id: data.department_id,
        category_id: data.category_id,
        variation_ids:variation.map((r)=>(r as any).id)
      })
    );
    console.log((variations.payload as any).data.variation);
    if ((variations.payload as any).data.variation.length > 0) {
      setVariationData((variations.payload as any).data.variation);
      setIsOpen(true);
      return (variations.payload as any).data.variation;
    }
  };

  const addOnVariations = useMemo(() => {
    return variation;
  }, [variation]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-lg bg-white m-0 p-0"></div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1210,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 618,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };
  

  return (
    <>
      <div className="dark:text-black border-y-2 p-2">
        <h1 className="font-bold text-xl">Add On</h1>
        <VariationsForAddOn
        setErrors={setErrors}
        currentData={currentData}
        handleCheckboxChange={handleCheckboxChange}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          errors={errors}
          setVariation={setVariation}
          variation={variation}
          variationData={variationData}
        />
        <div className="relative w-full">
          <div className="slider-container px-5 md:w-full mx-auto">
            <Slider {...settings}>
              {extras.map((product, index) => (
                <div key={index} className="">
                  <div className="w-[130px] p-3 flex flex-col justify-between rounded-xl relative">
                    <Image
                      src={(product as any).images[0].image.includes('http') ?(product as any).images[0].image : process.env.NEXT_PUBLIC_S3_IMG_URL +(product as any).images[0].image }
                      alt={(product as any).name}
                      width={500}
                      height={200}
                      className="w-full h-[110px] object-contain mb-4"
                    />
                    <p className="text-center line-clamp-2 h-10 font-avenir-light text-sm">
                      {(product as any).name}
                    </p>
                    <h1 className="text-base font-avenir-bold mb-1 text-green-600">
                      $
                      {(product as any).wholesale_price
                        ? (product as any).wholesale_price
                        : "--"}
                    </h1>
                    {(product as any).in_stock != IN_STOCK ? (
                      <p className="text-red-500 absolute right-0 top-[5px] font-bold text-sm text-center">
                        Out of Stock
                      </p>
                    ) : (
                      <input
                        disabled={(product as any).in_stock != IN_STOCK }
                        type="checkbox"
                        className="absolute h-4 w-4 right-0 top-[5px]"
                        checked={addOns.some(
                          (r) => r.id == (product as any).id
                        )}
                        onChange={() => handleCheckboxChange(product)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOn;
