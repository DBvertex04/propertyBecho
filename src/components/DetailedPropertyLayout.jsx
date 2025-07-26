// // src/components/DetailedPropertyLayout.jsx

// import React, { useState } from 'react';
// import {
//   MapPinIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
//   CheckCircleIcon,
//   HeartIcon,
//   ArrowLeftIcon,
//   ArrowRightIcon
// } from '@heroicons/react/24/solid';

// // ===================================================================
// // SECTION 1: Properties in Same Apartment
// // ===================================================================

// // Sub-component for a single property card
// function PropertyCard({ address, city, state, location, size, bedrooms, imgSrc }) {
//   return (
//     <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 p-6 border-b border-gray-300 last:border-b-0 items-center">
//       <img
//         src={imgSrc}
//         alt="property"
//         //  style={{ width: '60px', height: '180px' }}
//         className="w-35 sm:w-[120px] h-35 object-cover flex-shrink-0 rounded-[20px]"
//       />
//       <div>
//         <p className="font-semibold text-base">{address}, {city} {state}</p>
//         <p className="flex items-center text-gray-500 text-sm mt-1">
//           <MapPinIcon className="h-5 w-5 mr-2" /> {location}
//         </p>
//         <p className="text-blue-600 text-sm mt-1">{size}</p>
//         <p className="text-gray-400 text-sm mt-1">{bedrooms}</p>
//       </div>
//     </div>
//   );
// }

// // Main component for the first section
// const PropertiesInApartmentSection = ({ propertiesData }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md h-full">
//       <h2 className="font-bold text-[24px] px-6 py-5 text-[#121828]" style={{ fontFamily: '"Nunito Sans"' }}>
//         Properties in same <span className="text-[#2450A0]">Apartments</span>
//       </h2>
//       {propertiesData.map((property, idx) => (
//         <PropertyCard key={idx} {...property} />
//       ))}
//     </div>
//   );
// };


// // ===================================================================
// // SECTION 2: Facts & Features
// // ===================================================================

// // Sub-component for toggleable sections
// function SectionToggle({ title, children }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-gray-200 py-4 last:border-b-0">
//       <div
//         className="flex justify-between items-center cursor-pointer px-4"
//         onClick={() => setOpen(!open)}
//       >
//         <h3 className="text-lg font-semibold">{title}</h3>
//         {open ? <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : <ChevronDownIcon className="h-5 w-5 text-gray-500" />}
//       </div>
//       {open && <div className="mt-4 px-4">{children}</div>}
//     </div>
//   );
// }

// // Sub-component for feature badges
// function Badge({ label }) {
//   return (
//     <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-800">
//       <CheckCircleIcon className="h-5 w-5 text-green-600" />
//       {label}
//     </span>
//   );
// }

// // Main component for the second section
// function FactsSection() {
//   return (
//     <div className="bg-white rounded-lg shadow-md h-full p-4">
//       <h2 className="text-[#121828] font-bold text-[24px] mb-4">Facts & Features</h2>

//       {/* Interior Section */}
//       <div className="mb-4">
//         <p className="font-semibold text-xl text-[#2450A0] mb-2">Interior</p>
//         <div className="bg-white rounded-xl border border-gray-200">
//           <SectionToggle title="Bedrooms & bathrooms">
//             <div className="flex flex-col gap-2">
//               <Badge label="Bedrooms: 2" />
//               <Badge label="Bathrooms: 1" />
//               <Badge label="Full bathrooms: 1" />
//             </div>
//           </SectionToggle>
//           <SectionToggle title="Dining room" />
//           <SectionToggle title="Living room" />
//         </div>
//       </div>

//       {/* Construction Section */}
//       <div>
//         <p className="font-semibold text-xl text-[#2450A0] mb-2">Construction</p>
//         <div className="bg-white rounded-xl border border-gray-200">
//           <SectionToggle title="Materials" />
//           <SectionToggle title="Year Built" />
//         </div>
//       </div>
//       {/* Add other sections like Property if needed */}
//     </div>
//   );
// }


// // ===================================================================
// // SECTION 3: Similar Places
// // ===================================================================

// // Sub-component for info badges in the similar places card
// function InfoBadge({ text }) {
//   return (
//     <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-blue-700 font-medium">
//       {text}
//     </span>
//   );
// }

