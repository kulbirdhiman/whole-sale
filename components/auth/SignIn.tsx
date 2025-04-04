"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import DynamicForm, { FormField } from "../globals/DynamicForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { signIn, SignInData } from "@/store/actions/auth";
import { mapServerErrors } from "@/helpers/commonFunction";
import { log } from "console";
import { USER_ROLE } from "@/app/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
const LogIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [values, setValues] = useState<SignInData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const formFields: FormField[] = [
    {
      name: "email",
      label: "Email",
      type: "email",
      // placeholder: "Enter your email",
      divClass: "w-full p-3",
      labelClass: "",
      fieldClass:
        " w-full mt-1 p border-b border-gray-900 focus:outline-none focus:border-green-500",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      // placeholder: "Enter your password",
      labelClass:
        " left-0 top-4 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-500",
      fieldClass:
        "peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none focus:border-green-500",
    },
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

      //  const apiResponse = res.payload
      if (res.success) {
        if (res.data?.user.role == USER_ROLE.admin) {
          router.push(`/admin/departments`);
        }
        if (res.data?.user.role == USER_ROLE.frontend_user) {
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
    <div className="">
      <div className="text-lg">
        <DynamicForm
          formClassName="w-full"
          submitTitle="Log in"
          values={values}
          setValues={setValues}
          errors={errors}
          formFields={formFields}
          handleSubmit={handleSubmit}
          mode="add"
        />
        <div className="flex mt-3 justify-between">
          <p className="text-sm ">
            don't have Account ?{" "}
            <span onClick={()=> router.push("/sign-up")} className="text-blue-800 font-bold cursor-pointer">
              sign up
            </span>{" "}
          </p>
          <Link href="/forgot-password" className="text-blue-800  text-xs font-bold">
            Forget password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
