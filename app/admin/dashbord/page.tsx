"use client"; // Required for Next.js App Router
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts (Prevents SSR Issues)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
  const [chartType, setChartType] = useState<"bar" | "line" | "area" | "pie">("bar");

  const stats = {
    totalUsers: 5000,
    totalSales: 120000,
    totalOrders: 3500,
    lastYearSales: 90000,
    lastMonthSales: 8000,
  };

  // Chart Data
  const chartOptions = {
    chart: {
      type: chartType,
      toolbar: { show: true },
    },
    xaxis: {
      categories: Object.keys(stats).map((key) => key.replace(/([A-Z])/g, " $1")),
    },
  };

  const chartSeries = [
    {
      name: "Stats",
      data: Object.values(stats),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold capitalize text-gray-600">
              {key.replace(/([A-Z])/g, " $1")}
            </h2>
            <p className="text-3xl font-bold text-indigo-600 mt-2">${value.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Sales Overview</h2>
          {/* Dropdown to Change Chart Type */}
          <select
            className="p-2 border rounded-md"
            value={chartType}
            onChange={(e) => setChartType(e.target.value as "bar" | "line" | "area" | "pie")}
          >
            <option value="bar">Bar Chart</option>
            <option value="line">Line Chart</option>
            <option value="area">Area Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </div>
        <Chart options={chartOptions} series={chartSeries} type={chartType} height={350} />
      </div>

      {/* Recent Orders Table */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Order ID</th>
              <th className="p-3 border">Customer</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "ORD123", customer: "Alice", amount: 120, status: "Completed" },
              { id: "ORD124", customer: "Bob", amount: 75, status: "Pending" },
              { id: "ORD125", customer: "Charlie", amount: 220, status: "Shipped" },
            ].map((order) => (
              <tr key={order.id} className="text-center">
                <td className="p-3 border">{order.id}</td>
                <td className="p-3 border">{order.customer}</td>
                <td className="p-3 border">${order.amount}</td>
                <td className={`p-3 border ${order.status === "Completed" ? "text-green-600" : order.status === "Pending" ? "text-yellow-600" : "text-blue-600"}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
