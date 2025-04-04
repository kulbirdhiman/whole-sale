const AccSkeletonCard = () => {
  return (
    <div className="py-4 bg-white rounded-xl shadow-lg animate-pulse w-full md:w-[22%] h-[500px] flex flex-col justify-between mt-4">
      <div className="w-[90%] mx-auto">
        {/* Title Placeholder */}
        <div className="h-10  bg-gray-300 rounded w-3/4 mt-3"></div>

        {/* Grid of Placeholder Items */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-lg shadow-md p-2 flex flex-col items-center space-y-2">
              {/* Image Placeholder */}
              <div className="w-full h-[110px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md"></div>
              {/* Text Placeholder */}
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccSkeletonCard;
