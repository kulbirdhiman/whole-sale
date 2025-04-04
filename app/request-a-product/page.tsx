import Link from "next/link";
export default function RequestProduct() {
    return (
      <div className="max-w-4xl text-black mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Request a Product</h1>
        <p className="text-gray-600">
          At <span className="font-semibold">Kayhan Audio</span>, we are committed to providing high-quality car audio solutions.
          If you’re looking for a specific product that is not currently listed on our website, you can <span className="font-semibold">request a product</span> by following the steps below.
        </p>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">1. How to Request a Product</h2>
          <p className="text-gray-600 mt-2">If you need a particular product or accessory, you can submit a request through the following methods:</p>
          <ul className="mt-4 space-y-2">
            <li>📩 <span className="font-semibold">Email:</span> <a href="mailto:support@kayhanaudio.com" className="text-blue-600 hover:underline">support@kayhanaudio.com</a></li>
            <li>💬 <span className="font-semibold">Live Chat:</span> Contact our <Link href="/customer-services" className="text-blue-600 hover:underline">Customer Care Team</Link> via live chat.</li>
            <li>📞 <span className="font-semibold">Phone:</span> Call us at <a href="tel:1300696488" className="text-blue-600 hover:underline">1300 696 488</a>.</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">2. Custom & Special Orders</h2>
          <p className="text-gray-600 mt-2">For certain products, we may offer custom orders or special imports based on availability.</p>
          <ul className="mt-4 space-y-2">
            <li>✅ Custom or special orders may take additional processing time.</li>
            <li>✅ Full payment or a deposit may be required before we place the order.</li>
            <li>✅ Custom orders are <span className="font-semibold">non-refundable</span> unless the product is faulty or incorrect.</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">3. Availability & Response Time</h2>
          <p className="text-gray-600 mt-2">Once we receive your product request, our team will:</p>
          <ul className="mt-4 space-y-2">
            <li>✔️ Check availability and sourcing options.</li>
            <li>✔️ Provide an estimated price and delivery timeframe.</li>
            <li>✔️ Contact you within <span className="font-semibold">1-3 business days</span> with an update.</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">4. Further Questions?</h2>
          <p className="text-gray-600 mt-2">For any product request inquiries, feel free to reach out to our <Link href="https://kayhanaudio.com" className="text-blue-600 hover:underline">Customer Care Team</Link> at <a href="tel:1300696488" className="text-blue-600 hover:underline">1300 696 488</a> or via.</p>
        </div>
  
        <p className="mt-6 text-gray-800 font-semibold">We appreciate your interest in Kayhan Audio and look forward to helping you find the perfect product! 🚗🎵</p>
      </div>
    );
  }
  