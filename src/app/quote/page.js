// 'use client';

// import Header2 from "@/components/Header2";

// export default function MovingDetail() {
//   return (
//     <div className="relative font-nunito text-gray-900 bg-gray-50 min-h-screen overflow-hidden">
//       {/* 🎨 Background Circles */}
//       <div
//         className="absolute rounded-full bg-gradient-to-br from-[#C4D9FF] to-[#FFFFFF] z-0"
//         style={{
//           width: '299.77px',
//           height: '321.24px',
//           top: '-174.05px',
//           right: '-144px',
//           transform: 'rotate(100deg)',
//           opacity: 1,
//         }}
//       ></div>

//       <div
//         className="absolute rounded-full bg-gradient-to-br from-[#88abeb] to-[#FFFFFF] z-0 border-2 border-[#C4D9FF]"
//         style={{
//           width: '323.32px',
//           height: '348.24px',
//           top: '-238.69px',
//           right: '-169px',
//           transform: 'rotate(-31.84deg)',
//           opacity: 1,
//         }}
//       ></div>

//       {/* 📌 Header */}
//       <Header2 />

//       {/* 👇 Main Quote Box Section */}
//       <main className="pt-[210px] pb-12 flex justify-center relative z-10">
//         <div className="w-[375px] px-4 flex flex-col items-center gap-[20px] text-center">
//           {/* 💬 WhatsApp Box */}
//           <div className=" rounded-xl p-5 w-full bg-white shadow-md">
//             <h2 className="text-[24px]  text-[#000000] font-extrabold mb-2">
//               Hi there! 👋
//             </h2>
//             <p className="text-[16px] text-[#000000] mb-2">
//               You're about to connect with our team on <strong>WhatsApp</strong> to request a quote.
//             </p>
//             <p className="text-[16px] text-[#000000] mb-4">
//               We’ll respond shortly with pricing and details. <br />
//               Feel free to type your message or use the default one below:
//             </p>
//             <button className="bg-[#2450A0] hover:bg-blue-800 text-white font-semibold text-[14px] py-2 px-6 rounded-full shadow">
//               SEE OFFERS
//             </button>
//           </div>

//           {/* 🧍‍♂️ User Graphic with location */}
//           <div className="relative mt-6 ml-30">
//             <img
//               src="/pana.png" // <-- use correct image path
//               alt="Current Location"
//               className="w-full max-w-xs"
//             />
//             <p className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-[#2450A0] px-3 py-1 rounded-full shadow">
//               CURRENT LOCATION
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* 👇 Bottom-left bubble */}
//       <img
//         src="/bubble 4.png"
//         alt="Bottom Wave"
//         className="absolute bottom-0 z-0"
//         style={{ width: "150px" }}
//       />
//     </div>
//   );
// }
'use client';

import Header2 from "@/components/Header2";

export default function MovingDetail() {
  return (
    <div className="relative font-nunito text-gray-900 bg-gray-50 min-h-screen overflow-hidden">
      {/* 🎨 Background Circles */}
      <div
        className="absolute rounded-full bg-gradient-to-br from-[#C4D9FF] to-[#FFFFFF] z-0"
        style={{
          width: '400px',
          height: '400px',
          top: '-174.05px',
          right: '-144px',
          transform: 'rotate(100deg)',
          opacity: 1,
        }}
      ></div>

      <div
        className="absolute rounded-full bg-gradient-to-br from-[#88abeb] to-[#FFFFFF] z-0 border-2 border-[#C4D9FF]"
        style={{
          width: '430px',
          height: '430px',
          top: '-238.69px',
          right: '-169px',
          transform: 'rotate(-31.84deg)',
          opacity: 1,
        }}
      ></div>

      {/* 📌 Header */}
      <Header2 />

      {/* 👇 Main Quote Box Section */}
      <main className="pt-[210px] pb-12 flex justify-center relative z-10">
        <div className="w-[375px] px-4 flex flex-col items-center gap-[20px] text-center">
          {/* 💬 WhatsApp Box */}
          <div className="bg-white shadow-md rounded-xl px-6 py-5 w-full space-y-4 rounded-[20px]">
            <h2 className="text-lg font-extrabold text-[#000000]">
              Hi there! 👋
            </h2>
            <p className="text-sm text-[#000000] leading-5">
              You're about to connect with our team on <strong>WhatsApp</strong> to request a quote.
            </p>
            <p className="text-sm text-[#000000] leading-5">
              We’ll respond shortly with pricing and details.
              <br />
              Feel free to type your message or use the default one below:
            </p>
            <button className="bg-[#2450A0] hover:bg-blue-800 text-white text-sm font-semibold py-2 px-5 rounded-full shadow">
              SEE OFFERS
            </button>
          </div>

          {/* 🧍‍♂️ User Graphic with location */}
          <div className="relative mt-6 ml-30">
            <img
              src="/pana.png"
              alt="Current Location"
              className="w-full max-w-xs"
            />
            <p className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-[#2450A0] px-3 py-1 rounded-full shadow">
              CURRENT LOCATION
            </p>
          </div>
        </div>
      </main>

      {/* 👇 Bottom-left bubble */}
      <img
        src="/bubble 4.png"
        alt="Bottom Bubble"
        className="absolute bottom-0 z-0"
        style={{ width: "150px" }}
      />
    </div>
  );
}
