"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { signIn, SignInData } from "@/store/actions/auth";
import { mapServerErrors } from "@/helpers/commonFunction";
import { USER_ROLE } from "@/app/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DynamicForm, { FormField } from "../globals/DynamicForm";

const WholeSaleSignUp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [values, setValues] = useState({
    contactName: "",
    businessTradingName: "",
    abnAcn: "",
    websiteAddress: "",
    accountPayableEmail: "",
    shopFront: "",
    facebook: "",
    youtube: "",
    tiktok: "",
    x: "",
    numberOfEmployees: "",
    currentMethodsOfSales: "",
    ebayAndOtherEcommercePlatforms: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const formFields: FormField[] = [
    { name: "contactName", label: "Contact Name", type: "text" },
    { name: "businessTradingName", label: "Business Trading Name", type: "text" },
    { name: "abnAcn", label: "ABN/ACN", type: "text" },
    { name: "websiteAddress", label: "Website Address", type: "text" },
    { name: "accountPayableEmail", label: "Account Payable Email", type: "email" },
    { name: "shopFront", label: "Shop Front", type: "text" },
    { name: "facebook", label: "Facebook", type: "text" },
    { name: "youtube", label: "YouTube", type: "text" },
    { name: "tiktok", label: "TikTok", type: "text" },
    { name: "x", label: "X", type: "text" },
    { name: "numberOfEmployees", label: "Number Of Employees", type: "number" },
    { name: "currentMethodsOfSales", label: "Current Methods Of Sales", type: "text" },
    { name: "ebayAndOtherEcommercePlatforms", label: "EBay And Other Ecommerce Platforms", type: "text" }
  ];

  const handleSubmit = async (
    e: React.FormEvent,
    values: SignInData,
    mode: string
  ) => {
    e.preventDefault();

    try {
      const res = await dispatch(signIn(values)).unwrap();
      console.log("Submitted values:", res);

      if (res.success) {
        if (res.data?.user.role === USER_ROLE.admin) {
          router.push(`/admin/departments`);
        } else if (res.data?.user.role === USER_ROLE.frontend_user) {
          router.push(`/user/orders`);
        }
      }
    } catch (error) {
      console.log(error);
      const formErrors = mapServerErrors((error as any).errors, setErrors);
      console.error("Login failed:", formErrors);
    }
  };

  return (
    <div className="flex justify-center items-center p-8 min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Wholesale Sign-Up</h2>

        <DynamicForm
          formClassName="grid grid-cols-1 md:grid-cols-2 gap-6"
          submitTitle="Sign Up"
          values={values}
          setValues={setValues}
          errors={errors}
          formFields={formFields}
          handleSubmit={()=>{}}
          mode="add"
        />

        <div className="flex justify-between mt-4">
          <p className="text-sm">
            Already have an account? {" "}
            <span onClick={() => router.push("/sign-in")} className="text-blue-600 font-semibold cursor-pointer">
              Sign In
            </span>
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default WholeSaleSignUp;
