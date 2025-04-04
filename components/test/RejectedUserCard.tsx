import React from 'react'
import Image from 'next/image'
import { FaEye, FaTimes } from 'react-icons/fa'

const RejectedUserCard = () => {
  return (
    <div className='w-[49%] border border-gray-200 shadow-lg bg-white flex gap-5 rounded-xl overflow-hidden'>
      
      {/* Image Section */}
      <div className='w-[180px] h-[200px] flex-shrink-0 relative bg-gray-200'>
        <Image 
          src='/carplayp.png' 
          alt='Wholesale Image' 
          layout='fill' 
          objectFit='cover' 
          className='rounded-l-xl mix-blend-darken' 
        />
      </div>
      
      {/* Details Section */}
      <div className='flex-1 p-4 flex flex-col justify-between'>
        
        {/* Contact Info */}
        <div>
          <h1 className='text-2xl font-bold text-gray-800 font-serif'>Contact Name</h1>
          <p className='text-gray-600'><span className='font-semibold'>Business Trading Name:</span> XYZ Traders</p>
          <p className='text-gray-600'><span className='font-semibold'>Account Payable Email:</span> example@xyz.com</p>
          <p className='text-gray-600'><span className='font-semibold'>Website:</span> www.xyz.com</p>
          <p className='text-gray-600'><span className='font-semibold'>Address:</span> 123 Street, City</p>
        </div>

        {/* Rejection Reason */}
        <div className='bg-red-100 text-red-600 p-3 rounded-md mt-2'>
          <p className='font-semibold'>Reason for Rejection:</p>
          <p className='text-sm italic'>"Incomplete documents submitted."</p>
        </div>
        
        {/* Action Buttons */}
        <div className='flex gap-3 mt-3'>
          <button className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
            <FaEye className="w-4 h-4" /> View Details
          </button>
          <button className='flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition'>
            <FaTimes className="w-4 h-4" /> Remove
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default RejectedUserCard
