"use client";

import Table from "@/components/globals/Table";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  calculatePrice,
  calculateSubTotal,
  deleteCart,
  localCartData,
  myCart,
} from "@/store/actions/cart";
import DeleteModal from "@/components/globals/DeleteModel";
import { AppDispatch } from "@/store/store";
// import { Rowdies } from "next/font/google";
import { USER_ROLE } from "../constants";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  slug: string;
  images: string;
  is_free: number;
  name: string;
  price: number;
  discount_price: number;
  regular_price: number;
  quantity: number;
  cartID: string;
  variations: any;
}

const Page: React.FC = () => {
  const { cartCount } = useSelector((state: any) => state.cart);
  const { loading, user } = useSelector((state: any) => state.auth);
  const [data, setData] = useState<any>({ result: [] });
  const [apiHit, setApihit] = useState(false);
  const [delCart, setDelCart] = useState<CartItem | null>(null);
  const [open, setOpen] = useState(false);

  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>();

  const columns = [
    {
      title: "Image",
      key: "images",
      transform: (_: any, row: CartItem) => (
        <div className="relative flex justify-center text-center">
          <Image
            alt={row.name}
            // src={(row.images[0] as any).image}
            src={
              (row.images[0] as any).image.includes("http")
                ? (row.images[0] as any).image
                : process.env.NEXT_PUBLIC_S3_IMG_URL +
                  (row.images[0] as any).image
            }
            className="w-32"
            width={45}
            height={45}
          />
          {row.is_free === 1 && (
            <p className="absolute -rotate-45 left-[-10px] top-[-7px] px-2 py-1 text-sm rounded-lg bg-red-600 text-white">
              Free
            </p>
          )}
        </div>
      ),
    },
    {
      title: "Product",
      key: "name",
      transform: (value: string, row) => (
        <Link
          className="truncate max-w-[10px]"
          href={`/product/${(row as any).slug}`}
        >
          {value} 
          {/* {row.cart_id} */}
        </Link>
      ),
    },
    {
      title: "Variations",
      key: "variations",
      transform: (value) => (
        <div>
          {(value as any).length > 0
            ? (value as any).map((variation, index) => (
                <div key={index}>
                  <strong>{variation.name}:</strong>{" "}
                  {variation.options.map((op) => op.name).join(", ")}
                </div>
              ))
            : "-"}
        </div>
      ),
    },
    {
      title: "Product Price",
      key: "price",
      transform: (_: any, row: CartItem) => (
        <p>{row.discount_price > 0 ? row.discount_price : row.regular_price}</p>
      ),
    },
    {
      title: "Quantity",
      key: "quantity",
      btransform: (value: number, row: CartItem) =>
        row.is_free !== 1 ? (
          <div className="relative flex items-center max-w-[8rem] mx-auto border border-gray-500 bg-white">
            <button className="p-3 h-11 bg-white">-</button>
            <input
              value={value}
              type="text"
              className="h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[50px] py-2.5"
              readOnly
            />
            <button className="p-3 h-11 bg-white">+</button>
          </div>
        ) : (
          <p>1</p>
        ),
    },
    {
      title: "Total",
      key: "discount_price",
      transform: (value: number, row: CartItem) => <p>{calculatePrice(row)}</p>,
    },
    {
      title: "Action",
      key: "cartID",
      transform: (_: any, row: CartItem) =>
        row.is_free !== 1 && (
          <button
            onClick={() => {
              console.log("oo",row);
              
              setDelCart(row);
              setOpen(true);
            }}
          >
            <RiDeleteBin6Line className="text-xl font-bold" />
          </button>
        ),
    },
  ];

  const getMyCarts = async () => {
    try {
      if (user && !loading) {
        if(user.role == USER_ROLE.admin){
          // router.push('/sign-')
        }else{
          const apiResponse = await dispatch(myCart({}));
          const res = apiResponse.payload;
 
  
          setData(res);
        }
       
      } else {
        const t = localCartData();
        

        setData(t);
      }
      setApihit(true);
    } catch (error) {
      console.error("Error fetching cart data", error);
    }
  };

  const deleteCartF = async (item) => {
    try {
console.log(item);


      await dispatch(deleteCart({ ...item, id: item.id, cartCount }));
      setApihit(true);
      getMyCarts();
    } catch (error) {
      console.error("Error deleting cart item", error);
    }
  };

  const delCartF = () => {
    if (delCart) {
      deleteCartF(delCart);
      setOpen(false);
      setDelCart(null);
    }
  };

  useEffect(() => {
    getMyCarts();
  }, [user, loading]);

  return (
    <div className="w-11/12 mx-auto my-14">
      <h1 className="font-extrabold text-black text-3xl">Shopping Cart</h1>
      <div className="grid md:grid-cols-8 grid-cols-1 gap-4 mt-8">
        <div className="lg:col-span-6 col-span-5">
          <Table columns={columns} apiHit={apiHit} tableData={data.result} />
        </div>
        {data.result.length > 0 && (
          <div className="bg-[#F9F9F9] text-black h-[220px] p-5 lg:col-span-2 col-span-3 py-8">
            <h1 className="font-extrabold text-3xl">Cart Total</h1>
            <div className="flex justify-between my-5 text-lg font-bold">
              <h1 className="text-black" >Total</h1>
              <h1>{calculateSubTotal(data.result)}</h1>
            </div>
            <Link
              href="/checkout"
              className="bg-amazon_blue block text-white rounded-md text-center py-2 w-full"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
      <DeleteModal setOpen={setOpen} open={open} deleteRecord={delCartF} />
    </div>
  );
};

export default Page;
