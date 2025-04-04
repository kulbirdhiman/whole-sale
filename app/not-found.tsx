"use client"
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
export default function NotFound() {
  const [carDetails, setCarDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Car details submitted: ${carDetails}`);
    setCarDetails("");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
      {/* Animated Car Illustration */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        {/* <Image
        height={1000}
          width={1000}
        
          src="https://cdn-icons-png.flaticon.com/512/2913/2913136.png"
          alt="Car Not Found"
          className="w-32 md:w-40"
        /> */}
      </motion.div>

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gray-800"
      >
        No Suitable Product Found
      </motion.h1>
      <p className="mt-2 text-lg text-gray-600">
        Share your car details, and we'll assist you right away.
      </p>

      {/* Form to collect car details */}
      {/* <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-6 flex flex-col items-center space-y-4 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Enter your car details..."
          value={carDetails}
          onChange={(e) => setCarDetails(e.target.value)}
          className="w-full rounded-lg border border-gray-400 p-3 text-center outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700"
        >
          Submit
        </button>
      </motion.form> */}

      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-6 flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/contact"
          className="rounded-lg bg-gray-700 px-6 py-3 text-white font-semibold transition hover:bg-gray-800"
        >
          Contact Us
        </Link>
        <Link
          href="/product/list"
          className="rounded-lg bg-green-600 px-6 py-3 text-white font-semibold transition hover:bg-green-700"
        >
          Browse Products
        </Link>
      </motion.div>
    </div>
  );
}
