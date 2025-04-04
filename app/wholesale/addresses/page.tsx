"use client";
import { useState } from "react";

function AddressPage() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Home",
      street: "123 Main Street",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
    {
      id: 2,
      name: "Office",
      street: "456 Business Rd",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  // Add New Address
  const handleAddAddress = () => {
    if (!newAddress.name || !newAddress.street || !newAddress.city || !newAddress.state || !newAddress.zip) {
      alert("Please fill in all fields.");
      return;
    }

    setAddresses([...addresses, { ...newAddress, id: addresses.length + 1 }]);
    setIsModalOpen(false); // Close modal
    setNewAddress({ name: "", street: "", city: "", state: "", zip: "" }); // Reset form
  };

  return (
    <div className="flex text-black min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-gray-800">Saved Addresses</h2>
        <p className="text-gray-600 mt-2">Manage your shipping and billing addresses.</p>

        {/* Address List */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {addresses.map((address) => (
            <div key={address.id} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{address.name}</h3>
              <p className="text-gray-600">{address.street}</p>
              <p className="text-gray-600">{address.city}, {address.state} {address.zip}</p>
              <button className="mt-4 px-4 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-100">
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Add New Address Button */}
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Add New Address
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold mb-4">Add New Address</h3>

            {/* Input Fields */}
            <input
              type="text"
              name="name"
              placeholder="Address Name (e.g., Home, Office)"
              className="w-full border p-2 rounded mb-2"
              value={newAddress.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              className="w-full border p-2 rounded mb-2"
              value={newAddress.street}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full border p-2 rounded mb-2"
              value={newAddress.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="w-full border p-2 rounded mb-2"
              value={newAddress.state}
              onChange={handleChange}
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              className="w-full border p-2 rounded mb-2"
              value={newAddress.zip}
              onChange={handleChange}
            />

            {/* Buttons */}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleAddAddress}
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddressPage;
