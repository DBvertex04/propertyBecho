"use client";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const offersData = [
  {
    title: "Vally Apartment In Gandhi Park Apartment For Sale In UP West",
    users: [
      { name: "Saheel", price: "$280,000", status: "pending", image: "/shahil.png" },
      { name: "Jacky", price: "$250,000", status: "pending", image: "/shahil.png" },
      { name: "Bonn", price: "$210,000", status: "pending", image: "/shahil.png" },
    ],
  },
  {
    title: "Vally Apartment In Gandhi Park Apartment For Sale In UP West",
    users: [
      { name: "John", price: "$290,000", status: "accepted", image: "/shahil.png"},
    ],
  },
  {
    title: "1 RK Apartment In Vishnu Park Apartment For Sale In Virar West",
    users: [
      { name: "Sarif", price: "$270,000", status: "declined", image: "/shahil.png"},
    ],
  },
];

// function OfferCard({ user }) {
//   return (
//     <div className="flex items-center justify-between py-2">
//       <div className="flex items-center gap-3">
//         <img
//           src={user.image}
//           alt={user.name}
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         <p className="font-semibold text-gray-800">{user.name}</p>
//       </div>
//       <div className="flex items-center gap-2">
//         <span className="font-bold text-[#2450A0]">{user.price}</span>
//         {user.status === "pending" ? (
//           <>
//             <button className="flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full hover:bg-green-600">
//               <CheckCircleIcon className="w-4 h-4" />
//               Accept
//             </button>
//             <button className="flex items-center gap-1 bg-red-500 text-white text-xs px-3 py-1 rounded-full hover:bg-red-600">
//               <XCircleIcon className="w-4 h-4" />
//               Decline
//             </button>
//           </>
//         ) : (
//           <span
//             className={`text-xs font-semibold px-3 py-1 rounded-full ${
//               user.status === "accepted"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-red-100 text-red-700"
//             }`}
//           >
//             {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }
// function OfferCard({ user }) {
//   return (
//     <div className="flex flex-wrap items-center justify-between gap-2 py-3">
//       {/* Left: Image + Name + Price */}
//       <div className="flex items-center gap-2 min-w-0">
//         <img
//           src={user.image}
//           alt={user.name}
//           className="w-10 h-10 rounded-full object-cover flex-shrink-0"
//         />
//         <div className="flex flex-col">
//           <p className="font-semibold text-[11px] text-[#1B1F26B8] truncate">{user.name}</p>
//           <span className="font-bold text-[13px] text-[#2450A0] truncate "style={{ fontFamily: 'Poppins, ' }}>{user.price}</span>
//         </div>
//       </div>

//       {/* Right: Buttons or Status */}
//       <div className="flex gap-2 flex-wrap justify-end">
//         {user.status === "pending" ? (
//           <>
//             <button className="flex items-center gap-1 bg-[#00B36B] text-[#D9D9D9] text-[11px] px-3 py-1 rounded-full hover:bg-green-600 whitespace-nowrap">
//               <CheckCircleIcon className="w-4 h-4" />
//               Accept
//             </button>
//             <button className="flex items-center gap-1 bg-[#FF5B5B] text-[#D9D9D9] text-[11px] px-3 py-1 rounded-full hover:bg-red-600 whitespace-nowrap">
//               <XCircleIcon className="w-4 h-4" />
//               Decline
//             </button>
//           </>
//         ) : (
//           <span
//             className={`text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
//               user.status === "accepted"
//                 ? "bg-[#00B36B]  text-[#D9D9D9]"
//                 : "bg-[#FF5B5B] text-[#D9D9D9]"
//             }`}
//           >
//             {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }
function OfferCard({ user }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 py-3 bg-white">
      {/* Left: Image + Name + Price (in one row) */}
      <div className="flex items-center gap-2 min-w-0">
        <img
          src={user.image}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-semibold text-[11px] text-[#1B1F26B8] truncate">{user.name}</p>
          <span className="font-bold text-[13px] text-[#2450A0] truncate" style={{ fontFamily: 'Poppins' }}>
            {user.price}
          </span>
        </div>
      </div>

      {/* Right: Buttons or Status */}
      <div className="flex gap-2 flex-wrap justify-end">
        {user.status === "pending" ? (
          <>
            <button className="flex items-center gap-1 bg-[#00B36B] text-[#D9D9D9] text-[11px] px-3 py-1 rounded-full hover:bg-green-600 whitespace-nowrap">
              <CheckCircleIcon className="w-4 h-4" />
              Accept
            </button>
            <button className="flex items-center gap-1 bg-[#FF5B5B] text-[#D9D9D9] text-[11px] px-3 py-1 rounded-full hover:bg-red-600 whitespace-nowrap">
              <XCircleIcon className="w-4 h-4" />
              Decline
            </button>
          </>
        ) : (
          <span
            className={`text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
              user.status === "accepted"
                ? "bg-[#00B36B]  text-[#D9D9D9]"
                : "bg-[#FF5B5B] text-[#D9D9D9]"
            }`}
          >
            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
          </span>
        )}
      </div>
    </div>
  );
}



export default function MyOffers() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-6 md:py-12 font-nunito">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-[24px]  font-bold text-[#000000] mb-1">
          My <span className="text-[#2450A0] text-[24px]">Offers</span>
        </h2>
        <p className="text-[14px] text-[#666666]  mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>

          Welcome to our exclusive offers page! <br className="md:hidden" />
          Here you will find the best deals...
        </p>

        {/* Offers List */}
        <div className="flex flex-col gap-6">
          {offersData.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-4 md:p-6"
            >
              <h3 className="text-[16px] md:text-base font-semibold text-[#0A0909] mb-4"  style={{ fontFamily: 'Poppins, sans-serif' }}>
                {offer.title}
              </h3>
              <div className="flex flex-col gap-3">
                {offer.users.map((user, i) => (
                  <OfferCard key={i} user={user} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
