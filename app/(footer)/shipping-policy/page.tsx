const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Shipping & Delivery Policy</h1>
      <p className="text-gray-700 mb-4">
        At <strong>Kayhan Audio</strong>, we ensure reliable and efficient shipping services across <strong>Australia and worldwide</strong>. We partner with <strong>Direct Freight Express</strong> and <strong>Australia Post</strong> for domestic shipping and work with trusted international couriers to deliver globally.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-6">1. Shipping & Delivery</h2>
      
      <h3 className="text-xl font-semibold text-gray-700 mt-4">Delivery Fees</h3>
      <p className="text-gray-700">Shipping costs are calculated based on your <strong>location, product size, and weight</strong>. Our system will automatically determine the shipping fee at checkout once you enter your delivery address.</p>
      
      <ul className="list-disc list-inside text-gray-700 mt-3">
        <li>We use <strong>Direct Freight Express</strong> and <strong>Australia Post</strong> for all Australian deliveries.</li>
        <li>For <strong>international orders</strong>, we work with trusted couriers like <strong>DHL, FedEx, and UPS</strong>.</li>
        <li>Orders <strong>cannot be delivered to unattended addresses</strong>.</li>
        <li>A <strong>signature is required upon delivery</strong>. If unavailable, a delivery card will be left.</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-gray-700 mt-4">Order Tracking</h3>
      <p className="text-gray-700">Track your order using our <strong>Track My Order</strong> feature by entering your order ID. Updates may take <strong>up to 24 hours</strong> after dispatch.</p>
      
      <h3 className="text-xl font-semibold text-gray-700 mt-4">Delivery Timeframes</h3>
      <h4 className="text-lg font-medium text-gray-700 mt-2">Australia-wide Shipping</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Metro areas</strong>: 2-5 business days after dispatch</li>
        <li><strong>Regional areas</strong>: 5-10 business days</li>
        <li><strong>Remote areas</strong>: 7-15 business days</li>
      </ul>
      
      <h4 className="text-lg font-medium text-gray-700 mt-2">International Shipping</h4>
      <p className="text-gray-700">We ship worldwide to countries such as the <strong>United States, New Zealand, Canada, United Kingdom, Germany, Poland</strong>, and more.</p>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Standard International Shipping</strong>: 7-21 business days</li>
        <li><strong>Expedited Shipping</strong>: 5-10 business days</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-gray-700 mt-4">Possible Order Delays</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Incorrect or incomplete shipping address</li>
        <li>No one available to sign for delivery</li>
        <li>Payment verification issues</li>
        <li>Customs clearance delays (for international shipments)</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-gray-700 mt-4">Express Shipping</h3>
      <p className="text-gray-700"><strong>Currently, we do not offer express shipping.</strong> We apologize for any inconvenience.</p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-6">2. Where We Ship</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Australia</strong> (all major cities and remote areas)</li>
        <li><strong>United States</strong></li>
        <li><strong>New Zealand</strong></li>
        <li><strong>United Kingdom</strong></li>
        <li><strong>Canada</strong></li>
        <li><strong>Germany</strong></li>
        <li><strong>Poland</strong></li>
        <li>And many more!</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-6">Need Help?</h2>
      <p className="text-gray-700">For any shipping inquiries, please contact our <strong>Customer Care Team</strong> at <strong>1300 696 488</strong>.</p>
      
      <p className="text-center text-gray-800 font-bold text-lg mt-6">Thank you for choosing Kayhan Audio! 🚗🔊</p>
    </div>
  );
};

export default ShippingPolicy;