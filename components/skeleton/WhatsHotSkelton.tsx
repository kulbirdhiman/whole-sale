const HotDealsSkeleton = () => {
  return (
    <div className="py-10 -mt-2 px-6 lg:px-10 animate-pulse">
      <h2 className="text-5xl  text-gray-900 mb-10  bg-gray-300 w-1/3 mx-auto h-10 rounded-md"></h2>

      {/* Skeleton for Mobile Slider */}
      <div className="md:hidden">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full relative h-[20rem] bg-gray-300 rounded-md"></div>
          <div className="w-full p-6">
            <div className="h-6 w-2/3 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Skeleton for Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10">
        {[1, 2, 3,4].map((_, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full md:w-1/2 h-[18rem] bg-gray-300 rounded-md"></div>
            <div className="w-full md:w-1/2 p-6">
              <div className="h-6 w-2/3 bg-gray-300 rounded-md mb-4"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded-md"></div>
              <div className="h-10 w-36 bg-gray-300 rounded-lg mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDealsSkeleton;
