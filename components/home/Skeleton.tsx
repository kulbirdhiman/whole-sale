import React from "react";

export default function Skeleton() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Premium Experience</h1>
          <p className="mt-2 text-lg">Elevate your journey with cutting-edge technology.</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-6">This Week's Highlights</h2>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Linux Headunit</button>
          <button className="px-4 py-2 bg-gray-300 rounded">Android Stereo</button>
          <button className="px-4 py-2 bg-gray-300 rounded">Carplay Module</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-4">
          <div className="p-4 bg-white shadow rounded">Product 1</div>
          <div className="p-4 bg-white shadow rounded">Product 2</div>
          <div className="p-4 bg-white shadow rounded">Product 3</div>
          <div className="p-4 bg-white shadow rounded">Product 4</div>
        </div>
      </section>

      {/* Vehicle Finder Section */}
      <section className="py-12 bg-gray-200 text-center">
        <h2 className="text-2xl font-bold mb-4">Find What Fits Your Vehicle</h2>
        <select className="px-4 py-2 border rounded">
          <option>Select Make</option>
          <option>Ford</option>
          <option>Toyota</option>
          <option>BMW</option>
        </select>
      </section>

      {/* Audio Equipments */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Audio Equipments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <div className="p-4 bg-white shadow rounded">Amplifier</div>
          <div className="p-4 bg-white shadow rounded">Speakers</div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-12 bg-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6">Recommended Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div className="p-4 bg-white shadow rounded">Product A</div>
          <div className="p-4 bg-white shadow rounded">Product B</div>
          <div className="p-4 bg-white shadow rounded">Product C</div>
          <div className="p-4 bg-white shadow rounded">Product D</div>
        </div>
      </section>
    </div>
  );
}
