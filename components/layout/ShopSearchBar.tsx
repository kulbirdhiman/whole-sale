import React, { useEffect, useState, useRef, useMemo } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getProductForShop } from "@/store/actions/admin/product";
import { XIcon } from "lucide-react";

interface Product {
  slug: string;
  name: string;
  discount_price: number;
  images: string;
}

interface BarProps {
  departments: any[];
}

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Books",
  "Toys",
  "Health & Beauty",
  "Others",
];

const SearchBar: React.FC<BarProps> = ({ departments }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [apiHit, setApiHit] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<any>({
    id: "is_all",
    name: "All",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const departmentPluse = useMemo(() => {
    return [{ id: "is_all", name: "All" }, ...departments];
  }, [departments]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const listProducts = async (input) => {
    try {
      setApiHit(false);
      let limit = 40;
      const data = {};
      const product_ids: any[] = [];

      if (input && input.length > 3 && totalRecords > limit) {
        limit = totalRecords;
      }
      if (selectedCategory.id != "is_all") {
        (data as any).category = selectedCategory.slug;
      }

      (data as any).search = input;
      const res = await dispatch(
        getProductForShop({
          ...data,
          limit: limit,
          product_ids: [...product_ids],
        })
      ).unwrap();

      if (res.success) {
        console.log(res.data);
        setApiHit(true);
        const option = res.data.result.map((row) => ({
          value: row.id,
          label: row.name,
          ...row,
        }));
        console.log(res.data.result);

        setProducts(res.data.result);

        if (res.data.totalRecords > totalRecords) {
          setTotalRecords(res.data.totalRecords);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
listProducts(search)
  },[search])

  return (
    <div className="relative flex flex-col items-center flex-grow">
      {/* Search Bar */}
      <div className="relative border border-gray-400 md:h-12 h-10 bg-white flex items-center justify-between flex-grow w-full shadow-md rounded-lg">
        {/* Category Dropdown (Hidden on Mobile) */}
        <button
          onClick={() => {
            setShowDropdown((prev) => !prev);
            setSearch("");
          }}
          className="focus:outline-none hidden md:flex items-center justify-center rounded-l-lg h-full text-black bg-gray-200 px-3 min-w-[50px]"
        >
          <span className="whitespace-nowrap">
            {(selectedCategory as any).name}
          </span>
          <ChevronDownIcon className="h-4 ml-1" />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 bg-white shadow-lg border rounded-md w-auto min-w-[150px] mt-1 z-50 hidden md:block"
          >
            {departmentPluse.map((category, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowDropdown(false);
                }}
                className="p-2 cursor-pointer hover:bg-gray-100 text-black text-sm whitespace-nowrap"
              >
                {category.name}
              </div>
            ))}
          </div>
        )}

        {/* Search Input (Rounded Left When 'All' is Hidden) */}
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log("e.target.value",e.target.value);
            
            // listProducts(e.target.value);
          }}
          type="text"
          className="outline-none text-sm text-black flex-grow px-3 h-full bg-white md:rounded-none rounded-l-lg"
          placeholder="Search for products..."
        />

        {/* Search Icon */}
       {
        !search ?
        <button className="focus:outline-none w-10 rounded-r-lg">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
      </button> :
         <button onClick={()=>{setSearch('')}} className="focus:outline-none w-10 rounded-r-lg">
         <XIcon className="h-6 w-6 text-gray-600" />
       </button>
       }
      </div>

      {/* Search Results Dropdown */}
      {search && (
  <div className="absolute scrollbar-minimized max-h-[80dvh] md:z-[900] z-[100000000] overflow-auto w-full top-8 md:top-14 bg-white shadow-lg border rounded-md mt-2">
    {!apiHit ? ( // Show loader when API call is in progress
      <div className="p-4 text-center text-gray-500">Loading...</div>
    ) : products.length > 0 ? (
      products.map((product, index) => (
        <Link
          key={index}
          href={`/product/${product.slug}`}
          onClick={() => setSearch("")}
          className="flex gap-4 text-black p-3 hover:bg-blue-500 hover:text-white transition duration-200"
        >
          <Image
            width={50}
            height={50}
            alt="Product Image"
            src={product.images[0].image.includes('http')  ?product.images[0].image : process.env.NEXT_PUBLIC_S3_IMG_URL +product.images[0].image  }
            className="h-12 w-auto rounded"
          />
          <div className="flex justify-between w-full items-center gap-6">
            <p className="font-semibold max-w-[350px]">{product.name}</p>
            <h1 className="font-bold">
              $
              {product.discount_price > 0
                ? product.discount_price
                : product.regular_price}
            </h1>
          </div>
        </Link>
      ))
    ) : (
      <div className="p-4 text-center text-gray-500">No products found</div>
    )}
  </div>
)}

    </div>
  );
};

export default SearchBar;
