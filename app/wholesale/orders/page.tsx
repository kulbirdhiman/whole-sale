import WholeSaleSidebar from "@/components/wholesale/WholeSaleSideBar";

function Orders() {
  const orders = [
    { id: "#1023", customer: "John Doe", total: "$500", status: "Completed", color: "text-green-600" },
    { id: "#1024", customer: "Jane Smith", total: "$1,200", status: "Pending", color: "text-yellow-600" },
    { id: "#1025", customer: "Mark Taylor", total: "$2,500", status: "Shipped", color: "text-blue-600" },
  ];

  return (
    <div className="flex text-black min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <WholeSaleSidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-gray-800">Orders</h2>
        <p className="text-gray-600 mt-2">View and manage customer orders.</p>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 gap-4">
          <input
            type="text"
            placeholder="Search Orders..."
            className="w-full md:w-1/3 p-2 border rounded-md"
          />
          <select className="p-2 border rounded-md">
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4">Order List</h3>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-3">Order ID</th>
                <th className="border p-3">Customer</th>
                <th className="border p-3">Total</th>
                <th className="border p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
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
}

export default Orders;
