"use client";
import React from "react";
import { MdDashboard, MdAddShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { SlRefresh } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/actions/auth";
import { AppDispatch } from "@/store/store";
// import { logoutUser } from '@/store/api/dashboard';
// import { toast } from "react-toastify";
// import { logoutUser } from "@/store/action/auth";

const UserMenu = () => {
  const items = [
    {
      name: "Dashboard",
      icon: MdDashboard,
      url: "/user/dashboard",
    },
    {
      name: "orders",
      icon: MdAddShoppingCart,
      url: "/user/orders",
    },
    // {
    //   name: "wishlist",
    //   icon: FaHeart,
    //   url: "/user/wishlist",
    // },
    // {
    //   name: "replace & return",
    //   icon: SlRefresh,
    //   url: "/user/return-and-replace",
    // },
    {
      name: "address",
      icon: CiLocationOn,
      url: "/user/addresses",
    },
    {
      name: "account details",
      icon: IoPersonOutline,
      url: "/user/profile",
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const logoutHandler = async () => {
    const response = await dispatch(logoutUser());
    const res = response.payload;
    if ((res as any)?.status) {
      router.push("/");
    //   toast.success(res.message);
    } else {
    //   toast.error(res.message);
    }
  };
  return (
    <div
      className="min-h-[310px] rounded-t-lg md:rounded-r-none md:rounded-l-lg text-white flex flex-col w-full md:w-64 
         bbg-[#EAEAD3]
        bg-[#2A2E35]
        p-3 gap-1 h-[310px] "
    >
      {items.map((item, index) => {
        return (
          <Link key={index} href={item.url}>
            <div
              className={`p-2 pl-3 rounded-3xl flex gap-2 items-center hover:bg-blue_flip hover:text-white ${
                pathname.split(item.url).length > 1
                  ? "bg-blue_flip text-white"
                  : ""
              }`}
            >
              <item.icon className="text-lg" />
              <p className="uppercase text-sm">{item.name}</p>
            </div>
          </Link>
        );
      })}
      <div
        className={`p-2 pl-3 rounded-3xl flex gap-2 items-center hover:bg-blue_flip hover:text-white cursor-pointer`}
        onClick={logoutHandler}
      >
        <LuLogOut className="text-lg" />
        <p className="uppercase text-sm">Logout</p>
      </div>
    </div>
  );
};

export default UserMenu;
