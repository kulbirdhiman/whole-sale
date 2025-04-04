import React from 'react';
import Image from 'next/image';
import { FaEye, FaTimes } from 'react-icons/fa';

const WholeSaleCard = () => {
  return (
    <div className='w-[49%] border border-gray-200   shadow-md bg-white flex gap-5'>
      {/* Image Section */}
      <div className='w-[200px] h-full flex-shrink-0 relative bg-gray-200'>
        <Image src='/carplayp.png' alt='Wholesale Image' layout='fill' objectFit='cover' className='rounded-lg mix-blend-darken' />
      </div>
      
      {/* Details Section */}
      <div className='flex-1 p-3 flex  justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800 font-serif my-2'>Contact Name</h1>
          <p className='text-gray-600'><span className='font-semibold'>Business Trading Name:</span> XYZ Traders</p>
          <p className='text-gray-600'><span className='font-semibold'>Account Payable Email:</span> example@xyz.com</p>
          <p className='text-gray-600'><span className='font-semibold'>Website:</span> www.xyz.com</p>
          <p className='text-gray-600'><span className='font-semibold'>Address:</span> 123 Street, City</p>
        </div>
        
        {/* Action Buttons */}
        <div className='flex gap-1'>
          <button className='flex items-center h-10 gap-2   text-black  rounded-lg transition-all'>
            <FaEye /> 
          </button>
          <button className='flex items-center h-10 gap-2   text-black px-4 py-2 rounded-lg transition-all'>
            <FaTimes /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default WholeSaleCard;