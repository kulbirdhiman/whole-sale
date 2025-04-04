import React from "react";
import Image from "next/image";
import { ArrowBigLeftIcon, ArrowBigRightDashIcon } from "lucide-react";

const Card = ({title}) => {
  return (
    <div className=" md:py-2 bg-white rounded- py-3 shadow-lg mt-2 rounded-md text-black w-[93%] md:w-[24%]  ">
 
      <div className=" w-[90%] mx-auto">
      <p className="text-blue-500 text-md text-start pt-2 flex justify-between">{title} <span><ArrowBigRightDashIcon/></span> </p>
        <div className="flex flex-wrap justify-evenly">
          
          <div className=" w-[47%] shadow-md p-2 py-4 mt-2">
            <Image
              className="m-0"
              src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/dashcam-scaled-1-1.jpg"
              alt="Car Audio System"
              width={130}
              height={200}
            />
            <p className="font-light  text-xs">Dash Cam</p>
          </div>
          <div className="border shadow-md py-4  w-[47%] p-2 mt-2">
            <Image
              className="m-0"
              src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/DVD-2.jpg"
              alt="Car Audio System"
              width={130}
              height={200}
            />
            <p className="font-light text-xs">Rear Entertainment</p>
          </div>
          <div className="border shadow-md py-4 w-[47%] p-2 mt-2">
            <Image
              className="m-0"
              src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/BMW-5-Series-F10.jpg"
              alt="Car Audio System"
              width={130}
              height={200}
            />
            <p className="font-light  text-xs">BMW headunit</p>
          </div>
          <div className=" w-[47%] shadow-md p-2 py-4 mt-2 text-xs">
            <Image
              className="m-0"
              src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/mkiisz.jpg"
              alt="Car Audio System"
              width={130}
              height={200}
            />
            <p className="font-light  text-xs">BMW headunit</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

const Accesories = () => {
  return (
    <>
      <div className="flex bg-gray-300 md:px-3 my-3 flex-wrap justify-around w-[100%] py-4 mx-auto">
        <Card title={"Find your favourite accessorious"}  />
        <Card title={"Choose your car battery"} />
        <Card title={"Wiring harness ISO"} />
        <Card title={"Frames and fascias"} />
      </div>
    </>
  );
};
export default Accesories;
