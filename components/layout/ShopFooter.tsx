"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { SiAfterpay } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import Image from "next/image";

interface LinkItem {
  name: string;
  link: string;
}

const ShopFooter: React.FC = () => {
  const companyLinks: LinkItem[] = [
    { name: "About Us", link: "/about" },
    // { name: "Shop", link: "#" },
    { name: "Contact Us", link: "/contact" },
    { name: " Customer Services", link: "/customer-services" },
    // { name: "Affiliate Sign Up", link: "#" },
    // { name: "Affiliate Login", link: "#" },
    { name: "Become Our Authorised Wholesaler", link: "https://wholesale-kayhanaudio.com.au/" },
  ];

  const policyLinks: LinkItem[] = [
    { name: "Terms & Conditions", link: "/term-condtion" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Return Policy", link: "/return-policy" },
    { name: "Shipping & Delivery", link: "/shipping-policy" },
    { name: "Cancellation & Refunds", link: "cancellation-refunds" },
    { name: "Report an Issue", link: "/report-issue" },
    { name: "Request a Product", link: "/request-a-product" },
  ];

  return (
    <footer className="bg-gray-900 overflow-hidden text-white py-10">
      {/* Newsletter Section */}
      <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div className="md:col-span-2">
          <h4 className="text-2xl font-semibold">Join Our Newsletter</h4>
          <p className="text-gray-400 text-sm mt-2">
            Get exclusive offers & updates directly in your inbox.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto px-4 py-2 rounded-md text-gray-700 outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="w-11/12 max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Payments */}
        <div className="text-center md:text-left">
         <Link className="w-[150px] block mx-auto sm:mx-0" href="/">
         <Image
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/logo.png"
            height={80}
            width={120}
            alt="Company Logo"
            className="mx-auto md:mx-0"
          /></Link>
          <p className="text-sm text-gray-400 mt-3">Follow us for latest offers</p>
          <div className="flex justify-center md:justify-start gap-3 mt-3 text-xl">
          <div className="flex justify-center md:justify-start gap-4 text-xl mt-1">
            <Link
              href="https://www.facebook.com/KayhanAudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-500 hover:scale-110 transition-transform cursor-pointer" />
            </Link>

            <Link href="https://x.com/AudioKayhan" target="blank">
              <FaTwitter className="text-blue-400 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.instagram.com/kayhanaudio/" target="_blank">
              <FaInstagram className="text-pink-500 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.youtube.com/@KAYHANAUDIO" target="_blank">
              <FaYoutube className="text-red-500 hover:scale-110 transition-transform" />
            </Link>
            {/* <Link href="#">
            <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform" />
          </Link> */}
          </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h5 className="font-semibold">Company</h5>
            {companyLinks.map((item, index) => (
              <Link key={index} href={item.link} className="block text-sm text-gray-400 hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <h5 className="font-semibold">Policies</h5>
            {policyLinks.map((item, index) => (
              <Link key={index} href={item.link} className="block text-sm text-gray-400 hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>

        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h5 className="font-semibold">ABOUT US</h5>
          <p className="text-sm text-gray-400">Kayhan Audio is one of the fastest growing leading manufacturer and developer of car entertainment products. Founded in Germany in 1997.</p>
          {/* <p className="text-sm text-gray-400">100% Safe and secure payments</p> */}
          <div className="flex justify-center md:justify-start gap-4 text-xl mt-3">
            {/* <Link
              href="https://www.facebook.com/KayhanAudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-500 hover:scale-110 transition-transform cursor-pointer" />
            </Link>

            <Link href="https://x.com/AudioKayhan" target="blank">
              <FaTwitter className="text-blue-400 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.instagram.com/kayhanaudio/" target="_blank">
              <FaInstagram className="text-pink-500 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.youtube.com/@KAYHANAUDIO" target="_blank">
              <FaYoutube className="text-red-500 hover:scale-110 transition-transform" />
            </Link> */}
            {/* <Link href="#">
            <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform" />
          </Link> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pb-6 md:pb-0 text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
      <p>  &copy; {new Date().getFullYear()} Kayhan Audio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ShopFooter;
