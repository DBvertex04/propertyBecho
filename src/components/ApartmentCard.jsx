// src/components/ApartmentCardWeb.jsx

import React from 'react';
import { IoLocation } from "react-icons/io5";
import { TbBed, TbBath } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { TfiRulerAlt } from "react-icons/tfi";

// Reusable component for feature items like BHK, BA, Area, etc.
const FeatureItem = ({ icon, value, unit }) => (
  <div className="bg-[#F0F4FA] border border-slate-200/90 rounded-xl p-3 text-center flex flex-col items-center justify-center gap-2 h-full">
    <div className="text-[#3A53A0]">{icon}</div>
    <div className="flex items-end gap-1">
      <span className="text-xl font-bold text-[#3A53A0] leading-none">{value}</span>
      <span className="text-[10px] text-gray-500 font-semibold leading-tight">{unit}</span>
    </div>
  </div>
);

const ApartmentCardWeb = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center min-h-screen font-sans">
      
      <div className="w-full max-w-4xl">
        <h1 className="text-[24px] font-bold text-[#121828] mb-6"style={{ fontFamily: '"Nunito Sans"' }}>Apartment</h1>

        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
          
        <div className="relative p-1.5 bg-white rounded-full shadow-md">
              <Image
  src="/apartment.png"
  alt="Ilahi Apartment"
  width={80} // w-20 = 80px
  height={80} // h-20 = 80px
  className="rounded-full object-cover"
/>

            </div>

          <div className="flex flex-col justify-between h-full w-full self-stretch">
            
            <div>
              <h2 className="text-[18px] font-bold text-[#000000]">Ilahi Apartment</h2>
              <div className="flex items-center text-gray-500 mt-1">
                <IoLocation className="mr-1.5 text-[#3A53A0]" size={18} />
                <span className="text-[14px] text-[#20202099] ">Aurora, IL</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
              <FeatureItem icon={<TbBed size={24} />} value="2" unit="BHK" />
              <FeatureItem icon={<TbBath size={24} />} value="4" unit="BA" />
              <FeatureItem icon={<FaShower size={20} />} value="4" unit="BA" />
              <FeatureItem icon={<TfiRulerAlt size={22} />} value="24" unit="m²" />
            </div>

            <div className="mt-auto">
                <button className="bg-[#3A53A0] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#314685] transition-colors w-full sm:w-auto sm:float-right">
                    View Details
                </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default ApartmentCardWeb;
