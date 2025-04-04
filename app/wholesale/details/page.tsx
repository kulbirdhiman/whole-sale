"use client"
import WholeSaleSidebar from "@/components/wholesale/WholeSaleSideBar";
import { useState } from "react";

function AccountDetailsPage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main Street, City, Country",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex text-black min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <WholeSaleSidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-gray-800">Account Details</h2>
        <p className="text-gray-600 mt-2">Manage your personal information.</p>

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
            <span>Profile</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <button className="mt-2 text-blue-500 border border-blue-500 px-3 py-1 rounded-md hover:bg-blue-100">
              Change Picture
            </button>
          </div>
        </div>

        {/* Account Details Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-2xl font-semibold mb-4">Edit Details</h3>
          <form className="grid gap-4">
            <div>
              <label className="text-gray-600 block mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountDetailsPage;
