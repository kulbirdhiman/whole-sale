"use client";
import React, { useState } from "react";
import DynamicForm, { FormField } from "../globals/DynamicForm";
import {
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const WarrantyReg = () => {
  const [billingAddress, setBillingAddress] = useState<any>({});
  const [billingErrors, setBillingErrors] = useState<{ [key: string]: string }>({});
  const [country, setCountry] = useState<any>(null); // Moved state here

  const handleSubmit = () => {
    console.log("Submitted Values:", billingAddress);
  };

  return (
    <div className="p-5">
      {/* <h1 className="text-xl my-4 font-semibold"></h1> */}
      <DynamicForm
        formClassName="grid grid-cols-2 gap-4 item-center"
        values={billingAddress}
        setValues={setBillingAddress}
        errors={billingErrors}
        formFields={formFields(billingAddress, setBillingAddress, billingErrors, country, setCountry)}
        handleSubmit={handleSubmit}
        mode="add"
      />
    </div>
  );
};

export default WarrantyReg;

const formFields = (
  billingAddress: any,
  setBillingAddress: React.Dispatch<React.SetStateAction<any>>,
  billingErrors: { [key: string]: string },
  country: any,
  setCountry: React.Dispatch<React.SetStateAction<any>>
): FormField[] => {
  return [
    {
      name: "name",
      label: "First Name",
      type: "text",
      fieldClass: "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass: "text-gray-700",
      placeholder: "Enter First name",
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
      fieldClass: "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass: "text-gray-700",
      placeholder: "Enter Last name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      fieldClass: "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass: "text-gray-700",
      placeholder: "Enter Email",
    },
    {
      name: "phone",
      label: "Phone",
      type: "number",
      fieldClass: "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass: "text-gray-700",
      placeholder: "Enter phone number",
    },
    {
      name: "country",
      label: "Country",
      type: "custom",
      customRender: () => (
        <div>
          <label className="block text-lg font-medium">Select Country</label>
          <CountrySelect
            inputClassName="w-full bg-transparent text-gray-900 border-none focus:outline-none"
            onChange={(e) => {
              setBillingAddress({
                ...billingAddress,
                country: { id: e.id, name: e.name, iso3: e.iso3, iso2: e.iso2 },
                country_name: e.name,
              });
              setCountry(e);
            }}
            placeHolder="Select Country"
          />
          {billingErrors.country && <p className="text-red-400">{billingErrors.country}</p>}
        </div>
      ),
    },
    {
      name: "state",
      label: "State",
      type: "custom",
      customRender: () => (
        <div>
          <label className="block text-lg font-medium">States</label>
          <StateSelect
            countryid={country?.id}
            className="peer w-full border-b border-gray-900 focus:outline-none focus:border-green-500"
            onChange={(e) => {
              setBillingAddress({
                ...billingAddress,
                state: { id: e.id, name: e.name, state_code: e.state_code },
                state_name: e.name,
              });
            }}
            placeHolder="Select State"
          />
          {billingErrors.state && <p className="text-red-400">{billingErrors.state}</p>}
        </div>
      ),
    },
    {
      name: "city",
      label: "Town / City",
      type: "text",
      fieldClass: "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass: "text-gray-700",
      placeholder: "Enter city",
    },
    {
      name: "street_address",
      label: "Street Address",
      type: "text",
      fieldClass: "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass: "text-gray-700",
      placeholder: "Enter street address",
    },
    {
      name: "postcode",
      label: "Postcode / ZIP",
      type: "text",
      fieldClass: "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass: "text-gray-700",
      placeholder: "Enter Post code",
    },
  ];
};
