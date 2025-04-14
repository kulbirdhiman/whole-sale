import React from "react";

const WarrantyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-black bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Limited Warranty Against Defects</h1>
      <p className="text-gray-700">
        This document outlines the terms and conditions of the <strong>Limited Warranty Against Defects</strong> for goods manufactured and sold by <strong>The Trustee for Green Locals Australia Trust</strong>, trading as <strong>Kayhan Audio</strong> (ABN: <strong>51 799 255 761</strong>).
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Australian Consumer Law (ACL) Compliance</h2>
      <p className="text-gray-700">
        Our products come with guarantees that <strong>cannot be excluded</strong> under <strong>Australian Consumer Law (ACL)</strong>. You are entitled to:
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>A <strong>replacement or refund</strong> in the case of a major failure.</li>
        <li>Compensation for any other <strong>reasonably foreseeable loss or damage</strong> caused by the defect.</li>
        <li>A <strong>repair or replacement</strong> if the product is faulty but does not have a major failure.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. Warranty Coverage</h2>
      <p className="text-gray-700">
        This <strong>12-month limited warranty</strong> covers all Kayhan Audio products, provided they were purchased directly from Kayhan Audio or an <strong>authorised reseller</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-6">3. Exclusions (What is NOT Covered)</h2>
      <p className="text-gray-700">This warranty <strong>does not</strong> cover defects or damage caused by:</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Incorrect or improper installation.</li>
        <li>Power supply issues.</li>
        <li>Misuse, abuse, or modifications.</li>
        <li>Improper storage or handling.</li>
        <li>Water damage or extreme environmental exposure.</li>
      </ul>
      <p className="text-gray-700 mt-2"><strong>Installation Costs:</strong> Kayhan Audio does <strong>not</strong> cover additional installation costs.</p>

      <h2 className="text-xl font-semibold mt-6">4. How to Make a Warranty Claim</h2>
      <p className="text-gray-700">To make a claim, contact us with:</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>A detailed description of the issue.</li>
        <li>Clear images or videos showing the defect.</li>
        <li>Proof of purchase.</li>
      </ul>
      <p className="text-gray-700">Contact us at:</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li><strong>Email:</strong> <a href="mailto:info@kayhanaudio.com.au" className="text-blue-500">info@kayhanaudio.com.au</a></li>
        <li><strong>Phone:</strong> 1300 696 488</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">5. No Other Warranties</h2>
      <p className="text-gray-700">This document contains the <strong>only warranties</strong> we provide. To the fullest extent permitted by law, all <strong>implied warranties are excluded</strong>.</p>

      <h2 className="text-xl font-semibold mt-6">6. Limitation of Liability</h2>
      <p className="text-gray-700">Kayhan Audio’s liability is <strong>limited</strong> to the repair, replacement, or refund of the defective product.</p>

      <h2 className="text-xl font-semibold mt-6">7. Governing Law & Jurisdiction</h2>
      <p className="text-gray-700">This warranty is governed by the laws of <strong>Victoria, Australia</strong>. Any disputes will be handled <strong>exclusively in Victoria</strong>.</p>

      <h2 className="text-xl font-semibold mt-6">Need Help? Contact Us!</h2>
      <p className="text-gray-700">For any warranty-related concerns:</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li><strong>Email:</strong> <a href="mailto:info@kayhanaudio.com.au" className="text-blue-500">info@kayhanaudio.com.au</a></li>
        <li><strong>Phone:</strong> 1300 696 488</li>
      </ul>
    </div>
  );
};

export default WarrantyPolicy;