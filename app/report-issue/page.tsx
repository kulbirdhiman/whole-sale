import Link from "next/link";
import React from "react";
import Section from "@/components/footer/Section";
const ReportIssue = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 space-y-8 bg-gray-50">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Report an Issue
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        At Kayhan Audio, we are committed to providing high-quality products and
        excellent customer service. If you encounter any issues with your order,
        product, or delivery, please follow the steps below to report the issue
        and receive assistance.
      </p>

      {/* Sections */}
      <div className="space-y-6">
        {/* Section 1 - Types of Issues */}
        <Section title="1. Types of Issues You Can Report">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Order Problems:</strong> Incorrect items, missing
              products, or order discrepancies.
            </li>
            <li>
              <strong>Shipping & Delivery Issues:</strong> Delayed, lost, or
              damaged shipments.
            </li>
            <li>
              <strong>Product Defects:</strong> Faulty or malfunctioning
              products covered under warranty.
            </li>
            <li>
              <strong>Installation & Usage Concerns:</strong> Assistance
              required for installation or product functionality.
            </li>
          </ul>
        </Section>

        {/* Section 2 - How to Report */}
        <Section title="2. How to Report an Issue">
          <p>To ensure a quick resolution, please follow these steps:</p>

          {/* Step 1 */}
          <div className="mt-4">
            <h3 className="font-semibold">
              Step 1: Gather Required Information
            </h3>
            <p>Before reporting an issue, have the following details ready:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>✅ Order Number (found in your confirmation email)</li>
              <li>✅ Product Name & Model</li>
              <li>✅ Description of the Issue</li>
              <li>
                ✅ Photos or Videos (if applicable, especially for product
                defects or damaged shipments)
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="mt-4">
            <h3 className="font-semibold">Step 2: Contact Our Support Team</h3>
            <p>You can report an issue through any of the following methods:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                📧 <strong>Email Us:</strong>{" "}
                <a
                  href="mailto:info@kayhanaudio.com.au"
                  className="text-blue-600 underline"
                >
                  info@kayhanaudio.com.au
                </a>{" "}
                (Include all required details and attachments)
              </li>
              <li>
                📞 <strong>Call Us:</strong> 1300 696 488 (Monday–Friday, 9 AM –
                5 PM AEST)
              </li>
              <li>
                📍 <strong>Visit Us:</strong> Unit 3, 151 Dohertys Rd, Laverton
                North, Melbourne, VIC 3026, Australia
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="mt-4">
            <h3 className="font-semibold">Step 3: Resolution Process</h3>
            <p>Here’s what to expect after reporting your issue:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Acknowledgment:</strong> Our team will review your
                request and respond within 1-2 business days.
              </li>
              <li>
                <strong>Investigation:</strong> We may request additional
                information or inspection, depending on the issue.
              </li>
              <li>
                <strong>Resolution:</strong> Based on our findings, we will
                offer an appropriate solution, which may include a replacement,
                refund, or further assistance.
              </li>
            </ul>
          </div>
        </Section>

        {/* Section 3 - Important Notes */}
        <Section title="3. Important Notes">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Issues must be reported within <strong>30 days</strong> of
              delivery for standard concerns.
            </li>
            <li>
              For warranty-related issues, refer to our{" "}
              <Link href="/limited-warranty" className="text-blue-600 underline">
                Limited Warranty Policy
              </Link>
              .
            </li>
            <li>
              We do not cover additional costs for third-party installation
              services if a product is found to be faulty.
            </li>
          </ul>
        </Section>

        {/* Contact Info Section */}
        <Section title="Contact Us for Further Assistance">
          <p>
            If you have any further inquiries, feel free to reach out — we’re
            here to help!
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              📞
              <a
                href="tel:1300696488"
                className="text-blue-600 hover:underline"
              >
                1300 696 488
              </a>
            </li>
            <li>
              📧
              <a
                href="mailto:info@kayhanaudio.com.au"
                className="text-blue-600 hover:underline"
              >
                info@kayhanaudio.com.au
              </a>
            </li>

            <li>
              <strong>Visit Us:</strong> Unit 3, 151 Dohertys Rd, Laverton
              North, Melbourne, VIC 3026, Australia
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

// Reusable Section Component with hover animation


export default ReportIssue;
