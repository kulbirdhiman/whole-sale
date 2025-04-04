"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchBar from "./ShopSearchBar";

interface NavBarProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  departments:any[]
}

const ShopNavBar: React.FC<NavBarProps> = ({ open, setOpen,departments }) => {
  const router = useRouter();
  const { user } = useSelector((state: any) => state.auth);
  const { cartCount } = useSelector((state: any) => state.cart);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  return (
    <div className="w-full shadw-md">
      {/* Top Bar */}
      <div className="bg-00 hidden dark:bg-white text-black text-xs py-1 px-4 md:flex justify-between items-center borde border-gay-300">
        {/* <div className="flex gap-4">
          <a href="mailto:info@kayhanaudio.com.au" className="hover:text-gray-600"> info@kayhanaudio.com.au</a>
          <a href="tel:+611300696488" className="hover:text-gray-600">+61 1300 696 488</a>
        </div> */}
        <h4>Welcome to Kayhan Audio</h4>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-gray-600">About Us</Link>
          <Link href="/support" className="hover:text-gray-600">Support</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white  e text-amazon_blue">
        <nav className="flex items-center justify-between px-4 md:py-1 py-2 lg:px-8">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={120}
              height={75}
              className="md:w-[100px] w-[80px]"
            />
          </Link>

          {/* Search Bar Centered */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <SearchBar  departments={departments} />
          </div>

          {/* Icons */}
          <div className="flex  items-center gap-3">
            <button className="md:hidden" onClick={() => setFilterOpen(!filterOpen)}>
              <MagnifyingGlassIcon className="h-6 w-6 text-amazon_blue" />
            </button>
            <Link href="/shopping-cart" className="relative">
              <ShoppingCartIcon className="h-7 w-7 text-amazon_blue" />
              <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-xs text-white h-[18px] w-[18px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </Link>
            <Link href="/user/orders">
              <UserIcon className="h-6 w-6" />
            </Link>
            <button className="block md:hidden" onClick={() => setOpen?.(!open)}>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Animated Search Bar */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: filterOpen ? "auto" : 0, opacity: filterOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-"
        >
          <div className="px-4 pb-2">
            <SearchBar departments={departments} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShopNavBar;
