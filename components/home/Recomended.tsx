"use client";

import React, { useEffect, useState } from "react";
import RelatedProduct from "./RelatedProduct";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getRecomentProduct } from "@/store/actions/home";

const Recomended = () => {
  const [data, setData] = useState<any>([]);
  const [apiHit, setApiHit] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const list = async () => {
    try {
      const res = await dispatch(getRecomentProduct({})).unwrap();

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
    <div>
      <RelatedProduct
       data={data} 
       />
    </div>
  );
};

export default Recomended;
