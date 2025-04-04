"use client";
import Loader from "@/components/globals/Loader";
import UserMenu from "@/components/layout/UserMenu";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_ROLE } from "../constants";
import { myProfile } from "@/store/actions/auth";

export default function RootLayout({ children }) {
  const { loading, user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user?.role !== USER_ROLE.frontend_user)) {
      console.log(user);
      router.push("/sign-in");
    }
  }, [user, loading]);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(myProfile());
  }, [dispatch]);

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-5 mb-16">
      {!loading && user ? (
        <>
          <h1 className="text-3xl font-semibold text-black mb-5">My Account</h1>
          <div className="flex flex-col md:flex-row gap-5">
            {/* User Menu */}
            <div className="w-full md:w-1/4">
              <UserMenu />
            </div>
            <div className="w-full md:w-3/4 min-h-[310px] bg-gray-100 p-4 rounded-lg shadow-md overflow-x-auto">
              {children}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
