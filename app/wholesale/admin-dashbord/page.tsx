"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import {
  FaClipboardList,
  FaCreditCard,
  FaShoppingCart,
  FaChartBar,
} from "react-icons/fa";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
type SalesData = {
    series: { name: string; data: number[] }[];
    categories?: string[];
    title: string;
  };
  
  type UserSalesData = {
    [key: string]: SalesData;
  };
const Dashboard = () => {
    const [selectedSales, setSelectedSales] = useState<"lastYear" | "lastMonth" | "lastWeek">("lastYear");
    const [selectedChartType, setSelectedChartType] = useState<"bar" | "line" | "area" | "pie" | "donut">("bar");
    const [currentUser, setCurrentUser] = useState<string | null>(null);

  // Sales Data
  const salesData = {
    lastYear: {
      series: [{ name: "Sales", data: [5000, 7000, 8000, 9000, 11000, 12000] }],
      categories: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
      title: "Last Year Sales",
    },
    lastMonth: {
      series: [{ name: "Sales", data: [4000, 6000, 7000, 8000] }],
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      title: "Last Month Sales",
    },
    lastWeek: {
      series: [{ name: "Sales", data: [5000, 5500, 6000, 6200, 6400, 7000, 7500] }],
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      title: "Last Week Sales",
    },
  };

  const userSales = {
    John: { series: [{ name: "Sales", data: [2000, 2500, 3000, 3200] }], title: "John's Sales" },
    Jane: { series: [{ name: "Sales", data: [1500, 1800, 2000, 2100] }], title: "Jane's Sales" },
  };

  const chartOptions: ApexOptions = {
    chart: { type: selectedChartType as "bar" | "line" | "area" | "pie" | "donut", height: 300 },
    xaxis: salesData[selectedSales].categories ? { categories: salesData[selectedSales].categories } : undefined,
    labels: salesData[selectedSales].categories || [],
    colors: ["#4F46E5", "#22C55E", "#EAB308", "#EF4444"],
  };

  const chartSeries = currentUser
    ? (userSales[currentUser]as any).series
    : salesData[selectedSales].series;

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
      <p className="text-gray-600 mt-2">Manage your account, orders, and settings.</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {[{ title: "Total Orders", value: "1,230", icon: <FaClipboardList className="text-blue-500" /> },
          { title: "Revenue", value: "$50,000", icon: <FaCreditCard className="text-yellow-500" /> },
          { title: "Pending Orders", value: "87", icon: <FaShoppingCart className="text-red-500" /> },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <p className="text-gray-600">{stat.title}</p>
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Options */}
      <div className="mt-6 flex flex-wrap gap-4 items-center">
        {["lastYear", "lastMonth", "lastWeek"].map((key:any) => (
          <button key={key} onClick={() => setSelectedSales(key)} className="bg-gray-300 px-4 py-2 rounded-md">
            {salesData[key].title}
          </button>
        ))}

        <select value={selectedChartType} onChange={(e) => setSelectedChartType(e.target.value as "bar" | "line" | "area" | "pie" | "donut")}

          className="p-2 border rounded-md bg-white">
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
          <option value="area">Area Chart</option>
          <option value="pie">Pie Chart</option>
          <option value="donut">Donut Chart</option>
        </select>
      </div>

      {/* Sales Chart */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">{currentUser ? (userSales[currentUser]as any).title : salesData[selectedSales].title}</h3>
        <Chart options={chartOptions} series={chartSeries} type={selectedChartType} height={300} />
      </div>

      {/* User Sales Table */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Users</h3>
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">User</th>
              <th className="border p-3">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(userSales).map((user : any, index) => (
              <tr key={index} onClick={() => setCurrentUser(user)} className="cursor-pointer hover:bg-gray-50">
                <td className="border p-3">{user}</td>
                <td className="border p-3">${userSales[user].series[0].data.reduce((a, b) => a + b, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Order ID</th>
                <th className="border p-3">Customer</th>
                <th className="border p-3">Total</th>
                <th className="border p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "#1023", customer: "John Doe", total: "$500", status: "Completed", color: "text-green-600" },
                { id: "#1024", customer: "Jane Smith", total: "$1,200", status: "Pending", color: "text-yellow-600" },
                { id: "#1025", customer: "Mark Taylor", total: "$2,500", status: "Shipped", color: "text-blue-600" },
              ].map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{order.id}</td>
                  <td className="border p-3">{order.customer}</td>
                  <td className="border p-3">{order.total}</td>
                  <td className={`border p-3 font-medium ${order.color}`}>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
