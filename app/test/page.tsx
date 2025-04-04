// "use client";
// import { useState } from "react";
// import OtpModal from "@/components/auth/OtpModel";

// export default function ForgotPasswordInput() {
//   const [email, setEmail] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 px-4">
//       {/* Email Form */}
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[30rem]">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
//           Forgot Password?
//         </h2>
//         <p className="text-gray-500 text-sm text-center mb-4">
//           Enter your email to receive a reset link.
//         </p>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <button
//           onClick={handleSubmit}
//           className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//         >
//           Submit
//         </button>
 
//         {showPassword && (
//           <>
//             <input
//               type="password"
//               placeholder="New Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <button
//               className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
//             >
//               Reset Password
//             </button>
//           </>
//         )}
//       </div>

//       {/* OTP Modal */}
//       {/* <OtpModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         email={email}
       
//       /> */}
//     </div>
//   );
// }
// //  import WarrantyPolicy from "../limited-warranty/page";

// // import WarrantyReg from "@/components/test/test"
// //  import React from 'react'
 
// //  const page = () => {
// //    return (
// //      <div>
// //         <div className="w-1/2">
// //         <WarrantyReg />
// //         </div>
// //      </div>
// //    )
// //  }
 
// //  export default page

import React from 'react'
import WholeSaleCard from '@/components/wholesale/WholeSaleCard'
import TabComponent from '@/components/globals/TabComponent'
import RejectedUserCard from '@/components/test/RejectedUserCard';
const page = () => {
    const tabDataa = [
  
      {
        id: 2,
        label: "user request",
        content: <WholeSaleCard  />, // Correct prop name 'products'
      },
      {
        id: 1,
        label: "reject user",
        content: <RejectedUserCard />, // Correct prop name 'products'
      },
      {
        label: "accpted user ",
        id: 3,
        content: <WholeSaleCard />, // Correct prop name 'products'
      },
     
    
    ];
  return (
   <div className='w-11/12 mx-auto'>
    {/* <h1 className='text-3xl text-black'>User Request</h1> */}
     <div className=' text-black mx-auto my-3 flex flex-wrap gap-2'>
     <TabComponent title="" tabs={tabDataa} buttonClass="text-black rounded-md bg-gray-400 py-2 px-3  text-xl" TabClass="flex gap-2" />
      {/* <WholeSaleCard />
      <WholeSaleCard />
      <WholeSaleCard />
      <WholeSaleCard /> */}

      </div>
   </div>
  )
}

export default page