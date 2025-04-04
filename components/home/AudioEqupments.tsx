"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getAudioProduct } from "@/store/actions/home";
import ProductSkeleton from "../skeleton/ProductSkeleton";

const ProductSection = dynamic(() => import("./ProductSection"), { ssr: false });
const TabComponent = dynamic(() => import("../globals/TabComponent"), { ssr: false });

const AudioEqupments = () => {
  const [data, setData] = useState<any>({});
  const [apiHit, setApiHit] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const list = useCallback(async () => {
    try {
      const res = await dispatch(getAudioProduct({})).unwrap();
      if (res.success) {
        setApiHit(true);
        setData(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    list();
  }, [list]);

  const tabDataa = useMemo(() => [
    { id: 2, label: "Speaker's", content: <ProductSection data={data?.speakers} img={"/boofer.jpg"} /> },
    { id: 3, label: "SubWoofer's", content: <ProductSection data={data?.subBoofers} img={"/carplyyy.png"} /> },
    { id: 1, label: "Amplifier's", content: <ProductSection data={data?.amplifier} img={"/k_play.jpg"} /> },
    { id: 4, label: "SubBoofer Box's", content: <ProductSection data={data?.subBooferBox} img={"/boofer.jpg"} /> },
  ], [data]);

  return (
    <div className="min-h-[620px]"> {/* Prevents shifting */}
      {!apiHit ? <ProductSkeleton /> : <TabComponent title="Audio Equipments" tabs={tabDataa} />}
    </div>
  );
};

export default AudioEqupments;
