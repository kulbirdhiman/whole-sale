"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaMapMarkerAlt,
  FaCreditCard,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", icon: <FaTachometerAlt />, path: "dashboard" },
  { label: "Orders", icon: <FaClipboardList />, path: "orders" },
  { label: "Addresses", icon: <FaMapMarkerAlt />, path: "addresses" },
  { label: "Payment Methods", icon: <FaCreditCard />, path: "payment-methods" },
  { label: "Account Details", icon: <FaUser />, path: "details" },
  { label: "Log Out", icon: <FaSignOutAlt />, path: "logout" },
];

const WholeSaleSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-lg border-r min-h-screen overflow-hidden">
      {/* Profile Section */}
      <div className="p-6 border-b flex flex-col items-center text-center">
        {/* <img
          src="https://via.placeholder.com/80"
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-sm"
        /> */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800">Karan Dhiman</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
      </div>

      {/* Navigation */}
      <nav className="mt-4 overflow-y-auto max-h-[calc(100vh-150px)]">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={`${item.path}`}
            className={`flex items-center gap-3 px-6 py-4 transition-all
              ${
                pathname === item.path
                  ? "bg-gray-100 border-l-4 border-blue-600 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }
            `}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default WholeSaleSidebar;