// // Main component for the third section
// function SimilarPlacesSection() {
//   return (
//     <div className="bg-white rounded-lg shadow-md h-full p-6">
//       {/* Header */}
//       <div className="mb-6">
//         <h2 className="text-[24px] text-[#121828] font-bold">Discover <span className="text-[#2450A0]">Similar Places</span></h2>
//         <p className="text-gray-500 text-sm max-w-md mt-1">
//           Duis vel interdum elit. Vivamus vel risus est.
//         </p>
//       </div>

//       {/* Card */}
//        <div className="bg-white rounded-2xl border border-gray-200 p-4">
//         {/* Image */}
//         <img
//           src="/similarsection.png"
//           alt="house"
//           className="rounded-xl w-full h-48 object-cover" // Image takes full width
//         />

//         {/* Content - now appears below the image */}
//         <div className="mt-4 relative"> {/* mt-4 adds space between image and content */}
//           <h3 className="text-lg font-bold text-[#0A0909]">$280,000</h3>
//           <p className="text-sm text-[#000104CC] mb-3">By Owner</p>
//           <div className="flex flex-wrap gap-2 mb-4">
//             <InfoBadge text="2 BHK" />
//             <InfoBadge text="2 BA" />
//             <InfoBadge text="24 sqft" />
//           </div>
//           <div className="flex items-center text-gray-600 text-sm">
//             <MapPinIcon className="w-4 h-4 mr-1 text-[#0A090999]" />
//             1030 Spruce St, Aurora, IL
//           </div>
//           <button className="absolute top-0 right-0">
//             <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500" />
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// }


// // ===================================================================
// // MAIN LAYOUT COMPONENT (Parent)
// // ===================================================================
// const DetailedPropertyLayout = ({ propertiesData }) => {
//   return (
//     <div className="p-4 md:p-8 font-sans bg-gray-50">
//       {/* 
//         Layout Logic:
//         - `flex flex-col`: Stacks items vertically on mobile (default).
//         - `lg:flex-row`: Switches to a horizontal row on large screens.
//         - `gap-8`: Adds space between the items in both row and column layouts.
//       */}
//       <div className="flex flex-col lg:flex-row gap-8">

//         {/* Column 1: Properties List */}
//         <div className="w-full lg:w-1/3">
//           <PropertiesInApartmentSection propertiesData={propertiesData} />
//         </div>

//         {/* Column 2: Facts & Features */}
//         <div className="w-full lg:w-1/3">
//           <FactsSection />
//         </div>

//         {/* Column 3: Similar Places */}
//         <div className="w-full lg:w-1/3">
//           <SimilarPlacesSection />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DetailedPropertyLayout;
// src/components/DetailedPropertyLayout.jsx

import React, { useState } from 'react';
import {
  MapPinIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleIcon,
  HeartIcon,
} from '@heroicons/react/24/solid';

// ===================================================================
// SECTION 1: Properties in Same Apartment
// ===================================================================

// Sub-component for a single property card
function PropertyCard({ address, city, state, location, size, bedrooms, imgSrc }) {
  return (
    <div className="flex flex-row items-start gap-4 p-4 border-b border-gray-300 last:border-b-0">
      {/* Image */}
      <img
        src={imgSrc}
        alt="property"
        className="w-[80px] h-[80px] rounded-xl object-cover flex-shrink-0"
      />

      {/* Details */}
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm text-black leading-snug">
          {address}, {city} {state}
        </p>
        <p className="flex items-center text-gray-500 text-sm">
          <MapPinIcon className="h-4 w-4 mr-1" /> {location}
        </p>
        <div className="flex gap-3 text-sm">
          <p className="text-blue-600">{size}</p>
          <p className="text-gray-400">{bedrooms}</p>
        </div>
      </div>
    </div>
  );
}

// Main component for the first section
const PropertiesInApartmentSection = ({ propertiesData }) => {
  return (
    <div className="bg-white rounded-lg shadow-md h-full">
      <h2 className="font-bold text-[24px] px-6 py-5 text-[#121828]" style={{ fontFamily: '"Nunito Sans"' }}>
        Properties in same <span className="text-[#2450A0]">Apartments</span>
      </h2>
      {propertiesData.map((property, idx) => (
        <PropertyCard key={idx} {...property} />
      ))}
    </div>
  );
};

// ===================================================================
// SECTION 2: Facts & Features
// ===================================================================

