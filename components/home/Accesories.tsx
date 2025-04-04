"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBigRightDashIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getAccessoriesProduct } from "@/store/actions/home";
import Link from "next/link";
import AccSkeletonCard from "@/components/skeleton/AccessroisSkelton"
const Accessories = () => {
  const [data, setData] = useState<any>({});
  const [apiHit, setApiHit] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const list = async () => {
    try {
      const res = await dispatch(getAccessoriesProduct({})).unwrap();

      if (res.success) {
        setApiHit(true);
 
        setData(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    list();
  }, []);

  return (
    !apiHit ? 
    <div className="w-full mx-auto flex gap-4 flex-wrap justify-evenly p-3">
      <AccSkeletonCard />
      <AccSkeletonCard />
      <AccSkeletonCard />
      <AccSkeletonCard />
    </div>
    : (
      <div className="flex font-serif bg-gray-300 md:px-3 my-3 flex-wrap justify-around w-[100%] py-4 mx-auto">
        <Card type={"category"} data={data.acessories} title="Find your favourite accessories" />
        <Card type={"category"} data={data.batteries} title="Choose your car battery" />
        <Card type={"sub-category"} data={data.wiring_harness} title="Wiring harness ISO" />
        <Card type={"sub-category"} data={data.frames_and_fascia} title="Frames and fascias" />
      </div>
    )
  );
};

export default Accessories;

const Card = ({ type,data, title }) => {
  return (
    <div className="py-4 bg-white rounded-xl shadow-lg transition-transform transform   duration-300 ease-in-out mt-4 text-black w-[93%] md:w-[24%]">
      <div className="w-[90%] mx-auto">
        <p className="text-blue-600 text-lg font-semibold flex justify-between items-center pt-3">
          {title}{" "}
          <Link href= {type == 'category' ? `/products?${type}=${data?.detail?.slug}` : `/products/${data?.detail?.slug}`} className="text-gray-500">
            <ArrowBigRightDashIcon />
          </Link>
        </p>
        <div className="flex flex-wrap justify-between gap-2 mt-3">
          {/* {[  
            { img: "https://kayhanaudio.com.au/wp-content/uploads/2023/02/dashcam-scaled-1-1.jpg", label: "Dash Cam" },
            { img: "https://kayhanaudio.com.au/wp-content/uploads/2023/02/DVD-2.jpg", label: "Rear Entertainment" },
            { img: "https://kayhanaudio.com.au/wp-content/uploads/2023/02/BMW-5-Series-F10.jpg", label: "BMW Headunit" },
            { img: "https://kayhanaudio.com.au/wp-content/uploads/2023/02/mkiisz.jpg", label: "BMW Headunit" }
          ].map((item, index) => (
            <div key={index} className="w-[47%] bg-gray-100 rounded-lg shadow-md p-2 py-4 flex flex-col items-center hover:bg-gray-200 transition-all">
              <Image className="rounded-md" src={item.img} alt={item.label} width={130} height={200} />
              <p className="font-medium text-sm mt-2 text-center text-gray-700">{item.label}</p>
            </div>
          ))} */}
          {data.data.map((item, index) => (
            <Link
            href={`product/${item.slug}`}
              key={index}
              className="w-[47%] bg-gray-100 hover:scale-105 rounded-lg shadow-md p-2 py-4 flex flex-col items-center hover:bg-gray-200 transition-all"
            >
              <Image
                className="rounded-md h-[140px]"
                src={
                  item.images[0].image.includes("http")
                    ? item.images[0].image
                    : process.env.NEXT_PUBLIC_S3_IMG_URL + item.images[0].image
                }
                alt={item.label}
                width={130}
                height={200}
              />
              <p className="font-serif text-start text-sm mt-2 line-clamp-1  text-gray-700">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
