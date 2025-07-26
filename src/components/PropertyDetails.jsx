// src/components/PropertyDetails.jsx

import React from 'react';
import Image from 'next/image';

// Icons for Owner Card
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

// Icons for Apartment Card
import { IoLocation } from "react-icons/io5";
import { TbBed, TbBath } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { TfiRulerAlt } from "react-icons/tfi";

// --- Sub-component for Apartment Features ---
const FeatureItem = ({ icon, value, unit }) => (
  <div className="bg-[#F0F4FA] border border-slate-200/90 rounded-xl p-3 text-center flex flex-col items-center justify-center gap-2 h-full">
    <div className="text-[#3A53A0]">{icon}</div>
    <div className="flex items-end gap-1">
      <span className="text-xl font-bold text-[#3A53A0] leading-none">{value}</span>
      <span className="text-[10px] text-gray-500 font-semibold leading-tight">{unit}</span>
    </div>
  </div>
);

// --- Owner Profile Card Component ---
const OwnerProfileCard = ({ owner }) => {
  return (
    <div>
      <h2 className="text-[24px] font-bold mb-4 text-[#121828]">
        Owned <span className="text-[#2450A0] text-[24px]">by</span>
      </h2>
      
      {/* Main card container - padding is now uniform */}
      <div className="bg-white rounded-2xl  p-2">
        
        {/* --- MODIFIED SECTION START --- */}
        {/* New flex container for image and contact info */}
        <div className="flex flex-row items-center gap-4 mb-6">

          {/* 1. Profile Image (no longer absolute) */}
          <div className="flex-shrink-0">
            <img
              src={owner.image}
              alt={owner.name}
              width={96}
              height={96}
              className="rounded-full object-cover border-4 border-white"
            />
          </div>

          {/* 2. Contact Info (Phone & Email) */}
          <div className="flex flex-col gap-3 w-full">
            <div className="w-full flex items-center gap-3 bg-gray-100/70 py-2.5 px-4 rounded-full">
              <PhoneIcon className="h-5 w-5 text-gray-700" />
              <span className="text-[#20202099] text-[14px] font-medium">{owner.phone}</span>
            </div>
            <div className="w-full flex items-center gap-3 bg-gray-100/70 py-2.5 px-4 rounded-full">
              <EnvelopeIcon className="h-5 w-5 text-gray-700" />
              <span className="text-[#20202099] text-[14px] font-medium">{owner.email}</span>
            </div>
          </div>
          
        </div>
        {/* --- MODIFIED SECTION END --- */}

        {/* Bottom Section: Name, Location, and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-[18px] font-bold text-[#000000]">{owner.name}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPinIcon className="h-5 w-5 text-gray-500" />
              <p className="text-[#20202099] text-[14px]">{owner.location}</p>
            </div>
          </div>
          <button className="w-full sm:w-auto bg-[#2450A0] hover:bg-blue-700 text-white text-[14px] font-bold py-3 px-6 rounded-full transition-colors">
            SEE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};


// --- Apartment Card Component (Modified to accept props) ---
const ApartmentCard = ({ apartment }) => {
  return (
   <div> 
  <h1 className="text-[24px] font-bold text-[#121828] mb-4" style={{ fontFamily: '"Nunito Sans"' }}>
    Apartment
  </h1>

  <div className="bg-white rounded-3xl p-6 flex flex-col gap-6">
  {/* Image + Title + Location in same row */}
  <div className="flex items-center gap-4">
    <div className="relative p-1.5 bg-white rounded-full shadow-md flex-shrink-0">
      <img
        className="w-20 h-20 rounded-full object-cover"
        src={apartment.image}
        alt={apartment.name}
      />
    </div>

    <div>
      <h2 className="text-[18px] font-bold text-[#000000]">{apartment.name}</h2>
      <div className="flex items-center text-gray-500 mt-1">
        <IoLocation className="mr-1.5 text-[#3A53A0]" size={18} />
        <span className="text-[14px] text-[#20202099]">{apartment.location}</span>
      </div>
    </div>
  </div>

  {/* Features */}
  <div className="flex flex-wrap  my-4 justify-between">
  <FeatureItem icon={<TbBed size={24} />} value={apartment.features.bhk} unit="BHK" />
  <FeatureItem icon={<TbBath size={24} />} value={apartment.features.bathrooms} unit="BA" />
  <FeatureItem icon={<FaShower size={20} />} value={apartment.features.showers} unit="BA" />
  <FeatureItem icon={<TfiRulerAlt size={22} />} value={apartment.features.area} unit="m²" />
</div>


  {/* Button */}
  <div className="mt-auto">
    {/* <button className="bg-[#3A53A0] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#314685] transition-colors w-full sm:w-auto sm:float-right">
      View Details
    </button> */}
  </div>
</div>

</div>

  );
};


// --- Main Parent Component for Layout ---
const PropertyDetails = ({ owner, apartment }) => {
  return (
    <div className="p-4 md:p-8 font-sans">
      {/* 
        Layout Logic:
        - `flex`: Enables flexbox.
        - `flex-col`: Default layout is a column (for mobile).
        - `lg:flex-row`: On large screens (desktop), layout becomes a row.
        - `lg:items-start`: Aligns items to the top in desktop view.
        - `gap-8`: Adds space between the two cards.
      */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 ">
        
        {/* Owner Card Wrapper: Takes 1/3 width on desktop */}
        <div className="w-full lg:w-1/2 shadow-none lg: ">
          <OwnerProfileCard owner={owner} />
        </div>

        {/* Apartment Card Wrapper: Takes 2/3 width on desktop */}
        <div className="w-full lg:w-1/2 ">
          <ApartmentCard apartment={apartment} />
        </div>
        
      </div>
    </div>
  );
};

export default PropertyDetails;