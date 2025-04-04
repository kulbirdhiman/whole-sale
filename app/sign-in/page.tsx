"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import LogIn from "@/components/auth/SignIn";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { USER_ROLE } from "../constants";
import { motion } from "framer-motion";

const SignIN = () => {
  const { loading, user } = useSelector((state: any) => state.auth);
  const router = useRouter()
  useEffect(() => {
    if (user && !loading) {
      if (user.role == USER_ROLE.frontend_user) {
        router.push('/user/orders')
      }
      if (user.role == USER_ROLE.admin) {
        router.push('/admin/orders/retail')
      }

    }
  }, [user, loading]);

  return (
    <section className="flex flex-col md:flex-row w-[100%] md:w-[80%] h-auto mx-auto mt-8 bg-white text-black p-6 shadow-lg rounded-lg">
      {/* Left Section - Signup Form */}

      {/* Right Section - Info & Map */}
      <div className="md:w-1/2 p-9">
        {/* <Image
          className="w-full h-full rounded-md shadow-lg"
          src="https://kayhanaudio.com.au/wp-content/uploads/2024/04/BMW-5-Series-2004-%E2%80%93-2010-11.jpg"
          width={1000}
          height={2000}
          alt="this is image"
        /> */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }} // Fade-in & slide-up
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          className="text-3xl font-bold text-center font-serif"
        >
          Welcome to Kayhan Audio
        </motion.h1>
 {/* <Image
          className="w-[240px] mx-auto h-[120px] rounded-md shadow-lg"
          src="/images/logo.webp"
          width={1000}
          height={2000}
          alt="this is image"
        /> */}
        <motion.p
          initial={{ opacity: 0 ,y:-200}}
          animate={{ opacity: 1 ,y:0}}
          transition={{ delay: 1, duration: 1 }} // Fade-in with delay
          className="text-center mt-[6rem]"
        >
          Your one-stop solution <br /> for premium car head units and accessories
        </motion.p>
      </div>
      <div className="md:w-1/2 p-6">
        <h1 className="text-4xl text-center mx-4 mb-3">Sign In</h1>
        <LogIn />
      </div>
    </section>
  );
};

export default SignIN;
