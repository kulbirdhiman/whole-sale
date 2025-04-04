"use client";
import Link from "next/link";
import React from "react";

const ReturnRefundPolicy = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 text-black py-12">
      <h1 className="text-4xl text-center font-bold mb-8">Return & Refund Policy</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Return Policy</h3>
        <p className="text-sm text-gray-600">Our return policy covers the following scenarios:</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Returns Due to Change of Mind</h3>
        <p className="text-sm text-gray-600 whitespace-pre-line">
          If you wish to return a product due to a change of mind, the following conditions must be met:
          - The return is initiated within *30 days from the delivery date*.
          - A *valid proof of purchase* is provided.
          - The item is returned *with the original receipt* issued at the time of purchase.
          - The item is in its *original, unopened, and resellable condition*.
          - The item is a *standard stock product* (custom-made products are *non-returnable*).
          
          💡 *Important:* To prevent fraudulent transactions, *change-of-mind returns may be limited to exchanges or store credit* instead of a full refund.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Returns of Faulty or Incorrect Goods</h3>
        <p className="text-sm text-gray-600 whitespace-pre-line">
          If you receive a faulty or incorrect item, you may be eligible for a *refund or exchange* under the following conditions:
          - The *wrong item* was received.
          - The item is *significantly different from the description or sample* displayed on our website.
          - The item has a *manufacturer defect* that would have stopped you from purchasing it if known beforehand.
          
          🔹 *For warranty-related claims, please refer to our* <Link className="text-blue-600 font-bold underline" href="/limited-warranty">Limited Warranty Policy</Link>
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Refund Policy</h3>
        <p className="text-sm text-gray-600 whitespace-pre-line">
          Once we receive and inspect your returned item, we will process your refund within *3-5 business days*. The refund will be credited back to your original payment method (e.g., Afterpay, Credit Card, etc.).
          
          To be eligible for a refund, you must:
          - *Follow our return process*, including providing tracking information for the returned item.
          - *Submit relevant images and details* of the faulty item as required (as outlined in Clause 5 of our Terms and Conditions).
          
          🚨 *Failure to follow these guidelines may result in a partial refund or no refund at our discretion.*
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Restocking Fee for Change of Mind Returns</h3>
        <p className="text-sm text-gray-600">
          - A *25% restocking fee* (or more) may apply to *change-of-mind returns*.
          - The refund amount will be adjusted after deducting the applicable restocking fee.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusions</h3>
        <p className="text-sm text-gray-600 whitespace-pre-line">
          Refunds, replacements, or repairs *may not be offered* if:
          ❌ The product has been *substantially modified* after purchase.
          ❌ The product has been *misused*, contrary to the manufacturer’s instructions.
          ❌ The return request is made *beyond the 30-day return period* for change-of-mind returns.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Need Assistance?</h3>
        <p className="text-sm text-gray-600 whitespace-pre-line">
          For any questions or further assistance, please contact our *Customer Care Team* at *1300 696 488*. Our team is happy to help with any concerns regarding returns or refunds.
          
          Thank you for choosing Kayhan Audio! 🎧🚗
        </p>
      </div>
    </section>
  );
};

export default ReturnRefundPolicy;