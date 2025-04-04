import OrderStatusTracker from "./OrderStatusTracker";
import OrderSummaryCard from "./OrderSummaryCard";
const OrderDetailPage = ({ order }) => {
    if (!order) {
      return (
        <div className="text-center py-10 text-lg font-semibold">
          Loading order details...
        </div>
      );
    }
  
    const { id, date, status, customer, items, subtotal, discount, total } =
      order;
  
    const statusColors = {
      Delivered: "bg-green-100 text-green-700",
      Pending: "bg-yellow-100 text-yellow-700",
      Cancelled: "bg-red-100 text-red-700",
    };
  
    return (
      <div className="container mx-auto p-4 max-w-4xl font-serif">
        <button className="text-white bg-blue-600 p-2 shadow-lg rounded-lg float-right" >Ship order</button>
        <h1 className="text-3xl font-semibold font-serif mb-6 text-gray-800">
          Order Details
        </h1>
        {/* Order Information */}
        <div className="bg-white shadow rounded-lg p-4 my-4 mx-3">
    <div className="flex flex-col md:flex-row gap-6">
      
      {/* Customer Information */}
      <div className="flex-1 min-w-[150px]">
        <h3 className="text-sm font-semibold border-b pb-2 mb-2">Customer Information</h3>
        <div className="text-xs space-y-1">
          <p><span className="font-semibold">Name:</span> John</p>
          <p><span className="font-semibold">Email:</span> john@gmail.com</p>
          <p><span className="font-semibold">Number:</span> 9595959</p>
        </div>
      </div>
  
      {/* Billing Address */}
      <div className="flex-1 min-w-[150px]">
        <h3 className="text-sm font-semibold border-b pb-2 mb-2">Billing Address</h3>
        <div className="text-xs text-gray-600 space-y-1">
          <p>kharar afafda afa</p>
          <p>mohali afafa</p>
          <p>punjab afafa</p>
        </div>
      </div>
  
      {/* Shipping Address */}
      <div className="flex-1 min-w-[150px]">
        <h3 className="text-sm font-semibold border-b pb-2 mb-2">Shipping Address</h3>
        <div className="text-xs text-gray-600 space-y-1">
          <p>kharar</p>
          <p>mohali</p>
          <p>punjab</p>
        </div>
      </div>
  
    </div>
  </div>
  
            <p className="my-3 px-4 borders-b border-sblack  text-sm font-serif"><span className="font-bold">Order no :</span> {id}</p>
        <OrderStatusTracker status="shipped" />
  
        <div className="w-full flex gap-2 my-3">
          <div className="w-[48%] border rounded-lg   p-4 shadow-lg">
            <h3 className="text-lg font-semibold my-3">
              {} Car Stereo with SatNav BMW 5 Series 2004 – 2010 | V6 | 8.8 Inch
            </h3>
            <p className="text-gray-600 text-sm font-serif">black</p>
            <p>
              price : <span className="font-sans font-semibold">12,233</span>
            </p>
            {/* customer Info */}
          </div>
  
          <div className="w-[48%] border rounded-lg   p-4 shadow-lg">
            <h3 className="text-lg font-semibold my-3">
              {} Car Stereo with SatNav BMW 5 Series 2004 – 2010 | V6 | 8.8 Inch
            </h3>
            <p className="text-gray-600 text-sm font-serif">black</p>
            <p>
              price : <span className="font-sans font-semibold">12,233</span>
            </p>
            {/* customer Info */}
          </div>  
          {/* <div className="w-full flex"> */}
         
        </div>
  <OrderSummaryCard subtotal={100} discount={200} total={600}  />
        
      </div>
    );
  };
  export default OrderDetailPage