function SectionToggle({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4 last:border-b-0">
      <div
        className="flex justify-between items-center cursor-pointer px-4"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {open ? <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : <ChevronDownIcon className="h-5 w-5 text-gray-500" />}
      </div>
      {open && <div className="mt-4 px-4">{children}</div>}
    </div>
  );
}

function Badge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-800">
      <CheckCircleIcon className="h-5 w-5 text-green-600" />
      {label}
    </span>
  );
}

function FactsSection() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    // <div className="bg-white rounded-lg shadow-md h-full p-4">
    //   {/* Facts & Features header with right-aligned icon */}
    //   <div className="flex justify-between items-center mb-4">
    //     <h2 className="text-[#121828] font-bold text-[24px]">
    //       Facts & Features<span className="text-[#2450A0]"> :</span>
    //     </h2>
    //     <img
    //       src="/arrow-down (1).png"
    //       alt="toggle"
    //       className="w-6 h-6 p-1 bg-gray-100 rounded-full"
    //     />
    //   </div>

    //   {/* Interior Section */}
    //   <div className="mb-4">
    //     <p className="font-bold text-[24px] text-[#121828] mb-2">Interior</p>
    //     <div className="bg-white rounded-xl border border-gray-200">
    //       <SectionToggle title="Bedrooms & bathrooms">
    //         <div className="flex flex-col gap-2">
    //           <Badge label="Bedrooms: 2" />
    //           <Badge label="Bathrooms: 1" />
    //           <Badge label="Full bathrooms: 1" />
    //         </div>
    //       </SectionToggle>
    //       <SectionToggle title="Dining room" />
    //       <SectionToggle title="Living room" />
    //     </div>
    //   </div>

    //   {/* Construction Section */}
    //   <div>
    //     <p className="font-semibold text-xl text-[#2450A0] mb-2">Construction</p>
    //     <div className="bg-white rounded-xl border border-gray-200">
    //       <SectionToggle title="Materials" />
    //       <SectionToggle title="Year Built" />
    //     </div>
    //   </div>
    // </div>
     <div className="bg-white rounded-lg shadow-md h-full p-4">
      {/* Header with clickable arrow */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#121828] font-bold text-[24px]">
          Facts & Features<span className="text-[#2450A0]"> :</span>
        </h2>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src="/arrow-down (1).png"
          alt="toggle"
          className={`w-6 h-6 p-1 bg-gray-100 rounded-full cursor-pointer transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {/* Conditionally rendered section */}
      {isOpen && (
        <>
          {/* Interior Section */}
          <div className="mb-4">
            <p className="font-bold text-[24px] text-[#121828] mb-2">Interior</p>
            <div className="bg-white rounded-xl border border-gray-200">
              <SectionToggle title="Bedrooms & bathrooms">
                <div className="flex flex-col gap-2">
                  <Badge label="Bedrooms: 2" />
                  <Badge label="Bathrooms: 1" />
                  <Badge label="Full bathrooms: 1" />
                </div>
              </SectionToggle>
              <SectionToggle title="Dining room" />
              <SectionToggle title="Living room" />
            </div>
          </div>

          {/* Construction Section */}
          <div>
            <p className="font-semibold text-xl text-[#2450A0] mb-2">Construction</p>
            <div className="bg-white rounded-xl border border-gray-200">
              <SectionToggle title="Materials" />
              <SectionToggle title="Year Built" />
            </div>
          </div>
        </>
      )}
    </div>

  );
}

// ===================================================================
// SECTION 3: Similar Places
// ===================================================================

function InfoBadge({ text }) {
  return (
    <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-blue-700 font-medium">
      {text}
    </span>
  );
}



const similarPlacesData = [
  {
    id: 1,
    price: '$280,000',
    by: 'By Owner',
    badges: ['2 BHK', '2 BA', '24 sqft'],
    location: '1030 Spruce St, Aurora, IL',
    image: '/similarsections.png',
  },
  {
    id: 2,
    price: '$310,000',
    by: 'By Agent',
    badges: ['3 BHK', '2 BA', '28 sqft'],
    location: '720 Oak Dr, Naperville, IL',
    image: '/similarsections.png',
  },
];
const combinedPlaces = [...similarPlacesData, ...similarPlacesData];

function SimilarPlacesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? combinedPlaces.length - 1 : prev - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prev) =>
      prev === combinedPlaces.length - 1 ? 0 : prev + 1
    );
  };

  return (

    //     <div className="bg-white rounded-lg shadow-md h-full p-6">
    //       {/* <div className="mb-6">
    //         <h2 className="text-[24px] text-[#121828] font-bold">
    //           Discover <span className="text-[#2450A0]">Similar Places</span>
    //         </h2>
    //         <p className="text-gray-500 text-sm max-w-md mt-1">
    //           Duis vel interdum elit. Vivamus vel risus est.
    //         </p>
    //       </div> */}
    //       <div className="mb-6 flex items-center justify-between">
    //   {/* Heading (Discover + Similar Places) */}
    //   <h2 className="text-[24px] text-[#121828] font-bold">
    //     Discover <span className="text-[#2450A0]">Similar Places</span>
    //   </h2>

    //   {/* Right Side Icons */}
    //   <div className="flex gap-2">
    //     <button className="w-10 h-10 flex items-center justify-center border border-[#2450A0] rounded-md">
    //       <img src="/direct.png" alt="Left Arrow" className="w-4 h-4" />
    //     </button>
    //     <button className="w-10 h-10 flex items-center justify-center bg-[#2450A0] rounded-md">
    //       <img src="/direct-right (1).png" alt="Right Arrow" className="w-4 h-4" />
    //     </button>
    //   </div>
    // </div>


    //       <div className="bg-white rounded-2xl border border-gray-200 p-4">
    //         <img
    //           src="/similarsection.png"
    //           alt="house"
    //           className="rounded-xl w-full h-48 object-cover"
    //         />

    //         <div className="mt-4 relative">
    //           <h3 className="text-lg font-bold text-[#0A0909]">$280,000</h3>
    //           <p className="text-sm text-[#000104CC] mb-3">By Owner</p>
    //           <div className="flex flex-wrap gap-2 mb-4">
    //             <InfoBadge text="2 BHK" />
    //             <InfoBadge text="2 BA" />
    //             <InfoBadge text="24 sqft" />
    //           </div>
    //           <div className="flex items-center text-gray-600 text-sm">
    //             <img src ="location.png" className="w-4 h-4 mr-1 text-[#0A090999]" />
    //             1030 Spruce St, Aurora, IL
    //           </div>
    //           <button className="absolute top-0 right-0">
    //             <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    <div className="bg-white rounded-lg shadow-md h-full p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[24px] text-[#121828] font-bold">
          Discover <span className="text-[#2450A0]">Similar Places</span>
        </h2>

        <div className="flex gap-2">
          <button
            onClick={slideLeft}
            className="w-10 h-10 flex items-center justify-center border border-[#2450A0] rounded-md"
          >
            <img src="/direct.png" alt="Left Arrow" className="w-4 h-4" />
          </button>
          <button
            onClick={slideRight}
            className="w-10 h-10 flex items-center justify-center bg-[#2450A0] rounded-md"
          >
            <img src="/direct-right (1).png" alt="Right Arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slider container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${combinedPlaces.length * 100}%` }}
        >
          {combinedPlaces.map((place, index) => (
            <div key={index} className="w-full md:w-1/1  px-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <img
                  src={place.image}
                  alt="house"
                  className="rounded-xl w-full h-48 object-cover"
                />
                <div className="mt-4 relative">
                  <h3 className="text-lg font-bold text-[#0A0909]">
                    {place.price}
                  </h3>
                  <p className="text-sm text-[#000104CC] mb-3">{place.by}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {place.badges.map((badge, i) => (
                      <InfoBadge key={i} text={badge} />
                    ))}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <img
                      src="location.png"
                      className="w-4 h-4 mr-1 text-[#0A090999]"
                    />
                    {place.location}
                  </div>
                  <button className="absolute top-0 right-0">
                    <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===================================================================
// MAIN LAYOUT COMPONENT
// ===================================================================

const DetailedPropertyLayout = ({ propertiesData }) => {
  return (
    <div className="p-4 md:p-8 font-sans bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <PropertiesInApartmentSection propertiesData={propertiesData} />
        </div>
        <div className="w-full lg:w-1/3">
          <FactsSection />
        </div>
        <div className="w-full lg:w-1/3">
          <SimilarPlacesSection />
        </div>
      </div>
    </div>
  );
};

export default DetailedPropertyLayout;
