// // फ़ाइल: components/FeatureCard.js

// const FeatureCard = ({ line1, line2, icon, subLabel }) => {
//   return (
//     <div className="relative bg-blue-50/50 hover:bg-blue-100 transition-colors duration-300 rounded-2xl p-5 overflow-hidden">
      
//       <div className="absolute top-0 right-0 h-full w-2/5 bg-blue-100 clip-diagonal">
//         <div className="flex flex-col items-center justify-center h-full">
//           {icon}
//           {subLabel && (
//             <span className="mt-1 text-xs bg-purple-200 text-purple-800 font-bold px-1.5 py-0.5 rounded">
//               {subLabel}
//             </span>
//           )}
//         </div>
//       </div>

//       <div className="relative">
//         <p className="text-gray-700 font-semibold">{line1}</p>
//         {line2 && <p className="text-gray-700 font-semibold">{line2}</p>}
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;
// फ़ाइल: components/FeatureCard.js

const FeatureCard = ({ line1, line2, icon }) => {
  return (
    // यहाँ से h-[90px] हटा दिया गया है और min-h-[90px] जोड़ा गया है।
    // इससे कार्ड की ऊंचाई कंटेंट के अनुसार बढ़ सकती है, लेकिन 90px से कम नहीं होगी।
    <div className="relative flex items-center bg-[#E9F0FF] rounded-xl overflow-hidden shadow-sm min-h-[90px]">
      
      {/* 1. Text Content Area (यह अपने आप एडजस्ट होगा) */}
      <div className="p-4 flex-1">
        <p className="font-bold text-[#121828] text-[14px]">{line1}</p>
        <p className=" font-bold text-[#121828] text-[14px]">{line2}</p>
      </div>

      {/* 2. Icon Area (यह फ्लेक्सिबल रहेगा) */}
      <div
        className="absolute top-0 right-0 h-full w-[80px] bg-[#DDE6FA] flex items-center justify-center"
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <div className="pl-5 ">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;