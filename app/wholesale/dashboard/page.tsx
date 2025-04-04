import {
  FaClipboardList,
  FaDownload,
  FaCreditCard,
  FaShoppingCart,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
      <p className="text-gray-600 mt-2">Manage your account, orders, and settings.</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          {
            title: "Total Orders",
            value: "1,230",
            icon: <FaClipboardList className="text-blue-500" />,
          },
          // {
          //   title: "Downloads",
          //   value: "340",
          //   icon: <FaDownload className="text-green-500" />,
          // },
          {
            title: "Revenue",
            value: "$50,000",
            icon: <FaCreditCard className="text-yellow-500" />,
          },
          {
            title: "Pending Orders",
            value: "87",
            icon: <FaShoppingCart className="text-red-500" />,
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow flex items-center gap-4"
          >
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <p className="text-gray-600">{stat.title}</p>
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
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
                {
                  id: "#1023",
                  customer: "John Doe",
                  total: "$500",
                  status: "Completed",
                  color: "text-green-600",
                },
                {
                  id: "#1024",
                  customer: "Jane Smith",
                  total: "$1,200",
                  status: "Pending",
                  color: "text-yellow-600",
                },
                {
                  id: "#1025",
                  customer: "Mark Taylor",
                  total: "$2,500",
                  status: "Shipped",
                  color: "text-blue-600",
                },
              ].map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{order.id}</td>
                  <td className="border p-3">{order.customer}</td>
                  <td className="border p-3">{order.total}</td>
                  <td className={`border p-3 font-medium ${order.color}`}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
