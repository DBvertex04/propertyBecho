// फ़ाइल: components/PropertyInfoBar.js
'use client';

import {
  HeartIcon,
  ShareIcon,
  ExclamationCircleIcon,
  MapPinIcon,
  ArrowsPointingOutIcon
} from '@heroicons/react/24/outline';

const BedIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

const BathIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25V7.5a3.75 3.75 0 013.75-3.75h3a3.75 3.75 0 013.75 3.75v6.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const propertyDetails = {
  price: 280000,
  likes: 25,
  bhk: 2,
  bath: 2,
  sqft: 26, 
  address: '1030 Spruce St, Aurora, IL, 60506',
};
// ---------------------------------------------


const PropertyInfoBar = ({ property }) => {
  return (
    // <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 ">
      
    //   <div className="flex justify-between items-center flex-wrap gap-4">
    //     <div>
    //       <h1 className="text-[20px] font-bold text-[#2450A0]">${propertyDetails.price}</h1>
    //     </div>

    //     <div className="flex items-center gap-3">
    //       <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full text-sm">
    //         <HeartIcon className="h-5 w-5" />
    //         <span>{property.likes}k</span>
    //       </button>
    //       <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full">
    //         <img src ="share-08.png" className="h-5 w-5 text-gray-800" />
    //       </button>
    //       <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full">
    //         <img src ="warning-2.png" className="h-5 w-5 text-gray-800" />
    //       </button>
    //     </div>
    //   </div>

    //   <div className="flex flex-wrap gap-4 my-6">
    //     {/* Bed */}
    //     <div className="flex items-center gap-3 bg-gray-100 rounded-full py-2 px-4">
    //       <img src="Bed icon.png" className="h-6 w-6 text-gray-600" />
    //       <span className="font-bold text-gray-800">{property.bhk}</span>
    //       <span className="text-gray-600">BHK</span>
    //     </div>
    //     <div className="flex items-center gap-3 bg-gray-100 rounded-full py-2 px-4">
    //       < img src="bathtub-01.png" className="h-6 w-6 text-gray-600" />
    //       <span className="font-bold text-gray-800">{property.bath}</span>
    //       <span className="text-gray-600">BA</span>
    //     </div>
    //     <div className="flex items-center gap-3 bg-gray-100 rounded-full py-2 px-4">
    //       <img src="elements.png" className="h-6 w-6 text-gray-600" />
    //       <span  className="font-bold text-gray-800">{property.sqft}</span>
    //       <span className="text-gray-600">sqft</span>
    //     </div>
    //   </div>

    //   <div className="border border-gray-200 rounded-full p-3 flex items-center gap-3">
    //     <MapPinIcon className="h-6 w-6 text-gray-500 flex-shrink-0" />
    //     <span className="text-gray-700"style={{ fontFamily: '"Poppins", "Nunito Sans", sans-serif' }}>{property.address}</span>
    //   </div>
    // </div>
   <div
  className="bg-white rounded-2xl p-4 shadow-md border border-gray-200 w-full ml-0 sm:ml-[90px]"
>
  {/* Top Row: Price + Icons */}
  <div className="flex justify-between items-center gap-2 flex-nowrap">
    {/* Price */}
    <h1 className="text-[20px] font-bold text-[#2450A0] whitespace-nowrap">${propertyDetails.price}</h1>

    {/* Icons */}
    <div className="flex items-center gap-2 flex-nowrap">
      <button className="flex items-center gap-1 bg-gray-100  hover:bg-gray-200 text-gray-800 font-medium py-1 px-3 rounded-full text-xs">
        <HeartIcon className="h-6 w-6" />
        <span>{property.likes}k</span>
      </button>
      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
        <img src="/share-08 (1).png" alt="share" className="h-6 w-6" />
      </button>
      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
        <img src="/warning-2 (1).png" alt="warning" className="h-6 w-6" />
      </button>
    </div>
  </div>

  {/* Property Features: BHK, BA, Sqft */}
  <div className="flex justify-between items-center gap-2 my-4 flex-nowrap text-sm">
    {/* BHK */}
    <div className="flex items-center gap-1 bg-gray-100 rounded-full py-1 px-3">
      <img src="Bed icon.png" alt="bed" className="h-6 w-6" />
      <span className="font-semibold text-[#2450A0]">{property.bhk}</span>
      <span className="text-gray-600">BHK</span>
    </div>

    {/* Bath */}
    <div className="flex items-center gap-1 bg-gray-100 rounded-full py-1 px-3">
      <img src="bathtub-01.png" alt="bath" className="h-6 w-6" />
      <span className="font-semibold text-[#2450A0]">{property.bath}</span>
      <span className="text-gray-600">BA</span>
    </div>

    {/* Sqft */}
    <div className="flex items-center gap-1 bg-gray-100 rounded-full py-1 px-3">
      <img src="elements.png" alt="sqft" className="h-6 w-6" />
      <span className="font-semibold text-[#2450A0]">{property.sqft}</span>
      <span className="text-gray-600">sqft</span>
    </div>
  </div>

  {/* Address */}
  <div className="border border-gray-200 rounded-full p-3 flex items-center gap-2 overflow-hidden">
    <img src="location.png" className="h-6 w-6 text-gray-500 flex-shrink-0" />
    <span className="text-gray-700 text-sm truncate" style={{ fontFamily: '"Poppins", "Nunito Sans", sans-serif' }}>
      {property.address}
    </span>
  </div>
</div>

  );
};

export default PropertyInfoBar;