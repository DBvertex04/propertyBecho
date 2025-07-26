// // // फ़ाइल: components/MainFeatures.js

// // import { ChevronDownIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
// // import FeatureCard from './FeatureCard'; // हमारे FeatureCard को इम्पोर्ट करें

// // const featuresData = [
// //   { line1: 'Single Family', line2: 'Residence', icon: <BuildingOffice2Icon className="h-8 w-8 text-[#C4D9FF80]" />, subLabel: '20 x 10' },
// //   { line1: 'Built in', line2: '1929', icon: <BuildingOffice2Icon className="h-8 w-8 text-[#C4D9FF80]" /> },
// //   { line1: '7,500 Square', line2: 'Feet Lot', icon: <BuildingOffice2Icon className="h-8 w-8 text-[#C4D9FF80]" /> },
// //   { line1: '$273,400', line2: 'Zestimate®', icon: <BuildingOffice2Icon className="h-8 w-8 text-[#C4D9FF80]" /> },
// //   { line1: '$343 /', line2: 'square fit', icon: <BuildingOffice2Icon className="h-8 w-8 text-[#C4D9FF80]" /> },
// //   { line1: '$ 255', line2: 'HOA', icon: <BuildingOffice2Icon className="h-8 w-8 text-[#C4D9FF80]" /> },
// // ];

// // const MainFeatures = () => {
// //   return (
// //     <div>
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-[24px] font-bold "style={{ fontFamily: '"Nunito Sans"' }} >
// //           <span className="text-[#2450A0]">Main</span > Features
// //         </h2>
// //         <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2">
// //           <img src="/call.png" className="h-6 w-6 text-gray-700" />
// //         </button>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {featuresData.map((feature, index) => (
// //           <FeatureCard
// //             key={index}
// //             line1={feature.line1}
// //             line2={feature.line2}
// //             icon={feature.icon}
// //             subLabel={feature.subLabel}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainFeatures;
// // फ़ाइल: components/MainFeatures.js

// import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Solid icon for better visibility
// import FeatureCard from './FeatureCard'; 


// const BuildingIcon = () => (
//     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M3 21V10L12 3L21 10V21H15V14H9V21H3Z" fill="#4C79D3"/>
//     </svg>
// );


// const featuresData = [
//   { line1: 'Single Family', line2: 'Residence', icon: <img src ="ruler.png" className="h-8 w-8 text-[#121828]" />  },
//   { line1: 'Built in', line2: '1929', icon: <img src ="ruler.png" className="h-8 w-8 text-[#C4D9FF80]"/> },
//   { line1: '7,500 Square', line2: 'Feet Lot', icon: <img src ="ruler.png"className="h-8 w-8 text-[#C4D9FF80]" /> },
//   { line1: '$273,400', line2: 'Zestimate®', icon: <img src ="ruler.png" className="h-8 w-8 text-[#C4D9FF80]"/> },
//   { line1: '$343 /', line2: 'square fit', icon: <img src ="ruler.png"className="h-8 w-8 text-[#C4D9FF80]" /> },
//   { line1: '$ 255', line2: 'HOA', icon: <img src ="ruler.png"className="h-8 w-8 text-[#C4D9FF80]" /> },
// ];

// const MainFeatures = () => {
//   return (
//     <div className="bg-white p-2 rounded-lg ">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//             <h2 className="text-[28px] font-extrabold text-[#2450A0]" style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
//                 Main
//             </h2>
//             <h2 className="text-[28px] font-extrabold text-gray-800 -mt-2" style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
//                 Features
//             </h2>
//         </div>
//         <button className="bg-gray-100 hover:bg-gray-200 rounded-lg p-2">
//           <img src="/arrow-down (1).png" className="h-6 w-6 text-gray-600" />
//         </button>
//       </div>

//       <div className="grid grid-cols-2 gap-5">
//         {featuresData.map((feature, index) => (
//           <FeatureCard
//             key={index}
//             line1={feature.line1}
//             line2={feature.line2}
//             icon={feature.icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainFeatures;
import { useState } from 'react';
import FeatureCard from './FeatureCard';

const featuresData = [
  { line1: 'Single Family', line2: 'Residence', icon: <img src="ruler.png" className="h-8 w-8" /> },
  { line1: 'Built in', line2: '1929', icon: <img src="ruler.png" className="h-8 w-8" /> },
  { line1: '7,500 Square', line2: 'Feet Lot', icon: <img src="ruler.png" className="h-8 w-8" /> },
  { line1: '$273,400', line2: 'Zestimate®', icon: <img src="ruler.png" className="h-8 w-8" /> },
  { line1: '$343 /', line2: 'square fit', icon: <img src="ruler.png" className="h-8 w-8" /> },
  { line1: '$ 255', line2: 'HOA', icon: <img src="ruler.png" className="h-8 w-8" /> },
];

const MainFeatures = () => {
  const [isOpen, setIsOpen] = useState(true); // ⬅️ Track open/close state

  const toggleFeatures = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-2 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[28px] font-extrabold text-[#2450A0]" style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
            Main
          </h2>
          <h2 className="text-[28px] font-extrabold text-gray-800 -mt-2" style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
            Features
          </h2>
        </div>
        <button
          onClick={toggleFeatures}
          className="bg-gray-100 hover:bg-gray-200 rounded-lg p-2"
        >
          <img
            src="/arrow-down (1).png"
            className={`h-6 w-6 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            alt="Toggle"
          />
        </button>
      </div>

      {isOpen && (
        <div className="grid grid-cols-2 gap-5">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              line1={feature.line1}
              line2={feature.line2}
              icon={feature.icon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainFeatures;
