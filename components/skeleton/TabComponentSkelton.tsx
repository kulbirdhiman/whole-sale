import React from "react";

const TabComponent = () => {
  return (
    <div className="tabs-container p-3 max-w-4xl mx-auto">
      <div className="tab-header h-9 w-full bg-gray-200"></div>
      
      <div className="tab-buttons flex justify-center space-x-2 border-b pb-2 my-2">
        <div className="tab-button h-8 w-20 bg-gray-300"></div>
        <div className="tab-button h-8 w-20 bg-gray-300"></div>
        <div className="tab-button h-8 w-20 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default TabComponent;
