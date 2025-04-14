import Link from "next/link";
const CancellationRefundPolicy = () => {
    return (
      <div className="max-w-4xl text-black mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Cancellation & Refund Policy</h1>
        <p className="text-gray-700 text-lg mb-4">
          At <span className="font-semibold">Kayhan Audio</span>, we strive to provide a seamless shopping experience. We understand that sometimes, orders may need to be canceled or refunded. Please review our <span className="font-semibold">cancellation and refund policy</span> below to understand the process and conditions.
        </p>
        
        <div className="border-t border-gray-300 my-4"></div>
  
        <h2 className="text-2xl font-semibold mb-4">1. Order Cancellation</h2>
        <h3 className="text-xl font-semibold mb-2">Cancellation Before Dispatch</h3>
        <p className="text-gray-700 mb-4">
          You may cancel your order <span className="font-semibold">before it is dispatched</span> for a <span className="font-semibold">full refund</span>. To cancel an order, please contact our <span className="font-semibold">Customer Care Team</span> as soon as possible at <span className="font-semibold">1300 696 488</span> or via our <span className="font-semibold">online chat support</span>.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>If your order has already been processed or shipped, it <span className="font-semibold">cannot be canceled</span>.</li>
          <li>Refunds for canceled orders will be processed to the original payment method within <span className="font-semibold">3-5 business days</span>.</li>
        </ul>
  
        <h3 className="text-xl font-semibold mb-2">Cancellation After Dispatch</h3>
        <p className="text-gray-700 mb-4">
          If your order has been shipped, cancellation is <span className="font-semibold">not possible</span>. You may still return the item under our <Link href="/return-policy" className=" text-blue-600 underline font-semibold">Return & Refund Policy</Link> after receiving it.
        </p>
  
        <div className="border-t border-gray-300 my-4"></div>
  
        <h2 className="text-2xl font-semibold mb-4">2. Refund Policy</h2>
        <h3 className="text-xl font-semibold mb-2">Returns Due to Change of Mind</h3>
        <p className="text-gray-700 mb-4">
          If you change your mind about a purchase, you can return the item within <span className="font-semibold">30 days</span> of the delivery date, provided:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>The item is in <span className="font-semibold">original, unopened, and resellable condition</span>.</li>
          <li>You have <span className="font-semibold">valid proof of purchase</span>.</li>
          <li>The item is <span className="font-semibold">not a custom-made product</span>.</li>
        </ul>
        <p className="text-gray-700 mb-4"><span className="font-semibold">Restocking Fee:</span> A <span className="font-semibold">25% restocking fee</span> (or more) will be deducted from your refund amount for change-of-mind returns.</p>
  
        <h3 className="text-xl font-semibold mb-2">Returns Due to Faulty or Incorrect Items</h3>
        <p className="text-gray-700 mb-4">
          If you receive a <span className="font-semibold">faulty, damaged, or incorrect product</span>, you may be eligible for a <span className="font-semibold">full refund or replacement</span> if:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>The item received is <span className="font-semibold">not what you ordered</span>.</li>
          <li>The item is <span className="font-semibold">significantly different</span> from its description on our website.</li>
          <li>The item has a <span className="font-semibold">major defect</span> that was <span className="font-semibold">not caused by misuse</span>.</li>
        </ul>
        <p className="text-gray-700 mb-4">📌 <span className="font-semibold">Refunds for faulty items will only be processed after inspection.</span> You may be required to provide images/videos as proof of the issue.</p>
        
        <h3 className="text-xl font-semibold mb-2">Exclusions – When Refunds Are Not Issued</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>The product has been <span className="font-semibold">used, modified, or damaged</span> after delivery.</li>
          <li>The product has been <span className="font-semibold">misused</span> contrary to manufacturer recommendations.</li>
          <li>The return request is made <span className="font-semibold">after 30 days</span> for change-of-mind returns.</li>
          <li>The product is a <span className="font-semibold">custom-made or special-order item</span>.</li>
        </ul>
  
        <div className="border-t border-gray-300 my-4"></div>
  
        <h2 className="text-2xl font-semibold mb-4">3. Refund Processing Time</h2>
        <p className="text-gray-700 mb-4">
          Once we receive and inspect your returned item, we will process your refund within <span className="font-semibold">3-5 business days</span> to your original payment method (e.g., <span className="font-semibold">Credit Card, Afterpay, PayPal</span>).
        </p>
        <p className="text-gray-700 mb-4">💡 <span className="font-semibold">Please Note:</span></p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Refund processing times may vary depending on your bank or payment provider.</li>
          <li>Shipping fees and handling charges <span className="font-semibold">are non-refundable</span>, except in cases of faulty or incorrect items.</li>
        </ul>
        
        <div className="border-t border-gray-300 my-4"></div>
  
        <h2 className="text-2xl font-semibold mb-4">4. Further Questions?</h2>
        <p className="text-gray-700 mb-4">
          For any cancellation or refund inquiries, contact our <span className="font-semibold">Customer Care Team</span> at <a href="tel:1300696488" className="text-blue-600 underline font-semibold">1300 696 488</a> or via <span className="font-semibold">live chat</span>. We’re here to help!
        </p>
        
        <p className="text-center text-lg font-semibold">Thank you for shopping with <span className="font-bold">Kayhan Audio!</span> 🚗🔊</p>
      </div>
    );
  };
  
  export default CancellationRefundPolicy;
  