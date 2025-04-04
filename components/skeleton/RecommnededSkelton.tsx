const RecomendedSkeletonCard = () => {
    return (
      <div className="flex-shrink-0 w-[260px] md:w-[300px]">
        <div className="bg-white h-[440px] sm:h-[440px] flex flex-col justify-between p-6 rounded-xl shadow border border-gray-200 animate-pulse">
          <div className="w-full h-40 bg-gray-300 rounded-md"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
          <div className="h-10 bg-gray-300 rounded mt-4"></div>
        </div>
      </div>
    );
  };
  
  export default RecomendedSkeletonCard;
  