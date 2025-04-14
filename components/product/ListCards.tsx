"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getProductForShop } from "@/store/actions/admin/product";

import ProductCard from "@/components/product/Card";
import CardSkeleton from "@/components/product/CardSkelton";
import Pagination from "@/components/globals/Pagination";
import SideBar from "@/components/product/SideBar";
import ContactSupport from "@/components/home/ContactSupport";
import { FcClearFilters } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";

interface Product {
  id: string;
  [key: string]: any;
}

const ListCards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  const paramList = params?.slug as string[] || [];
  const company = paramList[0] || "";
  const model = paramList[1] || "";
  const year = paramList[2] || "";
  console.log(company,"this comaney key")
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [apiHit, setApiHit] = useState<boolean>(false);
  const [tableData, setTableData] = useState<Product[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [totalPage, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPagination, setShowPagination] = useState<number[]>([]);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const list = async (page: number, searchParams: URLSearchParams, search?: string) => {
    try {
      setApiHit(false);
      setCurrentPage(page);

      const category = searchParams.get("category");

      const data: Record<string, any> = {
        page,
        company,
        model,
        year,
        category,
        search: search || searchTerm,
        limit: 20,
      };

      if (minPrice) data.minPrice = minPrice;
      if (maxPrice) data.maxPrice = maxPrice;

      const res = await dispatch(getProductForShop(data)).unwrap();

      if (res.success) {
        setApiHit(true);
        setTableData((res.data as any).result);
        setTotalRecords(res.data.totalRecords);
        setTotalPages(res.data.totalPage);
        setShowPagination(res.data.showPagination);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    router.push(`/products/${company}/${model}/${year}`);
  };

  useEffect(() => {
    list(1, searchParams);
  }, [searchParams, minPrice, maxPrice]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      list(1, searchParams, searchTerm);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 py-4 bg-white relative">
        <SideBar
          list={list}
          showSideBar={showSideBar}
          setShowSideBar={() => setShowSideBar(!showSideBar)}
        />

        <div className="col-span-5 px-2">
          <div className="relative">
            <button
              onClick={() => setShowSideBar(!showSideBar)}
              className="absolute right-2 z-10 bg-blue-950 rounded-md gap-2 font-seri text-white flex sm:relative sm:left-[90%] sm:bottom-2 lg:hidden border border-blue-950 px-3 py-1"
            >
              <FcClearFilters /> Filter
            </button>
          </div>
          {(!apiHit || tableData.length > 0) && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
                {apiHit
                  ? tableData.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  : Array.from({ length: 20 }).map((_, index) => (
                      <CardSkeleton key={index} />
                    ))}
              </div>
              <Pagination
                totalRecords={totalRecords}
                totalPages={totalPage}
                currentPage={currentPage}
                setCurrentPage={(page: number) => list(page, searchParams)}
                limit={4}
                showPagination={showPagination}
                tableDataLength={tableData.length}
              />
            </>
          )}

          {apiHit && tableData.length === 0 && (
            <ContactSupport
              innerDivClass="flex flex-col justify-center text-center md:text-center px-6"
              containerClass="w-full flex flex-col sm:flex-col justify-around gap-8 bg-gray-50 shadow-lg rounded-xl p-8"
            />
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default ListCards;
