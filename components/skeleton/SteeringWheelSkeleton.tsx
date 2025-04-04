const SteeringWheelSkeleton = () => {
    return (
      <div className="flex justify-center sm:h-[50vh] lg:h-[55vh] items-center px-4 animate-pulse">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Skeleton for Image Slider */}
          <div className="w-full md:w-1/2 p-5">
            <div className="w-full sm:ml-[30%] min-w-[10rem] max-w-[35rem] h-[20rem] md:h-[30rem] bg-gray-300 rounded-lg"></div>
          </div>
  
          {/* Skeleton for Content Section */}
          <div className="w-full md:w-1/2 p-5">
            <div className="h-8 w-3/4 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-6 w-1/2 bg-gray-300 rounded-md mb-4"></div>
  
            {/* Skeleton for Dropdowns */}
            <div className="space-y-4">
              <div className="h-10 w-1/2 bg-gray-300 rounded-md"></div>
              <div className="h-10 w-1/2 bg-gray-300 rounded-md"></div>
            </div>
  
            {/* Skeleton for Button */}
            <div className="h-10 w-36 bg-gray-300 rounded-lg mt-4"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SteeringWheelSkeleton;
  