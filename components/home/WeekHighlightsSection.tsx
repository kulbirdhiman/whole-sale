"use client";
import React, { useEffect, useState } from "react";
 import TabComponent from "../globals/TabComponent";
import {  getWeeklyHighlights } from "@/store/actions/home";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import {WeekHighlights}  from "./WeekHighlights";
import TabComponentSkelton from "../skeleton/TabComponentSkelton";
const WeekHighlightsSection = () => {
  const [data, setData] = useState<any>({});
  const [apiHit, setApiHit] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const list = async () => {
    try {
      const res = await dispatch(getWeeklyHighlights({})).unwrap();

      if (res.success) {
        console.log("res.data.result", res?.data?.result);

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
  const tabDataa = [

    {
      id: 2,
      label: " Android stereo's",
      content: <WeekHighlights products={data?.android} img={"/boofer.jpg"} />, // Correct prop name 'products'
    },
    {
      id: 1,
      label: "Linux headunit's",
      content: <WeekHighlights products={data?.linux} img={"/k_play.jpg"} />, // Correct prop name 'products'
    },
    {
      label: "Carplay Module's ",
      id: 3,
      content: <WeekHighlights products={data?.car_play} img={"/carplyyy.png"} />, // Correct prop name 'products'
    },
   
  
  ];

  return (
    <>
      {
        !apiHit ?
         <div>
         <div className="-mt-4">
         <TabComponentSkelton />
         </div>
          {/* <ProductSkeleton /> */}
          <div className="grid  -mt-6  dark:text-black grid-cols-1 md:grid-cols-2 gap-8 md:px-6 px-4 py-6">
  {/* Main Product Skeleton */}
  <div className="flex flex-col items-center justify-center bg-gray-300 rounded-2xl p-4 md:p-[3rem] shadow-lg group relative border border-gray-200 h-full animate-pulse">
    <div className="w-full h-60 md:h-[33rem] bg-gray-400 rounded-lg"></div>
    <div className="mt-4 w-32 md:w-40 h-6 bg-gray-400 rounded"></div>
    <div className="mt-4 w-32 md:w-40 h-10 bg-gray-500 rounded"></div>
  </div>

  {/* Sub Products Skeleton */}
  <div className="grid mt-2 sm:mt-0 grid-cols-2 gap-5 md:gap-6">
    {Array(4)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 rounded-2xl p-3 md:p-4 shadow-md group border border-gray-200 animate-pulse"
        >
          <div className="h-40 md:h-48 w-full bg-gray-400 rounded-lg"></div>
          <div className="mt-3 w-28 md:w-32 h-5 bg-gray-400 rounded mx-auto"></div>
          <div className="mt-3 w-full h-10 bg-gray-500 rounded"></div>
        </div>
      ))}
  </div>
</div>

        </div> :
          <div>
            {" "}
            <TabComponent title="This Week's Highlights" tabs={tabDataa} />   
          </div>
      }
    </>
  );
};

export default WeekHighlightsSection;
