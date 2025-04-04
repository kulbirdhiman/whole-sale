"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCheck, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-8/12 m-6 border shadow-md mx-auto text-black p-7 bg-gray-100">
            <div className="flex flex-wrap justify-between items-start gap-6">
                {/* Left Side: Business Info */}
                <div className="flex-1 font-serif flex flex-col gap-3">
                    <h1 className="text-4xl font-bold text-gray-900">Karan Dhiman</h1>
                    <div className="bg-gray-100 p-4 flex flex-col gap-3 rounded-lg">
                        <p className="text-gray-700"><span className="font-semibold">Business Trading Name:</span> XYZ Pvt Ltd</p>
                        <p className="text-gray-700"><span className="font-semibold">ABN/ACN:</span> 123456789</p>
                        <p className="text-gray-700"><span className="font-semibold">Address:</span> Sydney, Australia</p>
                        <p className="text-gray-700"><span className="font-semibold">Account Payable Email:</span> contact@xyz.com</p>
                        <p className="text-gray-700"><span className="font-semibold">Website:</span> www.xyz.com</p>
                    </div>
                </div>

                {/* Right Side: Profile Image */}
                <div className="w-[500px] shadow-lg overflow-hidden">
                    <Image src="/banner.webp" alt="Profile" width={300} height={400} className="w-full h-[300px] object-cover" />
                </div>
            </div>

            {/* Social Media & Company Info */}
            <div className="flex flex-wrap justify-between items-start gap-6">
                {/* Social Media Section */}
                <div className="flex-1 text-xs font-serif flex flex-col gap-4 bg-gray-100 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold underline text-gray-900">Social Media</h1>
                    <div className="grid grid-cols-2 gap-3">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
                            <FaFacebookF className="w-5 h-5 text-blue-600" /> Karan Dhiman
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-400 transition">
                            <FaTwitter className="w-5 h-5 text-blue-400" /> @karandhiman
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition">
                            <FaLinkedinIn className="w-5 h-5 text-blue-700" /> Karan Dhiman
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
                            <FaInstagram className="w-5 h-5 text-pink-500" /> @karandhiman
                        </a>
                    </div>
                </div>

                {/* Company Revenue Section */}
                <div className="w-[500px] bg-gray-100 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold font-serif text-gray-900 mb-3">About the Company Revenue</h1>
                    <p className="text-gray-700 my-2"><span className="font-semibold">Number of Employees:</span> 50+</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Ebay & Other Platforms:</span> Yes</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Current Sales Methods:</span> Online & Retail</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
                <button className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                    <FaCheck className="w-4 h-4" /> Accept
                </button>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300">
                    <FaTimes className="w-4 h-4" /> Reject
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
               <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
               <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.8 }}
                   className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md text-center"
               >
                   {/* Modal Header */}
                   <div className="flex items-center justify-between border-b pb-3 mb-4">
                       <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                           <FaTimes className="text-red-600 w-5 h-5" /> Reject Confirmation
                       </h2>
                       <button 
                           onClick={() => setIsModalOpen(false)} 
                           className="text-gray-500 hover:text-gray-700 transition"
                       >
                           ✖
                       </button>
                   </div>
           
                   {/* Input Field */}
                   <p className="text-gray-600 mb-3">Please provide a reason for rejection:</p>
                   <input 
                       type="text" 
                       placeholder="Enter your reason..." 
                       className="border w-full p-3 rounded-lg shadow-sm focus:ring focus:ring-red-200 transition"
                   />
           
                   {/* Buttons */}
                   <div className="flex justify-center gap-4 mt-5">
                       <button 
                           onClick={() => setIsModalOpen(false)} 
                           className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                       >
                           Cancel
                       </button>
                       <button 
                           onClick={() => setIsModalOpen(false)} 
                           className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                       >
                           Confirm Reject
                       </button>
                   </div>
               </motion.div>
           </div>
           
            )}
        </div>
    );
};

export default Page;
