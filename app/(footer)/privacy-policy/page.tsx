import React from "react";
import Image from "next/image";

const CustSev = () => {
  return (
    <section className="w-[90%] xl:w-[80%] mx-auto p-4 text-black">
      <h1 className="text-3xl text-center font-serif ">
        Privacy Policy
      </h1>

      {/* Main Section with Image */}
      <div className="flex flex-col xl:flex-row mt-8 gap-6">
        <div className="xl:w-1/2">
          <h3 className="font-bold mt-4">Introduction</h3>
          <p className="text-xs">
            This document sets out the privacy policy of the Trustee for Green Locals Australia Trust t/as Kayhan Audio (ABN: 51 799 255 761) (our, we, us). 
            We take our privacy obligations seriously and we’ve created this privacy policy to explain what and how we collect, use, share and store personal information on our website: www.kayhanaudio.com.au
          </p>
          <p className="text-xs mt-2">
            This Privacy Policy applies to products and services offered by the Kayhan Audio website. By using our services, you agree and consent to the collection, use, and disclosure of your information in connection with providing you with our services.
          </p>

          <h3 className="font-bold mt-4">Information we collect</h3>
          <p className="text-sm font-semibold">The information we collect consists of:</p>
          <ul className="text-xs space-y-1">
            <li>Name</li>
            <li>Mailing or street address</li>
            <li>Email address</li>
            <li>Social media information</li>
            <li>Telephone number and other contact details</li>
            <li>Date of birth</li>
            <li>Credit card or other payment information</li>
            <li>Information about your business or personal circumstances</li>
            <li>Information from surveys, questionnaires, or promotions</li>
            <li>Device identity, page view statistics, IP address, advertising data, and geolocation information</li>
            <li>Information about third parties</li>
            <li>Other information provided by you or required by us</li>
          </ul>
          <p className="text-xs mt-2">
            After discovering what information we collect, let’s see how we collect your information in the next part.
          </p>
        </div>

        <Image
          className="hidden xl:block xl:w-1/2 h-[30rem] shadow-md rounded-md"
          src="/images/960x0.webp"
          alt="Kayhan Audio introduction"
          width={800}
          height={350}
        />
      </div>

      {/* Info Boxes Section */}
      <div className="flex flex-wrap my-6 gap-4 justify-evenly">
        {[
          {
            title: "Protection of personal information",
            content: "Our cybersecurity team ensures your personal information is secure and protected from misuse or unauthorised access. We use administrative and technical measures to protect these systems."
          },
          {
            title: "Personal information sharing",
            content: "We may share your personal information with companies we work with, like cloud providers and contractors, both in Australia and overseas. Reasonable steps will be taken to ensure they handle your data appropriately."
          },
          {
            title: "Links",
            content: "Our website contains links to other sites for convenience. We are not responsible for their privacy practices, so we recommend reading their privacy policies before use."
          },
          {
            title: "Personal information access and correction",
            content: "You can contact us if you need to access or correct your personal information. Our cybersecurity team is responsible for ensuring your information is secure."
          },
          {
            title: "Complaints or questions",
            content: "For inquiries or complaints, contact our Privacy Officer at info@kayhanaudio.com.au. We will investigate and respond promptly."
          },
          {
            title: "Privacy policy update",
            content: "We update our Privacy Policy from time to time. Changes will be reflected on our website. Please review it regularly."
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="w-full md:w-[48%] xl:w-[30%] border p-4 text-center shadow-md rounded-md hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className="text-xs mt-2">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Information Collection Section */}
 
       

      {/* Use of Personal Information Section */}
      <div className="shadow-md my-5 p-4">
        <h1 className="text-lg font-semibold">Use of your personal information</h1>
        <h3 className="text-sm">We use personal information to:</h3>
        <ul className="text-xs mt-2 space-y-1">
          <li>Provide goods, services, or information</li>
          <li>Maintain records and manage administration</li>
          <li>Engage agents, contractors, or employees for services</li>
          <li>Improve customer experience</li>
          <li>Enforce agreements, settle disputes, and comply with legal obligations</li>
          <li>Send promotional or marketing messages (you can opt-out anytime)</li>
          <li>Send requested information, notices, and updates</li>
          <li>Process employment applications</li>
        </ul>
       
      </div>
    </section>
  );
};

export default CustSev;
