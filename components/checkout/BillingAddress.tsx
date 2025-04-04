"use client";
import React, { useEffect, useState } from "react";
// import DynamicForm from "@/components/globals/DynamicForm";
import DynamicForm, { FormField } from "../globals/DynamicForm";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
  RegionSelect,
  PhonecodeSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const BillingForm = ({ billingAddress, setBillingAddress,billingErrors,setBillingErrors }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [countries, setCountries] = useState<
    { name: string; isoCode: string }[]
  >([]);

  const handleSubmit = () => {
    console.log("Submitted Values:", billingAddress);
  };

  return (
    <div className="  p-5 ">
      <h1 className="text-xl my-4 font-semibold"> Billing Address</h1>
      <DynamicForm
        formClassName="grid grid-cols-2 gap-4 item-center "
        values={billingAddress}
        setValues={setBillingAddress}
        errors={billingErrors}
        formFields={formFields(countries,billingAddress,setBillingAddress,billingErrors)}
        handleSubmit={handleSubmit}
        mode="add"
      />
    </div>
  );
};

export default BillingForm;

const formFields = (countries,billingAddress,setBillingAddress,billingErrors): FormField[] => {
  const [country, setCountrty] = useState();
  const [states, setStates] = useState([]);

  return [
    {
      name: "name",
      label: "First Name",
      type: "text",
      fieldClass:
        "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass:
        "text-gray-700 ",
        placeholder : "Enter First name"
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
      fieldClass:
        "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass:
        "text-gray-700 ",
        placeholder : "Enter First name"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      fieldClass:
        "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass:
        "text-gray-700 ",
        placeholder : "Enter Email name"
    },
    {
      name: "phone",
      label: "Phone",
      type: "number",
      fieldClass:
        "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass:
        "text-gray-700 ",
        placeholder : "Enter phone number"
    },
    {
      name: "country",
      label: "Country",
      type: "custom",
      // fieldClass:
      //   "peer w-full border-b border-gray-900 focus:outline-none focus:border-green-500",
      // labelClass:
      //   "text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-500",
      options: countries,
      customRender: () => {
        return (
          <div className="border-none">
            <label className="block  text-lg font-medium">
              Select Countries
            </label>
            <CountrySelect
              inputClassName="w-full bg-transparent text-gray-900  border-none focus:outline-none"
              // className="w-full border-none  focus:border-green-500 transition-all duration-200"
              onChange={(e) => {
                console.log(e);
                setBillingAddress({...billingAddress,country:{id:e.id,name:e.name,iso3:e.iso3,iso2:e.iso2},country_name:e.name})
                setCountrty(e);
              }}
              placeHolder="Select Country"
            />
       {billingErrors.country &&  <p className="text-red-400 " >{billingErrors.country}</p> }    
          </div>
        );
      },
    },
    {
      name: "state",
      label: "State ",
      type: "custom",
      customRender: () => {
        return (
          <div className="c">
            <label className="block  text-lg font-medium">States</label>
            <StateSelect
              countryid={(country as any)?.id}
              className="peer w-full border-b border-gray-900 focus:outline-none focus:border-green-500 "
              onChange={(e) => {
                console.log(e);
                // setCountrtyId(e.id)
                // setCountryid(e.id);
                setBillingAddress({...billingAddress,state:{id:e.id,name:e.name,state_code:e.state_code},state_name:e.name})
              }}
              placeHolder="Select State"
            />
            {billingErrors.state &&  <p className="text-red-400 " >{billingErrors.state}</p> }    
          </div>
        );
      },
    },
    {
      name: "city",
      label: "Town / City",
      type: "text",
      fieldClass:
      "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
    labelClass:
      "text-gray-700 ",
      placeholder : "Enter city"
    },
    {
      name: "street_address",
      label: "Street Address",
      type: "text",
      fieldClass:
      "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
    labelClass:
      "text-gray-700 ",
      placeholder : "Enter street address"
    },

    {
      name: "postcode",
      label: "Postcode / ZIP",
      type: "text",
      fieldClass:
        "peer w-full rounded border border-gray-400 p-2 focus:outline-none focus:border-green-500",
      labelClass:
        "text-gray-700 ",
        placeholder : "Enter Post code"
    },
  ];
};
