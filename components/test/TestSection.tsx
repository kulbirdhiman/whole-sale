import Image from "next/image";
import TabComponent from "../globals/TabComponent";
const items = [
  { id: 1, title: 'Car Stereo with SatNav for AUDI A4 2009 – 2015 | Version 6 | 9inch 2G Low', description: 'This is the first item.', price: '$99', image: '/1740980989367_15.webp' },
  { id: 2, title: 'Item Two', description: 'This is the second item.', price: '$149', image: '/1740980989367_15.webp' },
  { id: 3, title: 'Item Three', description: 'This is the third item.', price: '$199', image: '/1740980989367_15.webp' },
  { id: 4, title: 'Item Four', description: 'This is the fourth item.', price: '$249', image: '/1740980989367_15.webp' },
  { id: 5, title: 'Item Five', description: 'This is the fifth item.', price: '$299', image: '/1740980989367_15.webp' },
  { id: 6, title: 'Item Six', description: 'This is the sixth item.', price: '$349', image: '/1740980989367_15.webp' },
];

export default function TestSection() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg ">

       <div>
       <div 
          className="relative rounded-xl my-2 overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group h-80"
        >
          {/* Background Image */}
          <Image src="/carplay.jpg" alt="{item.title}" height={200} width={300} className="absolute inset-0 w-full h-full object-cover" />

          {/* Black Overlay for better visibility */}
          {/* <div className="absolute inset-0 bg-gray-200 bg-opacity-10"></div> */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
            <h3 className="text-2xl font-bold line-clamp-2 w-[70%] text-center">hello</h3>
            <p className="text-lg font-semibold mt-1">price :555</p>
            {/* <p className="text-sm mt-1 text-gray-200 text-center">{item.description}</p> */}
            <button className="mt-4 group-hover:opacity-100 opacity-0 px-6 py-3 bg-blue-500 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all shadow-lg">Buy Now</button>
          </div>
        </div>
        <div 
          className="relative rounded-xl my-2 overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group h-80"
        >
          {/* Background Image */}
          <Image src="/carplay.jpg" alt="{item.title}" height={200} width={300} className="absolute inset-0 w-full h-full object-cover" />

          {/* Black Overlay for better visibility */}
          {/* <div className="absolute inset-0 bg-gray-200 bg-opacity-10"></div> */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
            <h3 className="text-2xl font-bold line-clamp-2 w-[70%] text-center">hello</h3>
            <p className="text-lg font-semibold mt-1">price :555</p>
            {/* <p className="text-sm mt-1 text-gray-200 text-center">{item.description}</p> */}
            <button className="mt-4 group-hover:opacity-100 opacity-0 px-6 py-3 bg-blue-500 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all shadow-lg">Buy Now</button>
          </div>
        </div>
       </div>
      <div>
      <div 
          className="relative rounded-xl my-2 overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group h-full"
        >
          {/* Background Image */}
          <Image src="/carplay.jpg" alt="{item.title}" height={200} width={300} className="absolute inset-0 w-full h-full object-cover" />

          {/* Black Overlay for better visibility */}
          {/* <div className="absolute inset-0 bg-gray-200 bg-opacity-10"></div> */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
            <h3 className="text-2xl font-bold line-clamp-2 w-[70%] text-center">hello</h3>
            <p className="text-lg font-semibold mt-1">price :555</p>
            {/* <p className="text-sm mt-1 text-gray-200 text-center">{item.description}</p> */}
            <button className="mt-4 group-hover:opacity-100 opacity-0 px-6 py-3 bg-blue-500 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all shadow-lg">Buy Now</button>
          </div>
        </div>
      </div>
      <div>
      <div 
          className="relative rounded-xl my-2 overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group h-80"
        >
          {/* Background Image */}
          <Image src="/carplay.jpg" alt="{item.title}" height={200} width={300} className="absolute inset-0 w-full h-full object-cover" />

          {/* Black Overlay for better visibility */}
          {/* <div className="absolute inset-0 bg-gray-200 bg-opacity-10"></div> */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
            <h3 className="text-2xl font-bold line-clamp-2 w-[70%] text-center">hello</h3>
            <p className="text-lg font-semibold mt-1">price :555</p>
            {/* <p className="text-sm mt-1 text-gray-200 text-center">{item.description}</p> */}
            <button className="mt-4 group-hover:opacity-100 opacity-0 px-6 py-3 bg-blue-500 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all shadow-lg">Buy Now</button>
          </div>
        </div> <div 
          className="relative rounded-xl my-2 overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group h-80"
        >
          {/* Background Image */}
          <Image src="/carplay.jpg" alt="{item.title}" height={200} width={300} className="absolute inset-0 w-full h-full object-cover" />

          {/* Black Overlay for better visibility */}
          {/* <div className="absolute inset-0 bg-gray-200 bg-opacity-10"></div> */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content Layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
            <h3 className="text-2xl font-bold line-clamp-2 w-[70%] text-center">hello</h3>
            <p className="text-lg font-semibold mt-1">price :555</p>
            {/* <p className="text-sm mt-1 text-gray-200 text-center">{item.description}</p> */}
            <button className="mt-4 group-hover:opacity-100 opacity-0 px-6 py-3 bg-blue-500 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all shadow-lg">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
