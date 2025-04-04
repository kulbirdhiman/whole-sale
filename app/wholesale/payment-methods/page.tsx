"use client"
import WholeSaleSidebar from "@/components/wholesale/WholeSaleSideBar";
import { FaCreditCard, FaPaypal, FaPlus } from "react-icons/fa";
import { useState } from "react";

function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Credit Card",
      cardNumber: "**** **** **** 1234",
      provider: "Visa",
    },
    {
      id: 2,
      type: "PayPal",
      email: "user@example.com",
      provider: "PayPal",
    },
  ]);

  return (
    <div className="flex text-black min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <WholeSaleSidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-gray-800">Payment Methods</h2>
        <p className="text-gray-600 mt-2">Manage your saved payment options.</p>

        {/* Payment Methods List */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {paymentMethods.map((method) => (
            <div key={method.id} className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
              {method.type === "Credit Card" ? (
                <FaCreditCard className="text-blue-500 text-3xl" />
              ) : (
                <FaPaypal className="text-yellow-500 text-3xl" />
              )}
              <div>
                <h3 className="text-xl font-semibold">{method.provider}</h3>
                <p className="text-gray-600">{method.type === "Credit Card" ? method.cardNumber : method.email}</p>
              </div>
              <button className="ml-auto text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-100">
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Add New Payment Method Button */}
        <button className="mt-6 flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          <FaPlus className="mr-2" /> Add New Payment Method
        </button>
      </div>
    </div>
  );
}

export default PaymentMethodsPage;
