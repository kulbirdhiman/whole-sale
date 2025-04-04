"use client";
import { FcClearFilters } from "react-icons/fc";
import React, { useEffect, useState, Suspense } from "react";
import ProductCard from "./Card";
import { getProductForShop } from "@/store/actions/admin/product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import Pagination from "../globals/Pagination";
import CardSkeleton from "./CardSkelton";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { FaTimes } from "react-icons/fa";
import SideBar from "./SideBar";
import ContactSupport from "../home/ContactSupport";
const SearchParamsWrapper = ({ children }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

const ListCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const clearFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
  };
  const router = useRouter();
  const pathname = usePathname();

  const { company, model, year } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const [apiHit, setApiHit] = useState(false);
  const [tableData, setTableData] = useState<Record<string, any>[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPage, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState([]);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const list = async (page, params,search) => {
    try {
      setApiHit(false);
      setCurrentPage(page);

      // const company = params.get("company");
      // const model = params.get("model");
      const category = params.get("category");
      // const year = params.get("year");

      const data:any = {
        page, company, model, category, year,
      }
      if(search){
        data.search = search
      }
      const res = await dispatch(
        getProductForShop(data)
      ).unwrap();

      if (res.success) {
        setApiHit(true);
        setTableData(res?.data?.result);
        setTotalRecords(res.data.totalRecords);
        setShowPagination(res.data.showPagination);
        setTotalPages(res.data.totalPage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Suspense>
      <ListCardsContent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        clearFilters={clearFilters}
        list={list}
        tableData={tableData}
        totalRecords={totalRecords}
        totalPage={totalPage}
        currentPage={currentPage}
        apiHit={apiHit}
        showPagination={showPagination}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        pathname={pathname}
      />
    </Suspense>
  );
};

const ListCardsContent = ({
  searchTerm,
  setSearchTerm,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  clearFilters,
  list,
  tableData,
  totalRecords,
  totalPage,
  currentPage,
  apiHit,
  showPagination,
  showSideBar,
  setShowSideBar,
  pathname,
}) => {
  const params = useSearchParams();

  const router = useRouter();
  useEffect(() => {
    list(1, params);
  }, [params]);
  const { company, model, year } = useParams();
  // const company = params.get("company");
  // const model = params.get("model");
  const category = params.get("category");
  // const year = params.get("year");

  const removeFilter = (key) => {
    const paramss = new URLSearchParams(params);
    paramss.delete(key);
 
    router.push(`?${paramss.toString()}`);
  };
  const removeParams = (key: any) => {
    const pathSegments = pathname.split("/").filter(Boolean); // Get path parts

    // Find the index of the key in the path
    const keyIndex = pathSegments.indexOf(key);
 
    if (keyIndex !== -1) {
      // Remove the key and everything after it
      const newPath = `/${pathSegments.slice(0, keyIndex).join("/")}`;
      router.push(newPath);
    }
  };

  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 bg-white md:p-6 p-2 relative">
      <SideBar
      list={list}
        showSideBar={showSideBar}
        setShowSideBar={() => setShowSideBar(!showSideBar)}
      />
      <div className="col-span-5">
        <div className="">
          <div className="relative pb-7 mb-5 sm:mb-0 sm:pb-0">
            <button
              onClick={() => setShowSideBar(!showSideBar)}
              className=" absolute right-2 z-10 bg-blue-950 rounded-md gap-2 font-seri text-white flex sm:relative sm:left-[90%] sm:bottom-2  lg:hidden  border border-blue-950 px-3 py-1 "
              // className=" absolute right-2 bg-blue-950 rounded-md gap-2 font-seri text-white flex  sm:flex md:hidden  border border-blue-950 px-3 py-1 "
            >
              <FcClearFilters /> Filter
            </button>
          </div>
          {(company || model || category || year) && (
            <div className="flex gap-3 flex-wrap border-x-0 border bg-white my-2 p-2">
              {category && (
                <button
                  onClick={() => removeFilter("category")}
                  className="flex items-center px-3 py-1 bg-blue-950 rounded-full font-seri text-white"
                >
                  {category}
                  <FaTimes
                    size={16}
                    className="mx-2 text-white font-extralight"
                  />
                </button>
              )}
              {company && (
                <button className="flex items-center px-3 py-1 bg-blue-950 rounded-full font-seri text-white">
                  {company}
                  <FaTimes
                    onClick={() => removeParams(company)}
                    size={16}
                    className="mx-2 text-white font-extralight cursor-pointer"
                  />
                </button>
              )}
              {model && (
                <button
                  onClick={() => removeParams(model)}
                  className="flex items-center px-3 py-1 bg-blue-950 rounded-full font-seri text-white"
                >
                  {model}
                  <FaTimes
                    size={16}
                    className="mx-2 text-white font-extralight"
                  />
                </button>
              )}
              {year && (
                <button
                  onClick={() => removeParams(year)}
                  className="flex items-center px-3 py-1 bg-blue-950 rounded-full font-seri text-white"
                >
                  {year}
                  <FaTimes
                    size={16}
                    className="mx-2 text-white font-extralight"
                  />
                </button>
              )}

              {/* Mobile Filter Button - toggle sidebar */}
            </div>
          )}
        </div>

        {(!apiHit || tableData.length > 0) && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
              {apiHit
                ? tableData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                : Array.from({ length: 10 }).map((_, index) => (
                    <CardSkeleton key={index} />
                  ))}
            </div>

            <div>
              <Pagination
                totalRecords={totalRecords}
                totalPages={totalPage}
                currentPage={currentPage}
                setCurrentPage={(page) => list(page, params)}
                limit={4}
                showPagination={showPagination}
                tableDataLength={tableData.length}
              />
            </div>
          </>
        )}
        {apiHit && tableData.length == 0 && (
          <>
            <div>
              <ContactSupport
                innerDivClass={
                  "flex flex-col justify-center text-center md:text-center px-6"
                }
                containerClass={
                  "w-full flex flex-col sm:flex-col   justify-around gap-8 bg-gray-50 shadow-lg rounded-xl p-8"
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListCards;
