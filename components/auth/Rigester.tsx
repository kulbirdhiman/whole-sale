"use client"
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";

const formSections = [
  {
    title: "Business Information",
    fields: [
      // { name: "companyName", label: "Company Name", type: "text" },
      { name: "contactName", label: "Contact Name", type: "text" },
      { name: "businessTradingName", label: "Business Trading Name", type: "text" },
      { name: "abnAcn", label: "ABN/ACN", type: "email" },
    ],
  },
  {
    title: "Contact & Address",
    fields: [
      { name: "website", label: "Website", type: "text" },
      { name: "address", label: "Address", type: "text" },
      { name: "accountPayableEmail", label: "Account Payable Email", type: "email" },
      { name: "shopFront", label: "Shop Front", type: "image" },
    ],
  },
  {
    title: "Social links",
    fields: [
      { name: "facebook", label: "Facebook", type: "text" },
      { name: "youtube", label: "YouTube", type: "text" },
      { name: "tiktok", label: "TikTok", type: "text" },
      { name: "x", label: "X", type: "text" },
    //   { name: "employees", label: "Number Of Employees", type: "number" },
    //   { name: "methodsOfSales", label: "Current Methods Of Sales", type: "text" },
    //   { name: "ecommercePlatforms", label: "EBay And Other Ecommerce Platforms", type: "text" },
    ],
  },
  {
    title: "About the Comapny Reveune",
    fields: [
     
      { name: "employees", label: "Number Of Employees", type: "number" },
      { name: "methodsOfSales", label: "Current Methods Of Sales", type: "text" },
      { name: "ecommercePlatforms", label: "EBay And Other Ecommerce Platforms", type: "text" },
    ],
  },
];

export default function Register() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, formSections.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className=" w-[80rem] flex flex-col-reverse md:flex-row-reverse border border-gray-400 gap-5  mx-auto ">
      <div className="w-1/2 hidden md:block">
        <Image src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Register" width={500} height={500} className=" h-full w-full" />
      </div>
      <div className="w-full md:w-1/2 block p-3">
        <h2 className="text-2xl text-black border-b  font-bold mb-4">{formSections[step].title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            {formSections[step].fields.map((field) => (
              <div key={field.name} className="p-1">
                <label className="block text-black mb-1">{field.label}</label>
                <input
                  name={field.name}
                  type={field.type}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded p-2 border-black"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            {step > 0 && (
              <button type="button" onClick={prevStep} className="px-4 py-2 bg-blue-600 rounded">
                Previous
              </button>
            )}
            {step < formSections.length - 1 ? (
              <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
                Next
              </button>
            ) : (
              <button type="submit" className="p-2 bg-green-500 text-white rounded">
                Submit
              </button>
            )}
          </div>
        </form>
            <p className="text-black mt-2">Already have a account ? <Link className="text-blue-500" href="/login" >Login</Link></p>
      </div>
    </div>
  );
}
