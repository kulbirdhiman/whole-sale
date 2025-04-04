"use client";

import { useState } from "react";
import WholeSaleSidebar from "@/components/wholesale/WholeSaleSideBar";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const WholeSaleLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex text-black min-h-screen bg-gray-100">
      {/* Sidebar for Larger Screens */}
      <aside className="hidden md:flex md:w-64 bg-white shadow-lg">
        <WholeSaleSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-4 md:px-6 lg:px-8">
        {/* Header (Mobile Only) */}
        <header className="md:hidden bg-white shadow-md p-3 flex items-center justify-between">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
          <h1 className="text-lg font-bold">Wholesale Dashboard</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 py-4">{children}</main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden flex flex-col`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto">
          <WholeSaleSidebar />
        </div>
      </aside>
    </div>
  );
};

export default WholeSaleLayout;
