import React from "react";
import Image from "next/image";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
const CustSev = () => {
  return (
    <>
      <section className="w-[80%] mx-auto p-3 text-black">
        <h1 className="text-3xl text-center font-mono ">Customer services</h1>
        {/* main */}
        <div className="flex mt-8">
          <div className="xl:w-1/2 ">
            <h3 className="font-bold mt-4">Check Order Status</h3>
            <p className="text-xs">
              Concerned about your order status? No need to worry. You can track
              your order live. We provide a tracking number (Order ID)
              immediately after you place an order. Simply enter this number on
              our “Track your Order” page to see the current location of your
              order.
            </p>
            <h3 className="font-bold mt-4">Our Commitment to Improvement</h3>
            <p className="text-xs">
              We are constantly learning from our mistakes and implementing new
              strategies to ensure our beloved customers face no difficulties.
              Here are some foundational aspects of our customer service that we
              believe you will appreciate:
            </p>
            <h3 className="font-bold mt-4">Dedicated Team</h3>
            <p className="text-xs">
              Our customer service team is committed, skilled, and empathetic.
              We believe in the power of direct interaction, setting up
              dedicated teams to ensure immediate responses to your queries
            </p>
            <h3 className="font-bold mt-4">Our Customer Service Approach</h3>
            <p className="text-xs">
              Our customer service strategy is centered around actively
              listening to our customers’ problems and providing instant
              solutions, without compromise.
            </p>
            <h3 className="font-bold mt-4">Human-Centric Responses</h3>
            <p className="text-xs">
              Our customer service strategy is centered around actively
              listening to our customers’ problems and providing instant
              solutions, without compromise.
            </p>
            <h3 className="font-bold mt-4">Self-Help Options</h3>
            <p className="text-xs">
              For situations where immediate live support isn’t available, we
              have established a dedicated “Help” page featuring frequently
              asked questions. This allows you to quickly find answers on your
              own, ensuring that most issues can be resolved without delay. We
              regularly update this page to keep the solutions relevant and
              timely.
            </p>
          </div>
          <Image
            className="hidden xl:block xl:w-1/2 h-[30rem]  rounded-md "
            src="/images/support.png"
            alt="Kayhan Audio introduction"
            width={800}
            height={350}
          />
        </div>
        <h3 className="font-bold mt-4">Clear Communication</h3>
        <p className="text-xs">
          We believe in transparent and clear communication. Should a customer
          encounter an issue that may take time to resolve, our representatives
          will clearly explain the situation and provide a realistic timeframe
          for resolution, avoiding any false promises.
        </p>
        <h3 className="font-bold mt-4">Open Feedback</h3>
        <p className="text-xs">
          We welcome all types of feedback, both positive and negative. We
          particularly focus on negative feedback, addressing it immediately to
          improve our services. We encourage our customers to share their
          experiences and suggestions to help us enhance our strengths and
          address our weaknesses.
        </p>
        <h3 className="font-bold mt-4">A Complete Shopping Experience</h3>
        <h3 className="font-semibold text-sm ">Seamless Online Shopping</h3>
        <p className="text-xs">
          We recognize the differences between online and offline shopping
          experiences. To ensure a seamless online experience, we have designed
          an intuitive product categorization, a simple checkout process, and
          support for widely accepted payment methods.
        </p>
        <h3 className="font-semibold text-sm mt-3">Post-Purchase Support</h3>
        <p className="text-xs">
          Our commitment extends beyond the sale. Should you receive a wrong or
          damaged product, you have the full freedom to return it. Visit our
          <Link className="text-blue-600 underline" href="/term-condtion">“Terms and Conditions”</Link> page to understand our policies and our “Return
          Registration” for the process of returning your product.
        </p>
        <h3 className="font-bold mt-4">Secure Shopping</h3>
        <p className="text-xs">
          Given the prevalence of online fraud, we understand the importance of
          secure transactions. Our platform uses advanced, secure payment
          gateways, ensuring that your payment details are never stored. Shop
          with confidence at Kayhan Audio.
        </p>
        <div className="flex gap-2 py-3 text-lg">
          <h1 className="font-bold">Social Media :</h1>
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
          <Link href="https://www.youtube.com/@KAYHANAUDIO">
            <FaYoutube className="text-red-500 hover:scale-110 transition-transform" />
          </Link>
          {/* <Link href="#">
            <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform" />
          </Link> */}
        </div>
      </section>
    </>
  );
};

export default CustSev;
