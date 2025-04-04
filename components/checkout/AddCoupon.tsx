import React from "react";
import { FaTimes } from "react-icons/fa";

const AddCoupon = ({applyCouponF, isOpen, setIsOpen, couponCode, setCouponCode }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-96 relative">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
            Apply Coupon
          </h2>

          <input
            value={couponCode}
            onChange={(e) => {
              setCouponCode(e.target.value);
            }}
            type="text"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
            placeholder="Enter coupon code"
          />

          <button onClick={applyCouponF} className="w-full mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Apply Coupon
          </button>
        </div>
      </div>
    )
  );
};

export default AddCoupon;
